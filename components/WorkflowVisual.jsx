// Server-rendered picture and native text alternative; no client bundle required.
export default function WorkflowVisual({ id, desktop, mobile, alt, caption, children }) {
  const base = '/images/workflow-visuals/';
  return (
    <figure id={id} className="mx-auto w-full max-w-[1032px] px-4 py-12">
      <picture>
        <source media="(max-width: 799px)" type="image/avif" srcSet={`${base}${mobile}.avif`} width="720" height="960" />
        <source media="(max-width: 799px)" type="image/webp" srcSet={`${base}${mobile}.webp`} width="720" height="960" />
        <source media="(min-width: 800px)" type="image/avif" srcSet={`${base}${desktop}.avif`} width="1600" height="900" />
        <img src={`${base}${desktop}.webp`} width="1600" height="900" loading="lazy" decoding="async" alt={alt}
          className="mx-auto block h-auto w-full max-w-[720px] aspect-[3/4] min-[800px]:max-w-none min-[800px]:aspect-[16/9]" />
      </picture>
      <figcaption className="mt-5 text-base leading-7 text-[#475467]">
        <p>{caption}</p>
        <details className="mt-4 border-y border-[#DFE3F5] py-4">
          <summary className="cursor-pointer font-semibold text-[#4B37C8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B37C8]">Read the visual as text</summary>
          <div className="mt-4 space-y-3">{children}</div>
        </details>
      </figcaption>
    </figure>
  );
}
