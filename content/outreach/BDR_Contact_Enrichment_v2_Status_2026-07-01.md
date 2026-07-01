# BDR Contact Enrichment v2 Status

Prepared: 2026-07-01

## Current State

The contact-enrichment layer has been created in n8n.

- Workflow name: `BDR Agent v2 - Contact Enrichment`
- Workflow ID: `WAYqMRuWsfF7mqyi`
- Workflow URL: `https://emergent-logic.app.n8n.cloud/workflow/WAYqMRuWsfF7mqyi`
- n8n project: `Himani <himani@emergent-logic.ca>`
- Active: `false`
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

## Current Blocker

n8n MCP created and validated the workflow, but n8n did not auto-bind the Apify bearer credential to the HTTP Request node.

MCP attempt to bind credential failed with:

`node type 'n8n-nodes-base.httpRequest' does not accept credential 'httpBearerAuth'`

Chrome fallback also hit a login screen for n8n, so the credential could not be selected through the UI in this run.

## Exact Unblock Step

Open:

`https://emergent-logic.app.n8n.cloud/workflow/WAYqMRuWsfF7mqyi`

Then:

1. Open node `Run Apify Contact Search`.
2. In `Authentication`, keep `Generic Credential Type`.
3. In `Generic Auth Type`, keep `Bearer Auth`.
4. Select the existing Apify bearer credential.
5. Save the node.
6. Run `Manual Contact Enrichment Test`.
7. If the run succeeds, publish/activate the workflow.

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
