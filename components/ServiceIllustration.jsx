// Server-rendered artwork with a deliberately composed mobile variant.
export default function ServiceIllustration({ id, asset, alt, caption, children }) {
  const base = `/images/workflow-visuals/${asset}`;
  return (
    <figure id={id} className="mx-auto w-full max-w-[1032px] px-4 py-12">
      <picture>
        <source media="(max-width: 799px)" type="image/avif" srcSet={`${base}_mobile.avif`} width="1024" height="1280" />
        <source media="(max-width: 799px)" type="image/webp" srcSet={`${base}_mobile.webp`} width="1024" height="1280" />
        <source media="(min-width: 800px)" type="image/avif" srcSet={`${base}_desktop.avif`} width="1536" height="1024" />
        <img src={`${base}_desktop.webp`} width="1536" height="1024" loading="lazy" decoding="async" alt={alt}
          className="mx-auto block h-auto w-full max-w-[512px] aspect-[4/5] min-[800px]:max-w-none min-[800px]:aspect-[3/2]" />
      </picture>
      <figcaption className="mt-5 text-base leading-7 text-[#475467]">
        <p>{caption}</p>
        <details className="mt-4 border-y border-[#DFE3F5] py-4">
          <summary className="cursor-pointer font-semibold text-[#4B37C8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B37C8]">Read the illustration as text</summary>
          <div className="mt-4 space-y-3">{children}</div>
        </details>
      </figcaption>
    </figure>
  );
}
