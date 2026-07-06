# Social Asset Upload Flow

Purpose: keep Emergent Logic social graphics organized, public, and automation-ready.

## Storage Rules

Source and working graphics live here:

`content/social/assets/`

Final approved publish-ready graphics live here:

`public/social-assets/`

Do not use temp folders or desktop paths for automated posting. n8n and Meta need stable public URLs, not local files.

## Public URL Rule

Any image committed under:

`public/social-assets/example.png`

becomes available after Vercel deploy at:

`https://www.emergent-logic.ca/social-assets/example.png`

Use that public URL in the Social Queue `image_url` column.

## Social Queue Columns

Minimum fields for autoposting:

- `id`
- `publish_date`
- `channel`
- `caption`
- `status`
- `image_url`

Platform-specific fields:

- `linkedin_actor_urn`
- `facebook_page_id`
- `instagram_business_account_id`

## Status Rules

`draft` means do not post.

`approved` means n8n can publish automatically when the publish date is due.

## Current Public Assets

- `/social-assets/salesforce-mfa-founder-2026-07-01.png`
- `/social-assets/salesforce-mfa-company-2026-07-01.png`
- `/social-assets/salesforce-mfa-instagram-2026-07-01.png`
- `/social-assets/lead-routing-handoff-2026-07-04.png`

