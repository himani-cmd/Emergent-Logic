# BDR Prospecting Log — Batch 3

Prepared: 2026-06-29  
Owner: Bhavuk Sood  
Sender mailbox: bhavuk.sood@emergent-logic.ca  
Status: Prospects imported, draft-only outreach created

## Guardrails Applied

- No BigBang360 contacts or `@bigbang360.com` domains.
- Excluded Doug Cheetham / MC Renovation and Painting / `mc@paintandreno.com`.
- No live-send automation was enabled.
- Gmail drafts were created only from approved rows.

## n8n Executions

- Previous BDR activation check: `427` — success, 5 Gmail drafts created.
- Manual prospect import: `429` — success, 24 prospects upserted to Prospect Intake.
- BDR draft pass 1: `430` — success, 5 Gmail drafts created.
- BDR draft pass 2: `431` — success, 5 Gmail drafts created.

## Drafts Created In This Batch

These 10 prospects were marked `approved_for_outreach = Yes`, `automation_status = ready_to_send`, `send_mode = draft`, then converted into Gmail drafts from Bhavuk's mailbox.

| Company | Email | Segment | Offer angle |
| --- | --- | --- | --- |
| Canada Homes For Rent | info@canadahomesforrent.ca | Property Management | Owner/tenant portal inquiry routing and maintenance follow-up |
| Oakmont Property Management | info@oakmontpropertymanagement.ca | Property Management | Tenant maintenance and owner financial portal workflow cleanup |
| Olympus Property Management | info@olympuspropertiesgroup.ca | Property Management | Free rental assessment and maintenance coordination follow-up |
| Candid Realty & Management | admin@candidrealty.ca | Property Management | Owner/renter/vendor contact routing and CRM pipeline hygiene |
| Swift Rent / Swift Realty | admin@swiftrent.ca | Property Management | Tenant/owner login and online maintenance request routing |
| Fuse Property Management | contact@fusepm.ca | Property Management | AppFolio owner/tenant portal and rental analysis handoff |
| Cobalt Property Management | doc@cobalt.management | Property Management | Owner/tenant/vendor form routing and CRM status visibility |
| VisaPlace | info@visaplace.com | Immigration | Consultation intake routing, CRM cleanup, and follow-up automation |
| Ackah Business Immigration Law | contact@ackahlaw.com | Immigration | Cross-office consultation pipeline and CRM handoff cleanup |
| Herzing College | tor-info@herzing.ca | Education | Admissions lead routing across campus, program, and advisor workflows |

## Research-Ready Prospects Imported

These 14 prospects were imported as `approved_for_outreach = No` and `automation_status = needs_research` for later review, enrichment, or personalization.

| Company | Email | Segment | Pain signal |
| --- | --- | --- | --- |
| Greenleaf Property Management | info@greenleafpm.ca | Property Management | Owner/tenant portals, quote forms, 200+ owners positioning |
| West End Management & Leasing | info@westendmgt.com | Property Management | AppFolio owner/resident portals and stakeholder forms |
| Marchant Property Management | support@marchantpm.com | Property Management | Tenant portal, owner login, rental analysis CTA |
| TCS Property Management Arizona | infoaz@tcsmgt.com | Property Management | Tenant/landlord portals and rental applications |
| KPM Core Services | support@kpmcoreservices.com | Property Management / HOA | Owner login, tenant login, maintenance request paths |
| Advantage Property Management | info@adpminc.com | Property Management / HOA | Homeowner portal, tenant portal, multi-state office footprint |
| Hermitage Property Management | info@hermitagepm.com | Property Management | Tenant portal, owner portal, Property Meld maintenance |
| Matkowsky Immigration Law | info@matkowsky.ca | Immigration | Consultation booking and complex case categories |
| Green & Spiegel | info@gands.com | Immigration | Canada/US offices and consultation routing |
| Bellissimo Immigration Law Group | info@bellissimolawgroup.com | Immigration | Request consultation and newsletter capture |
| triOS College | info@trios.com | Education | Request-info flow, SMS consent, many campuses |
| Academy of Learning Career College | admissions@academyoflearning.com | Education | Large campus network and admissions inquiries |
| Oakwyn Realty | info@oakwyn.com | Real Estate | Multiple offices, agents, and branch emails |
| CENTURY 21 Redwood Realty | customercare@c21redwood.com | Real Estate | Multi-office contact flow and call/email/text consent |

## Notes

- The BDR workflow remains draft-only: the live send node is disabled.
- HubSpot owner is Bhavuk Sood for the newly drafted contacts.
- This batch intentionally blended property management, immigration, and education signals so outreach is not locked to one vertical while still staying pain-led.
