import TrackedCTA from '@/components/TrackedCTA';

const PHOTO = '/images/team/naman-kharbanda.webp';
const PHOTO_ALT = 'Naman Kharbanda, Consultant at Emergent Logic';

export default function WhoYouWorkWith({ compact = false }) {
  if (compact) {
    return (
      <section className="py-8 bg-white border-t border-gray-100" aria-label="Who you'll work with">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            <img src={PHOTO} alt={PHOTO_ALT} width={400} height={400} loading="lazy" className="h-16 w-16 rounded-full object-cover shrink-0" />
            <div>
              <p className="font-semibold text-gray-900">Naman Kharbanda</p>
              <p className="text-sm text-gray-600">Consultant, Emergent Logic</p>
              <p className="text-sm text-gray-600">Your point of contact. Human-led, AI-assisted.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white" aria-labelledby="who-you-work-with">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 id="who-you-work-with" className="text-3xl font-bold text-gray-900 mb-8">Who you&apos;ll work with</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <img src={PHOTO} alt={PHOTO_ALT} width={400} height={400} loading="lazy" className="h-48 w-48 rounded-2xl object-cover shrink-0" />
            <div>
              <p className="text-xl font-semibold text-gray-900">Naman Kharbanda</p>
              <p className="text-violet-700 font-medium mb-3">Consultant, Emergent Logic</p>
              <p className="text-gray-600 mb-4">
                Naman is the public point of contact for Emergent Logic clients, based in New Westminster, Greater Vancouver. He works with you on scoping, CRM setup, follow-up automation, reporting and training, and he is the person you talk to on the call and in the portal.
              </p>
              <div className="rounded-xl bg-gray-50 border border-gray-200 p-4 mb-5">
                <p className="font-semibold text-gray-900 mb-1">How we work: human-led, AI-assisted</p>
                <p className="text-sm text-gray-600">
                  Projects are scoped, built and checked by people. AI is used for drafting, documentation and QA. A person reviews the work before anything reaches a client&apos;s CRM.
                </p>
              </div>
              <TrackedCTA ctaName="Who you'll work with — Naman" destination="calendly">
                <a
                  href="https://calendly.com/emergent-logic/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-violet-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-700"
                >
                  Book a 30-minute call
                </a>
              </TrackedCTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
