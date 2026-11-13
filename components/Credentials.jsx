// Text-only certifications block (2026-10-06 credentials brief).
// Source of truth: "00 OPERATING RULES — ADDENDUM 2026-10-06 (Salesforce + HubSpot
// certifications — verified list from Himani)". Do not add logos, badges, partner
// wording or any certification that is not on that list.

export const CERTIFICATIONS = [
  { name: 'Salesforce Certified Administrator', issuer: 'Salesforce' },
  { name: 'Salesforce Certified Sales Cloud Consultant', issuer: 'Salesforce' },
  { name: 'Salesforce Certified Service Cloud Consultant', issuer: 'Salesforce' },
  { name: 'Salesforce Certified Marketing Cloud Administrator', issuer: 'Salesforce' },
  { name: 'Salesforce Certified Pardot (Marketing Cloud Account Engagement) Consultant', issuer: 'Salesforce' },
  { name: 'Salesforce Certified Pardot (Marketing Cloud Account Engagement) Specialist', issuer: 'Salesforce' },
  { name: 'HubSpot Academy: Marketing Hub Implementation', issuer: 'HubSpot Academy' },
  { name: 'HubSpot Academy: HubSpot Marketing Software', issuer: 'HubSpot Academy' },
  { name: 'HubSpot Academy: Social Media Marketing', issuer: 'HubSpot Academy' },
];

export default function Credentials({ className = 'py-16 bg-white' }) {
  return (
    <section className={className} aria-labelledby="certifications">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 id="certifications" className="text-3xl font-bold text-gray-900 mb-4">Certifications</h2>
        <p className="text-gray-700 mb-6">
          Our team holds six Salesforce certifications and three HubSpot Academy certifications.
        </p>
        <ul className="grid gap-2 sm:grid-cols-2 mb-6">
          {CERTIFICATIONS.map((cert) => (
            <li key={cert.name} className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-800">
              {cert.name}
            </li>
          ))}
        </ul>
        <p className="text-xs text-gray-500">
          Certifications are held by Emergent Logic&apos;s consultants. HubSpot Academy certifications are individual course certifications; Emergent Logic is listed in HubSpot&apos;s Solutions directory.
        </p>
      </div>
    </section>
  );
}
