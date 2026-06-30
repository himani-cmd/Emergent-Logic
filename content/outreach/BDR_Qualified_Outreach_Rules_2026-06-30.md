# BDR Qualified Outreach Rules

Prepared: 2026-06-30  
Owner: Emergent Logic BDR Agent  
Sender: `bhavuk.sood@emergent-logic.ca`

## Goal

Stop sending generic outbound. Every prospect must pass a qualification gate before it becomes a Gmail draft.

## Hard Exclusions

- BigBang360, `@bigbang360.com`, current-employer contacts, or related companies.
- Doug Cheetham, MC Renovation and Painting, or `mc@paintandreno.com`.
- Personal emails unless the contact publicly lists that email for business use.
- Guessed emails.
- Companies with no visible CRM, intake, lead routing, RevOps, automation, or follow-up pain.

## Qualification Gate

A prospect is qualified only if it has all four:

1. **Pain trigger**
   - Open RevOps, CRM admin, HubSpot, Salesforce, marketing ops, sales ops, or automation role.
   - Multiple visible inquiry paths, forms, locations, agents, advisors, consultants, or portals.
   - Website leads likely route to inbox/manual follow-up.
   - Recent GTM leadership change, hiring spike, or expansion.

2. **Relevant person**
   - Founder, CEO, CRO, VP/Director RevOps, Marketing Ops, Sales Ops, CRM/Admin leader, Operations leader.
   - If no named person exists, the row must explain why a team inbox is still worth using.

3. **Delivery route**
   - `PERSON_READY`: named person + public work email or a verified named-person contact route.
   - `LINKEDIN_READY`: named person + LinkedIn profile route; do not create Gmail draft.
   - `FORM_READY`: named person + company contact form where the message can ask to route to that person/team; do not create Gmail draft.
   - `ROUTE_NEEDED`: named contact found, but needs LinkedIn/contact-form/manual verification.
   - `GENERIC_ONLY`: only a generic address like `info@`, `sales@`, `support@`, `contact@`, `hello@`, or `wecare@` exists. Do not create Gmail draft unless the user explicitly approves generic inbox outreach.
   - `HOLD`: interesting company but not enough proof or route yet.

4. **Pain-led email angle**
   - The first sentence must reference a real signal.
   - The offer must be specific: CRM cleanup, HubSpot workflow repair, Salesforce admin support, intake routing, or website-to-CRM follow-up.
   - CTA should ask for a small next step, not a broad strategy call.

## Draft Quality Rules

- 90-120 words.
- Short paragraphs to avoid squeezed Gmail formatting.
- No long raw URLs unless essential.
- No fake case-study claims.
- No “we help businesses grow” language.
- No generic “I came across your website” opener.
- One pain signal only. Do not cram three ideas into one email.
- CTA examples:
  - “Open to a quick review of one handoff path?”
  - “Would a 5-point CRM cleanup checklist be useful?”
  - “Worth sending over a simple lead-routing audit?”

## Tomorrow Send Batch Standard

Minimum target:

- 20 qualified contacts.
- At least 12 should be named-person routes.
- Gmail drafts should only be created for `PERSON_READY`.
- `GENERIC_ONLY` rows can be kept for research, but they are not send-ready.
- Zero blocked domains.
- Zero guessed emails.
- Every draft must include the company-specific pain signal.

If the BDR agent cannot safely create 20 high-quality named-person contacts, it should stop at the number that passes the gate rather than fill with low-quality prospects or generic inboxes.
