# Named Outbound Pivot Status

Prepared: 2026-06-30  
Status: Pivot implemented. No new Gmail drafts created.

## What Changed

We stopped treating generic company inboxes as send-ready.

Old mistake:

- `sales@`
- `info@`
- `support@`
- `contact@`
- `hello@`
- `wecare@`

These are now `GENERIC_ONLY`, not qualified send routes.

## Current Working Rule

Only create Gmail drafts when the row is `PERSON_READY`:

- named person
- verified public work email or verified named-person route
- pain signal tied to that person/company

If there is no named email:

- use LinkedIn first
- or contact form only if the message is directed to a named person/team
- do not create Gmail draft

## Assets Created

- `Named_LinkedIn_Outreach_Sprint_2026-06-30.md`
- `Named_LinkedIn_Outreach_Sprint_2026-06-30.csv`

These contain 12 named LinkedIn-first touches.

## Current Numbers

- Named prospect base cleaned: 20
- LinkedIn-first touches prepared: 12
- Generic inboxes reclassified as not send-ready: 3
- Old generic Gmail drafts marked not approved: 6
- New Gmail drafts created after the pivot: 0

## Next Action

Run LinkedIn-first outreach manually in small batches:

1. Send 8-12 connection requests per day.
2. Use the provided short connection notes.
3. When someone accepts, send the follow-up message.
4. If they reply with interest, move them to HubSpot as `Replied` / `Qualified`.

Do not return to bulk generic emailing unless explicitly approved.
