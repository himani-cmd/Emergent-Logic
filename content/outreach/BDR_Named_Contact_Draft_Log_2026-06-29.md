# BDR Named-Contact Draft Log

Prepared: 2026-06-29  
Owner: Bhavuk Sood  
Sender mailbox: bhavuk.sood@emergent-logic.ca  
Status: Named-contact prospects imported and Gmail drafts created

## What Changed

This batch moved away from broad generic inbox outreach and prioritized named decision-makers or operators first.

Draft style was also tightened:

- Shorter cold emails.
- No long case-study URL in the body.
- One visible pain signal per note.
- Softer CTA.
- Public company inbox used only when a personal email was not published.

## Guardrails Applied

- No BigBang360 contacts or `@bigbang360.com` domains.
- Excluded Doug Cheetham / MC Renovation and Painting / `mc@paintandreno.com`.
- No guessed personal emails.
- No live-send automation was enabled.

## n8n Executions

- `433` — import failed because three research-only contacts had blank email fields. The sheet upsert requires email as the match key.
- `434` — import succeeded after removing blank-email rows from the import queue.
- `435` — BDR draft pass 1 succeeded, 5 Gmail drafts created.
- `436` — BDR draft pass 2 succeeded, 5 Gmail drafts created.

## Drafts Created

These 10 prospects were imported as `approved_for_outreach = Yes`, `automation_status = ready_to_send`, and converted into Gmail drafts from Bhavuk's mailbox.

| Company | Named contact | Email used | Segment | Offer angle |
| --- | --- | --- | --- | --- |
| Freedom Property Management & Sales | Ella Bonza, Director of Operations | ella@freedompm.com | Property Management | Maintenance, leasing, and owner inquiry routing |
| Monarch Property Management & Realty | Marcella Quezada, CEO / Broker | team@lasvegasyourhome.com | Property Management | Owner, tenant, vendor portal and repair request follow-up |
| Tiner Properties | John Tiner, Owner / Principal | info@tiner.com | Property Management | Owner lead, tenant workflow, and maintenance SLA cleanup |
| Revolution Rental Management | Todd J. Ortscheid, Broker & CEO | info@therevolutionfirm.com | Property Management | Rental-analysis lead routing and owner nurture automation |
| Indiana Property Management Group | Meredith Treco, Operations Manager | info@indianapmg.com | Property Management | Leasing, maintenance, and owner inquiry workflow cleanup |
| Property Management Toronto | Dana Ubakar, Managing Partner | info@propertymanagementto.com | Property Management | Landlord leads, tenant repairs, and rental application follow-up |
| Ziprent | Arvand Sabetian, Founder / CEO | start@ziprent.com | Property Management Tech | Owner dashboard, free rental analysis, and tenant maintenance routing |
| Nest DC | Lisa Wise, Owner / Founder / Strategist | sales@nest-dc.com | Property Management | Owner, leasing, sales, and maintenance intake paths |
| Akrami & Associates | Shabnam Akrami, Founder & Managing Partner | info@thevisa.ca | Immigration | Visa/matter-type intake routing and follow-up automation |
| Sobirovs Law Firm | Rakhmad Sobirov, Managing Lawyer | wecare@sobirovs.com | Immigration | Assessment-to-consultation conversion and matter qualification |

## Held Back

These prospects had named decision-makers but no public email. They should be handled later through LinkedIn, a contact form, or a manually confirmed email source.

| Company | Named contact | Reason held back |
| --- | --- | --- |
| My Visa Source | Sonia Mann, CEO & Co-founder | No public email found |
| Kuck Baxter Immigration | Charles H. Kuck, Founding & Managing Partner | No public email found |
| Serotte Law | Michael Serotte, Founding Partner | No public email found |

## Notes

- The draft agent remains capped at 5 rows per run.
- `Send Gmail Message` remains disabled in the BDR workflow.
- This batch should be reviewed visually in Gmail because it introduced the new compact draft style.
