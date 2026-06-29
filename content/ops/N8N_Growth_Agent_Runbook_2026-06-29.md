# n8n Growth Agent Runbook

Prepared: 2026-06-29

## Purpose

This runbook keeps Emergent Logic growth operations clear: which agents are live, what they do, what is safe to run, and what is blocked.

## Hard Rules

- Never contact `@bigbang360.com`.
- Never contact Big Bang 360 prospects.
- Never contact Doug Cheetham, MC Renovation and Painting, or `mc@paintandreno.com`.
- Outbound drafts must be prepared from `bhavuk.sood@emergent-logic.ca`.
- Do not create fake case-study claims. Use `representative implementation pattern`, `internal build pattern`, or `example workflow`.
- BDR should prioritize researched pain signals over raw quantity.
- Live email send stays disabled unless explicitly verified and intentionally enabled.

## Active Workflows

| Workflow | ID | Status | Safe To Run? | Notes |
|---|---|---:|---:|---|
| Emergent Logic BDR Agent v1 | `BgRB8wmKElNtemNh` | Active | Not until Gmail sender is verified | Draft-only. Send node is disabled. Must verify drafts land in Bhavuk mailbox. |
| Emergent Logic Prospect Finder v2 | `GuGbcpfbo5GBlXO4` | Active | Blocked | Apify bearer credential currently returns 401. Fix before running paid prospecting. |
| Emergent Logic Website Email Enrichment v1 | `WTEzssmlu9iWVUZN` | Active | Yes, if sheet has rows needing emails | Finds public emails from prospect websites. Does not approve or send. |
| Emergent Logic Approved Prospect Sync v2 | `zabvZRB3fuxDExv6` | Active | Yes, for approved rows | Syncs approved prospects to HubSpot. |
| Website Contact to HubSpot Sync | `yCuSizm865Dt3V51` | Active | Yes | Website form to HubSpot path. |
| Emergent Logic Social Agent v1 | `OSnJwxngQtrmbaz0` | Active | Yes for LinkedIn profile rows; Meta only when image/account is valid | LinkedIn company posting is blocked by permissions. Instagram/Facebook require public image URL and Meta account readiness. |
| Emergent Logic SEO Daily Orchestrator | `7HYGt4M9TGZqAUJF` | Active | Yes | Generates SEO/content queue assets. |

## Current Blockers

### Prospect Finder Apify Credential

Latest error: `401 user-or-token-not-found` from Apify.

Impacted node:

- Workflow: `Emergent Logic Prospect Finder v2`
- Node: `Run Apify Google Maps Scraper`
- Current credential: `Bearer Auth account`

Fix in n8n UI:

1. Open `Emergent Logic Prospect Finder v2`.
2. Open node `Run Apify Google Maps Scraper`.
3. Confirm Authentication is `Generic Credential Type`.
4. Confirm Generic Auth Type is `Bearer Auth`.
5. Select the valid Apify credential.
6. Test the node with one small query first.
7. Only after success, run the full workflow.

Do not run the workflow while this returns 401. It will not generate prospects and may waste time.

### BDR Gmail Sender

BDR creates drafts using the Gmail credential attached to its Gmail nodes.

Required verification:

1. Open `Emergent Logic BDR Agent v1`.
2. Open node `Create Gmail Draft`.
3. Confirm the Gmail credential belongs to `bhavuk.sood@emergent-logic.ca`.
4. Run one test row only.
5. Confirm the draft appears in Bhavuk's Gmail Drafts.
6. Keep `Send Gmail Message` disabled unless intentionally switching from draft mode to send mode.

## Prospecting Flow

1. Prospect Finder sources companies into `prospect_intake_template`.
2. Rows should default to:
   - `automation_status = needs_research`
   - `approved_for_outreach = No`
3. Research/enrichment adds a specific pain signal.
4. Only qualified rows should be changed to:
   - `approved_for_outreach = yes`
   - `automation_status = ready_to_send`
   - `send_mode = draft`
5. BDR Agent creates Gmail drafts and updates HubSpot.

## Qualification Standard

A row is not ready just because it has an email.

Ready rows should include one of:

- Clear HubSpot/Salesforce/CRM mention.
- Hiring signal for CRM admin, sales ops, RevOps, marketing ops, or automation.
- Visible website forms or consultation/quote requests.
- Multi-location, multi-agent, or multi-advisor routing complexity.
- Reviews or site copy indicating response-time/follow-up issues.
- High-trust business where follow-up delay has obvious revenue impact.

## Good Outbound Angles

- CRM cleanup before more automation.
- Website leads need CRM routing.
- AI chatbot conversations need CRM follow-up.
- Salesforce admin support before reports and flows pile up.
- HubSpot workflows break when lifecycle, owner, source, and enrollment logic are unclear.
- Real estate buyer/seller leads need ownership and long-cycle nurture.
- Immigration consultation inquiries need intake routing and follow-up tasks.

## Content/SEO Flow

Live SEO assets as of 2026-06-29:

- `/case-studies`
- `/case-studies/ai-revenue-operations-engine`
- `/case-studies/hubspot-crm-cleanup-safe-implementation`
- `/case-studies/website-leads-to-crm-follow-up-system`
- `/case-studies/salesforce-cleanup-before-automation`
- `/case-studies/immigration-consultation-intake-automation`
- `/case-studies/real-estate-lead-routing-long-cycle-nurture`
- `/blog/ai-chatbot-lead-qualification-crm`

Next SEO priorities:

- Add property management/rental inquiry routing case study.
- Add HubSpot workflow repair case study.
- Add local/service pages only where they support a real outbound or search angle.
- Build safe backlinks through local citations, HubSpot profile, business directories, and relevant resource submissions.

## Social Flow

Use the social promo packs in:

- `content/social/`

Priority promotion sequence:

1. Case Studies hub.
2. AI chatbot lead qualification article.
3. Real estate routing case study.
4. Immigration intake case study.
5. Salesforce cleanup case study.
6. HubSpot cleanup case study.

## Daily Operating Rhythm

Morning:

- Check replies.
- Approve/send only the best drafts.
- Run BDR only if sender is verified.

Midday:

- Research 10-20 prospects deeply.
- Add one specific pain signal per row.
- Approve only qualified rows.

Afternoon:

- Publish or schedule one LinkedIn profile/company post.
- Create one internal link or SEO improvement.
- Submit one legitimate backlink/citation opportunity.

Evening:

- Review pipeline, replies, drafts, and next-day queue.
- Keep quantity behind quality.
