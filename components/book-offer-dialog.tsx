type BookOfferDialogProps = {
  title: string;
  subtitle: string;
  cover: string;
  pages: string;
  description: string;
  reasons: string[];
  contents: string[];
  sampleLabel: string;
};

const samplePages = ['/books/sample-financial-1.png', '/books/sample-financial-2.png', '/books/sample-financial-3.png'];

function CheckIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-1 size-4 shrink-0 fill-none stroke-[#087a46] stroke-[2.5]"><path d="m5 12 4 4L19 6" /></svg>;
}

export function BookOfferDialog({ title, subtitle, cover, pages, description, reasons, contents, sampleLabel }: BookOfferDialogProps) {
  const dialogId = `book-${title.toLocaleLowerCase('cs').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <>
      <button type="button" popoverTarget={dialogId} popoverTargetAction="show" className="book-detail-trigger"><span aria-hidden="true">↗</span> Prohlédnout knihu</button>

      <dialog id={dialogId} popover="auto" className="book-popover" aria-labelledby={`${dialogId}-title`}>
        <button type="button" popoverTarget={dialogId} popoverTargetAction="hide" className="absolute right-3 top-3 z-20 grid size-10 place-items-center rounded-full border border-white/15 bg-brand-navy/90 text-xl leading-none text-white shadow-lg transition hover:bg-[#0b2944]" aria-label="Zavřít detail knihy">×</button>
        <div className="grid lg:grid-cols-[.66fr_1.34fr]">
          <aside className="relative overflow-hidden bg-brand-navy p-7 text-white sm:p-9">
            <div className="absolute -right-20 -top-20 size-64 rounded-full border-[38px] border-brand-green/10" />
            <span className="relative inline-flex rounded-full bg-brand-green/12 px-3 py-1.5 text-xs font-extrabold tracking-[.08em] text-brand-green">{pages} • digitální PDF</span>
            <img src={cover} width="240" height="364" alt={`Obálka knihy ${title}`} className="relative mx-auto mt-7 w-full max-w-[230px] rounded-xl shadow-[0_28px_65px_rgba(0,0,0,.5)]" />
            <div className="relative mt-7 rounded-2xl border border-white/10 bg-white/[.055] p-5">
              <p className="text-xs font-extrabold uppercase tracking-[.14em] text-brand-green">Součást balíčku</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Knihu získáte spolu s druhým hlavním titulem, bonusem Mindset a šesti praktickými průvodci.</p>
            </div>
          </aside>

          <div className="p-6 sm:p-9 lg:p-10">
            <p className="book-kicker">{subtitle}</p>
            <h2 id={`${dialogId}-title`} className="mt-3 text-3xl font-extrabold leading-[1.2] tracking-[-.02em] text-brand-navy sm:text-4xl">{title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">{description}</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-2 font-extrabold text-brand-navy"><span aria-hidden="true">◉</span> Proč ji mít po ruce</div>
                <ul className="mt-4 space-y-3">{reasons.map((reason) => <li key={reason} className="flex gap-2.5 text-sm leading-6 text-slate-600"><CheckIcon />{reason}</li>)}</ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-2 font-extrabold text-brand-navy"><span aria-hidden="true">▤</span> Co uvnitř řešíte</div>
                <ul className="mt-4 space-y-3">{contents.map((item) => <li key={item} className="flex gap-2.5 text-sm leading-6 text-slate-600"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-yellow" />{item}</li>)}</ul>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end"><div><p className="book-kicker">Nahlédněte dovnitř</p><h3 className="mt-1 text-xl font-extrabold leading-7 text-brand-navy">Skutečné ukázky stran</h3></div><p className="max-w-sm text-xs leading-5 text-slate-500">{sampleLabel}</p></div>
              <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl bg-brand-navy p-3 sm:gap-4 sm:p-4">{samplePages.map((sample, index) => <img key={sample} src={sample} width="240" height="340" alt={`Ukázka strany ${index + 1}`} className="w-full rounded-md bg-white shadow-lg" />)}</div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-slate-500">Žádné investiční tipy. Srozumitelný základ pro vlastní rozhodování.</p>
              <a href="#nabidka" className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-navy px-5 text-sm font-extrabold text-white transition hover:bg-[#0b2944]">Zobrazit celý balíček <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
