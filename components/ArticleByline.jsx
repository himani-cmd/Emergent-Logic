import Link from 'next/link';

const PHOTO = '/images/team/naman-kharbanda-400.webp';
const PHOTO_ALT = 'Naman Kharbanda, Consultant at Emergent Logic';
const ABOUT_HREF = '/about#who-you-work-with';
const LINKEDIN = 'https://www.linkedin.com/in/naman-kharbanda-33b049325/';

export function ArticleByline({ dark = false }) {
  const text = dark ? 'text-slate-200' : 'text-gray-600';
  const link = dark ? 'text-white underline' : 'text-gray-900 hover:underline font-medium';
  return (
    <div className={`flex items-center gap-3 mb-6 text-sm ${text}`}>
      <img src={PHOTO} alt={PHOTO_ALT} width={40} height={40} loading="lazy" className="h-10 w-10 rounded-full object-cover shrink-0" />
      <p>
        By <Link href={ABOUT_HREF} className={link}>Naman Kharbanda</Link> · Consultant, Emergent Logic ·{' '}
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={dark ? 'text-white underline' : 'text-cyan-700 hover:underline'}>LinkedIn</a>
      </p>
    </div>
  );
}

export function ArticleAuthorBox() {
  return (
    <div className="container mx-auto px-4 pb-12">
    <aside className="max-w-3xl mx-auto rounded-xl border border-gray-200 bg-gray-50 p-5 flex gap-4 items-start" aria-label="About the author">
      <img src={PHOTO} alt={PHOTO_ALT} width={64} height={64} loading="lazy" className="h-16 w-16 rounded-full object-cover shrink-0" />
      <div>
        <p className="font-semibold text-gray-900">Naman Kharbanda</p>
        <p className="text-sm text-violet-700 font-medium mb-2">Consultant, Emergent Logic</p>
        <p className="text-sm text-gray-600 mb-2">
          Naman is the public point of contact for Emergent Logic clients, based in New Westminster, Greater Vancouver.
        </p>
        <p className="text-sm">
          <Link href={ABOUT_HREF} className="text-cyan-700 hover:underline">About Naman</Link>
          {' · '}
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline">LinkedIn</a>
        </p>
      </div>
    </aside>
    </div>
  );
}
