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
   - `EMAIL_READY`: public business email route available and acceptable for a Gmail draft.
   - `ROUTE_NEEDED`: named contact found, but needs LinkedIn/contact-form/manual verification.
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

- 20 sendable drafts.
- At least 12 should be `EMAIL_READY`.
- At least 8 should be named-contact or named-role specific.
- Zero blocked domains.
- Zero guessed emails.
- Every draft must include the company-specific pain signal.

If the BDR agent cannot safely create 20 high-quality drafts, it should stop at the number that passes the gate rather than fill with low-quality prospects.

