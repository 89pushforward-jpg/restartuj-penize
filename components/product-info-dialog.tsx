import { cn } from '@/lib/utils';

type ProductSample = { src: string; alt: string; topic: string };
type CoverGroup = { label?: string; covers: { src: string; alt: string }[] };

type ProductInfoDialogProps = {
  instanceId: string;
  title: string;
  eyebrow: string;
  description: string;
  bestFor: string;
  outcome: string;
  includes: string[];
  price: string;
  formatLine: string;
  coverGroups: CoverGroup[];
  samples?: ProductSample[];
  triggerLabel?: string;
  triggerClassName?: string;
};

function CheckIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-1 size-4 shrink-0 fill-none stroke-[#087a46] stroke-[2.5]"><path d="m5 12 4 4L19 6" /></svg>;
}

function slugify(value: string) {
  return value.toLocaleLowerCase('cs').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-');
}

export function ProductInfoDialog({ instanceId, title, eyebrow, description, bestFor, outcome, includes, price, formatLine, coverGroups, samples = [], triggerLabel = 'Více informací', triggerClassName }: ProductInfoDialogProps) {
  const dialogId = `product-${slugify(title)}-${slugify(instanceId)}`;
  const coverCount = coverGroups.reduce((count, group) => count + group.covers.length, 0);
  const hasSingleCover = coverCount === 1;

  return (
    <>
      <button type="button" popoverTarget={dialogId} popoverTargetAction="show" className={cn('product-info-trigger', triggerClassName)}><span aria-hidden="true">↗</span>{triggerLabel}</button>
      <dialog id={dialogId} popover="auto" className="product-info-popover" aria-labelledby={`${dialogId}-title`}>
        <button type="button" popoverTarget={dialogId} popoverTargetAction="hide" className="product-info-close" aria-label="Zavřít detail produktu">×</button>
        <div className="product-info-layout">
          <aside className={cn('product-info-visual', hasSingleCover && 'product-info-visual-single')}>
            <p>{formatLine}</p>
            <div className="product-info-cover-groups">
              {coverGroups.map((group, groupIndex) => <div key={`${group.label ?? 'Obálky'}-${groupIndex}`}>{group.label && <strong>{group.label}</strong>}<div>{group.covers.map((cover) => hasSingleCover ? <a key={cover.src} href={cover.src} target="_blank" rel="noreferrer" className="product-info-cover-link" aria-label={`${cover.alt} — otevřít samostatně`}><img src={cover.src} width="1200" height="1818" alt={cover.alt} /><span>Otevřít obálku samostatně ↗</span></a> : <img key={cover.src} src={cover.src} width="1200" height="1818" alt={cover.alt} />)}</div></div>)}
            </div>
            <div className="product-info-price"><span>Cena</span><strong>{price}</strong><small>Jednorázová platba • digitální doručení</small></div>
          </aside>

          <div className="product-info-copy">
            <p className="book-kicker">{eyebrow}</p>
            <h2 id={`${dialogId}-title`}>{title}</h2>
            <p className="product-info-description">{description}</p>
            <div className="product-info-outcomes">
              <article><span>Hodí se pro vás, když</span><p>{bestFor}</p></article>
              <article><span>Co vám má přinést</span><p>{outcome}</p></article>
            </div>
            <div className="product-info-includes"><h3>Co v produktu řešíte</h3><ul>{includes.map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul></div>
            {samples.length > 0 && <div className="product-info-samples"><div><p className="book-kicker">Nahlédněte dovnitř</p><h3>Skutečné stránky z různých částí knihy</h3></div><div>{samples.map((sample) => <a key={sample.src} href={sample.src} target="_blank" rel="noreferrer"><img src={sample.src} width="1400" height="2121" alt={sample.alt} loading="lazy" /><span>{sample.topic}<small>Otevřít v plné kvalitě ↗</small></span></a>)}</div></div>}
            <div className="product-info-footer"><p>Vzdělávací obsah pro vlastní rozhodování — ne osobní investiční doporučení.</p><button type="button" popoverTarget={dialogId} popoverTargetAction="hide">Zavřít a vybrat variantu</button></div>
          </div>
        </div>
      </dialog>
    </>
  );
}
