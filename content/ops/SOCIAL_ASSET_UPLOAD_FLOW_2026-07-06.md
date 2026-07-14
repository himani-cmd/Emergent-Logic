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

## Profile Audit - 2026-07-14

Public checks found the Instagram account at `@emergentlogiccrm`, but its
public metadata showed zero followers, one following, one post, an empty bio,
no website URL, and no exposed profile image. Treat the profile as incomplete
until it is verified while signed in.

Facebook and the Emergent Logic LinkedIn company page were not sufficiently
publicly discoverable to verify their avatar, cover, About text, or link. The
Himani LinkedIn and Meta OAuth sessions must be reconnected before making or
confirming profile changes.

The 2026-07-14 brand reconciliation adds the verified Instagram account and
Himani LinkedIn profile to the website footer and structured data. Facebook
and the LinkedIn company page remain held until their canonical URLs can be
confirmed while signed in.

## Approved Profile Setup

### Instagram

- Username: `@emergentlogiccrm`
- Name: `Emergent Logic | CRM & Automation`
- Category: `Business Consultant`
- Profile image: `content/social/assets/approved/emergent_logic_instagram_profile.png`
- Bio: `CRM cleanup, lead routing and automation for growing teams. HubSpot, Salesforce and practical AI workflows. Surrey, BC.`
- Link: `https://www.emergent-logic.ca/contact?utm_source=instagram&utm_medium=organic_social&utm_campaign=profile`

### Facebook

- Page name: `Emergent Logic`
- Category: `Business Consultant`
- Profile image: `content/social/assets/approved/emergent_logic_facebook_page_profile.png`
- Cover: `content/social/assets/approved/emergent_logic_facebook_cover.png`
- About: `Emergent Logic helps growing teams clean up CRM data, improve lead routing, and build reliable follow-up automation across HubSpot, Salesforce, and connected systems.`
- Website: `https://www.emergent-logic.ca/?utm_source=facebook&utm_medium=organic_social&utm_campaign=profile`

### LinkedIn Company Page

- Name: `Emergent Logic`
- Tagline: `CRM cleanup, lead routing, reporting and practical automation for growing teams.`
- Logo: use `content/brand/assets/emergent_logic_primary_logo_dark_500.png` without cropping or isolating the symbol.
- Website: `https://www.emergent-logic.ca/?utm_source=linkedin&utm_medium=organic_social&utm_campaign=company_profile`
- Location: `Surrey, British Columbia, Canada`

### Himani LinkedIn

- Public identity: Himani Kharbanda only.
- Headline: `Founder, Emergent Logic | CRM Cleanup, Lead Routing & Automation | HubSpot & Salesforce`
- Featured link: `https://www.emergent-logic.ca/research/2026-crm-cleanup-demand-report?utm_source=linkedin&utm_medium=organic_social&utm_campaign=profile_featured`
- Do not create a fictional employee or AI-person LinkedIn profile.

## Verification Checklist

After reconnecting OAuth, verify each profile at desktop and mobile sizes:

- avatar is present, centered, and shows the complete approved primary dark master in a circular crop
- Facebook cover is present and not obscured by the avatar or action buttons
- bio/About copy matches the approved text
- website link opens the intended Emergent Logic page and preserves UTM values
- contact button points to the correct consultation path
- no personal Bhavuk social profile is linked or used for outreach
- comments and direct messages are reviewed before any scheduled post is marked complete
