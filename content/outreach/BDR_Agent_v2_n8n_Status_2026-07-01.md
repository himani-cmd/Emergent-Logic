# BDR Agent v2 n8n Status

Prepared: 2026-07-01

## Current State

BDR Agent v2 has been created, tested, and activated in n8n.

- Workflow name: `BDR Agent v2 - Prospect Discovery`
- Workflow ID: `Gwy2jIFCjroy5xCR`
- Workflow URL: `https://emergent-logic.app.n8n.cloud/workflow/Gwy2jIFCjroy5xCR`
- n8n project: `Himani <himani@emergent-logic.ca>`
- Active: `true`
- Active version ID: `5d3429c0-614e-4b26-8b69-af341760c4ee`
- Schedule: daily at 06:30
- Data table: `bdr_prospect_queue_v2`
- Data table ID: `Qc2A6KWlV1LNjF06`
- Weekly target: 50-70 qualified prospect/account signals

## Fix Log

2026-07-01:

- Fixed Apify actor input error: `input.queries must be string`.
- Root cause: workflow originally sent `queries` as an array.
- Current body now sends `queries: $json.query` as a string.
- Full manual workflow execution succeeded after the fix.
- Published the workflow so the daily schedule can run automatically.
- Added US + Canada searches.
- Replaced URL/domain parsing with regex parsing after the n8n Code node hit a URL parsing/syntax issue.
- Tightened the quality gate so `RESEARCH_NEEDED` and `BLOCKED` rows do not save.
- Blocked low-quality job boards and generic listing sources from passing through.
- Final production execution saved route-worthy account signals from direct/semi-direct hiring pages.

## What It Does

The workflow runs a daily prospect discovery scan at 06:30 and can also be run manually.

It searches high-intent CRM and RevOps signals, including:

- HubSpot administration
- Salesforce administration
- Revenue Operations
- Marketing Operations
- GTM systems
- CRM cleanup
- workflow automation
- reporting and attribution problems

It then normalizes and scores the results.

## Quality Rules

The agent is designed to avoid the previous generic-outreach problem.

It saves only rows with:

- score of 70 or higher
- non-blocked domain
- useful route classification

Classifications:

- `LINKEDIN_READY`: named LinkedIn profile found; do not email until a public work email is verified.
- `ROUTE_NEEDED`: company or hiring signal found; find named owner before email draft.
- `RESEARCH_NEEDED`: not enough signal yet.
- `BLOCKED`: blocked company/domain.

The workflow does not create Gmail drafts and does not send emails.

## Blocklist

The workflow blocks:

- `bigbang360.com`

The workflow should never create prospects for BigBang360 or any `@bigbang360.com` contact.

## Test Result

Manual pinned test execution succeeded.

- Test execution ID: `448`
- Test used a fake BigBang360-style result.
- The workflow classified it as `BLOCKED`.
- The filter prevented it from reaching the data table save step.

Full manual execution also succeeded after the Apify input fix.

- Execution ID: `451`
- Status: `success`
- Result: qualified rows were saved to `bdr_prospect_queue_v2`.
- Example saved classifications: `LINKEDIN_READY`.
- Important guardrail: saved LinkedIn rows are not email-ready until a public work email is verified.

Final production execution after the quality fixes succeeded.

- Execution ID: `457`
- Status: `success`
- Active version ID: `5d3429c0-614e-4b26-8b69-af341760c4ee`
- Result: `ROUTE_NEEDED` rows were saved from direct/semi-direct hiring signals.
- Example accounts: Toast, Upgrade, MongoDB, Hover, Vim, Blackthorn, Embrace, SafeBreach, Aiven.
- These rows are account signals, not email-ready contacts.

## Current Blocker

No blocker for discovery. The workflow is active.

The remaining gap is the downstream research/draft step. The current workflow intentionally does not create Gmail drafts or send emails.

## Downstream Workflow Status

The next layer has been created but is not active yet.

- Workflow name: `BDR Agent v2 - Contact Enrichment`
- Workflow ID: `WAYqMRuWsfF7mqyi`
- Workflow URL: `https://emergent-logic.app.n8n.cloud/workflow/WAYqMRuWsfF7mqyi`
- Destination table: `bdr_contact_queue_v2`
- Destination table ID: `w7y29k4RfyZGdn1O`

This enrichment workflow reads `ROUTE_NEEDED` account rows and searches for named LinkedIn buyer routes.

Current blocker: n8n MCP cannot attach the Apify bearer credential to the HTTP Request node. The node must be opened in n8n and the existing bearer credential selected manually before publishing.

See: `content/outreach/BDR_Contact_Enrichment_v2_Status_2026-07-01.md`

## Next Workflow

After contact enrichment is active, build `BDR Agent v2 - Draft Creator`.

That second workflow should only process rows upgraded to `PERSON_READY`:

- named person
- verified public work email
- relevant pain signal
- not blocked
- not generic inbox

Sender must remain:

- `bhavuk.sood@emergent-logic.ca`
