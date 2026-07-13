import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const maxSessionSeconds = 180;

const consultationTool = {
  type: 'function',
  name: 'prepare_consultation',
  description:
    'Prepare a concise consultation handoff for the existing Emergent Logic contact form after the visitor asks for human help or a review.',
  parameters: {
    type: 'object',
    properties: {
      business_name: {
        type: 'string',
        description: 'Business name only if the visitor stated it voluntarily. Do not ask for it by voice.',
      },
      crm_platform: {
        type: 'string',
        description: 'Salesforce, HubSpot, spreadsheets, Zoho, another CRM, unknown, or not provided.',
      },
      primary_problem: {
        type: 'string',
        description: 'The main CRM, lead-routing, follow-up, reporting, or automation problem.',
      },
      desired_outcome: {
        type: 'string',
        description: 'The practical result the visitor wants.',
      },
      urgency: {
        type: 'string',
        description: 'Desired timing or urgency, if stated.',
      },
      lead_volume: {
        type: 'string',
        description: 'Approximate team size or lead volume, if stated.',
      },
      conversation_summary: {
        type: 'string',
        description: 'A concise, non-sensitive summary for a human consultant. Do not include passwords, payment data, private CRM records, IDs, phone numbers, or email addresses.',
      },
    },
    required: [
      'business_name',
      'crm_platform',
      'primary_problem',
      'desired_outcome',
      'urgency',
      'lead_volume',
      'conversation_summary',
    ],
    additionalProperties: false,
  },
};

const instructions = `
You are Emergent Logic AI Consultant, a practical voice lead concierge for Emergent Logic.

First spoken line exactly:
"Hi, I’m Emergent Logic’s AI consultant. What is the biggest problem in your CRM or lead follow-up right now?"

Business outcome:
The visitor explains a CRM, lead-routing, follow-up, reporting, or automation problem. You qualify the issue naturally, give a practical next step, then prepare a structured consultation handoff for the existing contact form when the visitor wants human help.

Confirmed public scope from emergent-logic.ca:
Emergent Logic helps with CRM implementation, CRM cleanup, HubSpot consulting, Salesforce consulting, Zoho CRM, marketing automation, lead capture systems, website form-to-CRM implementation, lead routing, follow-up workflows, reporting/dashboard cleanup, AI chatbot automation, and AI automation consulting for businesses in Surrey, Greater Vancouver, and Canada.

Conversation rules:
- Keep responses practical and under three sentences.
- Qualify naturally for: process or result needing repair; CRM/system involved; what breaks or gets missed; approximate team size or lead volume; desired timing or urgency.
- Discuss only information confirmed on emergent-logic.ca.
- Do not invent prices, guarantees, credentials, case-study results, bookings, implementation timelines, or integrations.
- Never request passwords, payment data, private CRM records, government IDs, email addresses, phone numbers, or sensitive customer details by voice.
- If the visitor tries to share sensitive data, stop them and ask for a high-level description instead.
- If asked about pricing or timelines, say a human review is needed after the contact form because scope depends on the system and cleanup required.
- If the visitor wants help, a review, a call, a quote, next steps, or asks to send the summary, call prepare_consultation.

When calling prepare_consultation:
- Use empty strings for unknown fields.
- Keep conversation_summary concise and non-sensitive.
- After the tool succeeds, tell the visitor the contact form has been prepared and they should type their email and phone visually in the form before submitting.
`.trim();

function jsonResponse(payload, status) {
  return NextResponse.json(payload, {
    status,
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}

function mapOpenAIError(status) {
  if (status === 401 || status === 403) return 'voice_agent_auth_error';
  if (status === 408) return 'voice_agent_timeout';
  if (status === 429) return 'voice_agent_quota_error';
  if (status >= 500) return 'voice_agent_upstream_error';
  return 'voice_agent_configuration_error';
}

export async function POST(request) {
  if (process.env.VOICE_AGENT_ENABLED !== 'true') {
    return jsonResponse({ error: 'voice_agent_disabled' }, 404);
  }

  if (!process.env.OPENAI_API_KEY) {
    return jsonResponse({ error: 'voice_agent_not_configured' }, 503);
  }

  if (request.headers.get('x-voice-consent') !== 'acknowledged') {
    return jsonResponse({ error: 'voice_agent_consent_required' }, 400);
  }

  const origin = request.headers.get('origin');
  const requestHost = request.headers.get('x-forwarded-host') || request.headers.get('host');
  if (origin && requestHost) {
    try {
      if (new URL(origin).host !== requestHost) {
        return jsonResponse({ error: 'voice_agent_origin_rejected' }, 403);
      }
    } catch {
      return jsonResponse({ error: 'voice_agent_origin_rejected' }, 403);
    }
  }

  const model = process.env.OPENAI_REALTIME_MODEL || 'gpt-realtime-2.1-mini';
  const voice = process.env.OPENAI_REALTIME_VOICE || 'marin';
  const requestId = randomUUID();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch('https://api.openai.com/v1/realtime/client_secrets', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
        'X-Client-Request-Id': requestId,
        'OpenAI-Safety-Identifier': `anonymous-voice-${requestId}`,
      },
      body: JSON.stringify({
        expires_after: {
          anchor: 'created_at',
          seconds: maxSessionSeconds,
        },
        session: {
          type: 'realtime',
          model,
          instructions,
          output_modalities: ['audio'],
          audio: {
            input: {
              turn_detection: {
                type: 'server_vad',
              },
            },
            output: {
              voice,
            },
          },
          reasoning: {
            effort: 'low',
          },
          tools: [consultationTool],
          tool_choice: 'auto',
          max_output_tokens: 900,
        },
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      return jsonResponse({ error: mapOpenAIError(response.status) }, response.status === 429 ? 429 : 502);
    }

    const data = await response.json();

    if (!data?.value) {
      return jsonResponse({ error: 'voice_agent_secret_missing' }, 502);
    }

    return jsonResponse(
      {
        value: data.value,
        expires_at: data.expires_at || null,
        model,
        max_duration_seconds: maxSessionSeconds,
      },
      200
    );
  } catch (error) {
    const reason = error?.name === 'AbortError' ? 'voice_agent_timeout' : 'voice_agent_network_error';
    return jsonResponse({ error: reason }, 502);
  } finally {
    clearTimeout(timeout);
  }
}
