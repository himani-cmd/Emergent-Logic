# BDR Contact Enrichment v2 Status

Prepared: 2026-07-01

## Current State

The contact-enrichment layer has been created in n8n.

- Workflow name: `BDR Agent v2 - Contact Enrichment`
- Workflow ID: `WAYqMRuWsfF7mqyi`
- Workflow URL: `https://emergent-logic.app.n8n.cloud/workflow/WAYqMRuWsfF7mqyi`
- n8n project: `Himani <himani@emergent-logic.ca>`
- Active: `true`
- Schedule configured: daily at 07:10
- Source table: `bdr_prospect_queue_v2`
- Source table ID: `Qc2A6KWlV1LNjF06`
- Destination table: `bdr_contact_queue_v2`
- Destination table ID: `w7y29k4RfyZGdn1O`

## What It Does

This workflow turns account-level CRM buying signals into named contact routes.

It reads `ROUTE_NEEDED` rows from `bdr_prospect_queue_v2`, builds focused LinkedIn people-search queries, runs Apify Google Search, scores named buyer routes, and saves only qualified people into `bdr_contact_queue_v2`.

The workflow does not create Gmail drafts and does not send emails.

## Quality Gate

Rows are saved only when they pass all of these rules:

- classification = `LINKEDIN_READY`
- score >= 75
- named person is present
- LinkedIn profile URL is present
- not blocked
- no generic inbox is used
- email remains blank until a public work email is verified

Blocked terms include:

- `bigbang360.com`
- `@bigbang360.com`
- consultants, agencies, freelancers, recruiters, and hiring/talent profiles

## Test Result

Pinned workflow test succeeded.

- Test execution ID: `458`
- Status: `success`
- Test result: fake LinkedIn buyer route passed scoring and reached the contact table.

Cleanup was also completed.

- Cleanup workflow ID: `cMiJKZjANAlI1pJs`
- Cleanup execution ID: `459`
- Status: `success`
- Result: fake `Jane Smith` test row was deleted from `bdr_contact_queue_v2`
- Cleanup workflow was archived after successful deletion.

## Live Run Result

The Apify bearer credential was added in n8n and the live workflow run succeeded.

- Live execution ID: `468`
- Status: `success`
- Active version ID: `e3db443d-5d7d-4853-a9de-55c891f9a5e3`
- Result: named LinkedIn buyer routes were saved into `bdr_contact_queue_v2`

Example saved routes included RevOps / CRM-adjacent people from high-intent account signals. These rows remain `Needs Work Email Verification` because the workflow intentionally does not guess emails or create Gmail drafts.

## Current Blocker

There is no n8n execution blocker now.

The next operational blocker is email verification. The system can find named LinkedIn routes, but it should not create Gmail drafts until a public work email or approved contact route is verified.

## 2026-07-01 Quality Gate Update

After live execution `471`, the enrichment workflow was too loose. It saved some routes that matched a company name but were not clearly CRM, RevOps, HubSpot, Salesforce, GTM, Sales Ops, or Marketing Ops buyers.

The enrichment logic was tightened and republished.

- Final active version ID: `a9c3b2e8-a734-4f32-8add-209bf4a7f805`
- Verification execution ID: `473`
- Verification status: `success`
- Verification result: 1 high-confidence buyer route saved

Saved high-confidence route:

- Company: CaptivateIQ
- Contact: Johnathan Warren
- Role: 3x Head of Revenue Operations
- LinkedIn: `https://www.linkedin.com/in/johnathanwarren`
- Status: `Needs Work Email Verification`

Rows created before execution `473` should be treated as `Needs QA`, not send-ready.

## Revenue Use

This workflow is the bridge between account discovery and actual outbound.

Discovery finds companies with CRM pain signals.

Contact enrichment finds named buyers.

The next workflow should only create Gmail drafts after a row becomes:

- named person
- verified public work email
- relevant pain signal
- no blocklist hit
- sender: `bhavuk.sood@emergent-logic.ca`

No drafts should be created for generic inboxes like `info@`, `contact@`, `sales@`, `hello@`, or `support@` unless explicitly approved.
