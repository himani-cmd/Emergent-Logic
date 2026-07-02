# BDR Agent Run Log

Prepared: 2026-07-01  
Owner: BDR Agent  
Sender for future drafts: `bhavuk.sood@emergent-logic.ca`

## Summary

The BDR automation is active, but the useful lesson from today's run is quality over volume.

Discovery is finding real account-level CRM buying signals. Contact enrichment was producing too many weak LinkedIn matches, so the enrichment gate was tightened twice and republished.

## Workflow Status

| Workflow | ID | Status | Latest useful execution | Result |
|---|---|---:|---:|---|
| BDR Agent v2 - Prospect Discovery | `Gwy2jIFCjroy5xCR` | Active | `470` | Success |
| BDR Agent v2 - Contact Enrichment | `WAYqMRuWsfF7mqyi` | Active | `473` | Success |

## Discovery Output

Execution `470` successfully saved account-level signals into `bdr_prospect_queue_v2`.

The best signals are companies actively hiring for CRM, RevOps, HubSpot, Salesforce, Marketing Ops, Sales Ops, or GTM systems work.

Examples surfaced:

- MongoDB: Salesforce / GTM tech hiring signal.
- Upgrade: Salesforce + reporting / attribution hiring signal.
- Toast: Salesforce / revenue operations hiring signal.
- Dutchie: HubSpot + Salesforce revenue operations hiring signal.
- Vim: HubSpot + Salesforce revenue operations hiring signal.
- FloQast: HubSpot + Salesforce reporting / attribution hiring signal.
- CaptivateIQ: HubSpot + Salesforce hiring signal.
- Loop Returns: Salesforce / Head of Revenue Operations hiring signal.
- Hyperbound: HubSpot / CRO hiring signal.
- Mudflap: HubSpot + Salesforce + reporting / attribution hiring signal.

These are not send-ready contacts yet. They are account-level signals that need a named buyer and verified public work email before Gmail drafts.

## Contact Enrichment Fix

Before the fix, execution `471` saved too many weak route matches. Some were technically related to a company, but not strong enough buyers.

The workflow was then tightened to require:

- LinkedIn `/in/` person profile.
- Clear company match.
- Clear buyer-role match.
- Role must be RevOps, GTM, CRM, HubSpot, Salesforce, Sales Ops, Marketing Ops, Founder, CEO, COO, CRO, Head of Revenue, Head of Sales, VP Sales, or VP Revenue.
- No consultants, agencies, recruiters, students, generic job profiles, current-employer contacts, or blocked domains.

The final verification run `473` saved only one high-confidence route:

| Company | Contact | Role | Route | Status |
|---|---|---|---|---|
| CaptivateIQ | Johnathan Warren | 3x Head of Revenue Operations | `https://www.linkedin.com/in/johnathanwarren` | Needs work email verification |

That lower volume is intentional. It means the gate is now rejecting weak matches.

## Important QA Note

Rows created before execution `473` should be treated as `Needs QA`, not send-ready.

Do not create Gmail drafts from older contact-route rows unless the person is manually confirmed as:

- current/relevant to the target company,
- a real RevOps/CRM/GTM buyer,
- reachable through a verified public work email,
- not a generic inbox,
- not blocked.

## Next BDR Actions

1. Verify Johnathan Warren's public work contact route before drafting.
2. Let the 06:30 discovery workflow run tomorrow.
3. Let the 07:10 contact-enrichment workflow run tomorrow.
4. Review only rows created after active version `a9c3b2e8-a734-4f32-8add-209bf4a7f805`.
5. Create Gmail drafts only for `PERSON_READY` records with verified public work email.
6. Keep LinkedIn-only routes in research until a safe email path is verified.

## Non-Negotiables

- Never include BigBang360 or `@bigbang360.com`.
- Never include Doug Cheetham, MC Renovation and Painting, or `mc@paintandreno.com`.
- No guessed emails.
- No generic inbox drafts unless explicitly approved.
- No send action without clear approval.
