import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  CircleDollarSign,
  Compass,
  FileCheck2,
  Gauge,
  Mail,
  Route,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  X,
  WalletCards,
} from 'lucide-react';

import { BookOfferDialog } from '@/components/book-offer-dialog';
import { cn } from '@/lib/utils';

const proof = [
  '2 hlavní knihy • 449 stran',
  'Mindset jako samostatný bonus',
  '6 praktických e-booků',
  'Jednorázová platba • digitální PDF',
];

const situations = [
  { icon: FileCheck2, title: 'Před podpisem smlouvy', text: 'Víte, které pojmy, náklady a podmínky si potřebujete nechat vysvětlit.' },
  { icon: SearchCheck, title: 'Při výběru poradce nebo brokera', text: 'Máte konkrétní otázky a kritéria, podle kterých můžete nabídky porovnat.' },
  { icon: WalletCards, title: 'Když peníze mizí bez systému', text: 'Začnete rozpočtem a místy, kde má smysl zkontrolovat pravidelné výdaje.' },
  { icon: Gauge, title: 'Když cítíte tlak nebo FOMO', text: 'Rozpoznáte emoční spouštěče a získáte prostor rozhodnout se vlastním tempem.' },
];

const practicalBooks = [
  { image: '/books/emotions.png', title: 'Faktor nátlaku a emocí při rozhodování', use: 'Když potřebujete rozpoznat tlak, FOMO a manipulativní způsob prodeje.' },
  { image: '/books/broker.png', title: 'Jak si vybrat správného brokera pro investování', use: 'Když porovnáváte regulaci, poplatky, výběry a podmínky platforem.' },
  { image: '/books/budget.png', title: 'Jak vytvořit rodinný rozpočet', use: 'Když chcete dostat příjmy, výdaje, rezervu a cíle do jednoho systému.' },
  { image: '/books/income.png', title: 'Jak zvýšit svůj příjem', use: 'Když chcete pojmenovat svou hodnotu a připravit se na rozhovor o odměně.' },
  { image: '/books/fees.png', title: 'Poplatky, které platíte zbytečně', use: 'Když chcete projít oblasti, kde lze porovnat cenu nebo vyjednat lepší podmínky.' },
  { image: '/books/advisor.png', title: 'Poradci — dobrý vs. špatný', use: 'Když chcete prověřit motivaci, odměňování a odpovědi finančního poradce.' },
];

const financialSamples = [
  { src: '/books/sample-financial-economy.jpg', alt: 'Ukázka strany 45 z knihy Finanční (Re)Start — Ekonomie', topic: 'Ekonomie • strana 45' },
  { src: '/books/sample-financial-margin-profit.jpg', alt: 'Ukázka strany 111 z knihy Finanční (Re)Start — Marže versus zisk', topic: 'Marže vs. zisk • strana 111' },
  { src: '/books/sample-financial-employer-employee.jpg', alt: 'Ukázka strany 186 z knihy Finanční (Re)Start — Zaměstnavatel versus zaměstnanec', topic: 'Práce v ČR • strana 186' },
];

const dictionarySamples = [
  { src: '/books/sample-dictionary-investment-fund.jpg', alt: 'Ukázka strany 55 ze Slovníku investora — Investiční fond', topic: 'Investiční fond • strana 55' },
  { src: '/books/sample-dictionary-great-depression.jpg', alt: 'Ukázka strany 120 ze Slovníku investora — Velká hospodářská krize', topic: 'Hospodářská krize • strana 120' },
  { src: '/books/sample-dictionary-futures.jpg', alt: 'Ukázka strany 190 ze Slovníku investora — Futures', topic: 'Futures • strana 190' },
];

const testimonials = [
  { name: 'Vojta', text: 'Průvodce do světa investování, který od základu všechno vysvětlí. Obrázky, struktura — je to čtivé.' },
  { name: 'Lucka', text: 'Je to víc zaměřené na praxi. Ve škole se člověk učí, ale často neví, jak informace použít.' },
  { name: 'Eva', text: 'Všechno to usazuje a dává lidem jistotu, aby se mohli ve financích opřít sami o sebe.' },
];

const faqs = [
  ['Je balíček vhodný pro úplného začátečníka?', 'Ano. Finanční (Re)Start začíná od základů. Slovník investora používáte jako průběžnou referenci a kratší e-booky otevíráte podle situace, kterou právě řešíte.'],
  ['Mohu koupit jen jeden e-book?', 'Ano. Každá hlavní kniha bude dostupná samostatně za 690 Kč a každý ze šesti praktických e-booků za 249 Kč. Pokud chcete více témat, sada nebo kompletní knihovna vychází výhodněji.'],
  ['Jak se počítá zvýhodnění sad?', 'Pouze z reálných cen jednotlivých titulů. Dvě hlavní knihy stojí samostatně 1 380 Kč a v sadě 1 090 Kč. Šest praktických e-booků stojí samostatně 1 494 Kč a v sadě 890 Kč.'],
  ['Musím přečíst všech devět knih?', 'Ne. Začněte hlavní knihou a potom si vyberte konkrétní průvodce. Smyslem balíčku je mít spolehlivou knihovnu, ke které se můžete vracet.'],
  ['V čem je rozdíl proti informacím zdarma na internetu?', 'Informace jsou uspořádané do jednoho návazného systému. Nemusíte skládat základy z desítek článků a zároveň máte praktické kontrolní otázky pro běžné situace.'],
  ['Je to investiční doporučení?', 'Ne. Materiály vysvětlují pojmy, rizika a kontrolní otázky. Neříkají vám, co máte koupit, a nenahrazují individuální finanční, právní ani daňové poradenství.'],
  ['Jak aktuální jsou informace o brokerech a poplatcích?', 'Principy a kontrolní otázky jsou navržené jako dlouhodobě použitelné. Konkrétní sazby, regulaci a podmínky poskytovatelů je vždy potřeba ověřit v aktuálních oficiálních zdrojích.'],
  ['V jakém formátu knihy dostanu?', 'Jde o digitální e-booky ve formátu PDF pro počítač, tablet i telefon. Nejde o tištěné knihy.'],
  ['Jak proběhne doručení a platba?', 'Po úspěšné platbě vám přijde e-mail s přístupem nebo odkazy ke stažení. V této náhledové verzi ještě platební krok není aktivní.'],
  ['Jde o předplatné?', 'Ne. Cena je jednorázová a nevzniká žádná automaticky obnovovaná platba.'],
];

const primaryCta = 'group inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#18e878] px-6 text-base font-extrabold text-[#03172a] shadow-[0_14px_42px_rgba(24,232,120,.22)] transition hover:bg-[#46f394]';

function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src="/brand/logo-official.png"
      width="1328"
      height="512"
      alt="Restartuj Peníze"
      className={compact ? 'brand-logo-compact' : 'brand-logo-hero'}
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="border-b border-white/10 bg-brand-navy text-white">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" aria-label="Restartuj Peníze — nahoru"><BrandLogo compact /></a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#hlavni-knihy" className="transition hover:text-white">Hlavní knihy</a>
            <a href="#obsah" className="transition hover:text-white">Celý balíček</a>
            <a href="#o-projektu" className="transition hover:text-white">O projektu</a>
          </div>
          <a href="#nabidka" className="rounded-xl border border-brand-green/40 px-3 py-2 text-sm font-bold text-brand-green transition hover:bg-brand-green/10">Získat balíček</a>
        </div>
      </nav>

      <section id="top" className="relative isolate bg-brand-navy text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_25%,rgba(24,232,120,.18),transparent_34%),radial-gradient(circle_at_14%_80%,rgba(255,211,37,.09),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8 lg:py-22">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-green/25 bg-brand-green/8 px-3 py-1.5 text-sm font-semibold text-brand-green">
              <Compass className="size-4" /> Mapa ven z finančního zmatku
            </p>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-extrabold leading-[1.13] tracking-[-.025em] sm:text-5xl lg:text-6xl">Ve financích máte zmatek. Nevíte, komu věřit — a nechcete udělat drahou chybu.</h1>
            <div className="hero-pain-points"><span>Každý radí něco jiného</span><span>Smlouvám nerozumíte</span><span>Rozhodnutí odkládáte</span></div>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300"><strong className="text-white">Tady najdete mapu ven:</strong> srozumitelné základy, slovník pojmů a praktické průvodce pro situaci, kterou právě řešíte.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#nabidka" className={primaryCta}>Získat balíček za 1 490 Kč <ArrowRight data-icon="inline-end" /></a>
              <a href="#hlavni-knihy" className="inline-flex h-13 items-center justify-center rounded-xl border border-white/15 px-5 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/5">Prohlédnout e-booky</a>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-400">9 PDF • jednorázová platba • bez předplatného • bez následného prodejního hovoru</p>
          </div>

          <figure className="hero-visual">
            <img src="/story/hero-financial-map.jpg" width="1450" height="1086" alt="Ilustrace cesty od zmatku ve smlouvách a poplatcích k jasné mapě finančních rozhodnutí" />
            <figcaption><strong>Zmatek</strong><ArrowRight /><strong>souvislosti</strong><ArrowRight /><strong>další krok</strong></figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-brand-navy/8 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {proof.map((item) => <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-green/12 text-[#087a46]"><Check className="size-4" /></span>{item}</div>)}
        </div>
      </section>

      <section className="bg-[#f5f8f6] px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.04fr_.96fr] lg:items-center">
          <div className="story-image-wrap">
            <img src="/story/financial-confusion-web.jpg" width="1586" height="1000" alt="Ilustrace člověka, který se snaží zorientovat v množství finančních informací" />
            <div className="story-image-note"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-yellow text-brand-navy"><X className="size-4" /></span><p><strong>Nejste špatní na finance.</strong><br />Jen se snažíte rozhodovat bez přehledné mapy.</p></div>
          </div>
          <div>
            <p className="eyebrow">Problém není nedostatek informací</p>
            <h2 className="section-title">Problém je, že všechno přichází najednou — a málokdo vysvětlí, co s čím souvisí.</h2>
            <p className="section-lead">Jedna rada říká šetřit, druhá investovat. Smlouva je plná pojmů. Každý nabízí jiné řešení a vy nevíte, podle čeho ho posoudit.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                'Nevíte, kde začít a co má přednost.',
                'Pojmy znáte, ale nedávají vám celek.',
                'Bojíte se přehlédnout důležitou podmínku.',
                'Rozhodnutí odkládáte, protože si nejste jistí.',
              ].map((item) => <div key={item} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold leading-6 text-slate-700"><span className="mt-2 size-2 shrink-0 rounded-full bg-brand-yellow" />{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Jasné vymezení</p>
            <h2 className="section-title">Ne další hlas, který vám říká, co koupit. Mapa, podle které si uděláte jasno sami.</h2>
          </div>
          <div className="mt-11 grid gap-6 lg:grid-cols-2">
            <article className="definition-card definition-card-no">
              <div className="definition-icon"><X className="size-5" /></div>
              <p className="book-kicker text-rose-700">Co Restartuj Peníze není</p>
              <h3>Rychlá zkratka k bohatství ani prodej konkrétního produktu.</h3>
              <ul>
                {['žádné signály, co právě koupit nebo prodat', 'žádné sliby jistých výnosů a rychlého zbohatnutí', 'žádný tlak, umělý časovač ani následný prodejní hovor'].map((item) => <li key={item}><X />{item}</li>)}
              </ul>
            </article>
            <article className="definition-card definition-card-yes">
              <div className="definition-icon"><Route className="size-5" /></div>
              <p className="book-kicker">Co Restartuj Peníze je</p>
              <h3>Uspořádaná knihovna, která mění chaos v další konkrétní krok.</h3>
              <ul>
                {['srozumitelná mapa finančních základů a souvislostí', 'referenční slovník pro pojmy, které potkáváte v praxi', 'kontrolní otázky pro smlouvy, poradce, brokery i rozpočet'].map((item) => <li key={item}><Check />{item}</li>)}
              </ul>
            </article>
          </div>
          <div className="map-panel">
            <img src="/story/map-out-web.jpg" width="1586" height="1000" alt="Ilustrace přehledné cesty z finančního zmatku k uspořádanému systému" />
            <div className="map-panel-copy"><div className="flex items-center gap-3"><img src="/brand/mark-official.png" width="960" height="960" alt="" className="size-14 object-contain" /><span className="inline-flex rounded-full bg-brand-green/12 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[.12em] text-brand-green">Mapa ven</span></div><h3>Nejdřív pochopit celek. Potom řešit konkrétní situaci.</h3><p>Finanční (Re)Start vytvoří základ. Slovník investora pomůže s pojmy. Šest praktických průvodců otevřete právě tehdy, když řešíte konkrétní rozhodnutí.</p><div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-slate-200"><span>1. Zorientovat se</span><ArrowRight /><span>2. Pojmenovat otázku</span><ArrowRight /><span>3. Rozhodnout se bez tlaku</span></div></div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f8f6] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-9 lg:grid-cols-[.84fr_1.16fr] lg:items-center">
            <div><p className="eyebrow">Pro chvíle, kdy nestačí jen tušit</p><h2 className="section-title">Udělejte si jasno dřív, než podepíšete smlouvu nebo pošlete peníze.</h2><p className="section-lead">Balíček neslibuje zázračné výnosy. Dává vám jazyk, souvislosti a kontrolní otázky, se kterými se můžete rozhodovat informovaněji.</p></div>
            <figure className="section-illustration"><img src="/story/decision-crossroads.jpg" width="1586" height="1000" alt="Ilustrace rozcestí běžných finančních rozhodnutí" /><figcaption>Každé rozhodnutí je snazší, když víte, podle čeho ho posoudit.</figcaption></figure>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {situations.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(3,23,42,.04)]"><span className="grid size-11 place-items-center rounded-xl bg-brand-navy text-brand-green"><Icon className="size-5" /></span><h3 className="mt-5 font-bold text-brand-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="hlavni-knihy" className="bg-white px-5 py-22 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Jádro celé knihovny</p><h2 className="section-title">Dvě hlavní knihy vám dají základ, ke kterému se budete vracet.</h2></div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="flagship-card">
              <img src="/books/financial-restart-hq.jpg" width="1200" height="1818" alt="Obálka knihy Finanční (Re)Start" className="flagship-cover" />
              <div><span className="book-kicker">1. díl • 225 stran</span><h3>Finanční (Re)Start</h3><p>Základní mapa osobních financí od první výplaty po rozpočet, dluhy, rezervu, ekonomické souvislosti a budování majetku.</p><ul><li><Check /> srovnáte si základní pojmy a souvislosti</li><li><Check /> propojíte rozpočet, práci, dluhy a investování</li><li><Check /> získáte pevnější základ pro další rozhodování</li></ul><BookOfferDialog title="Finanční (Re)Start" subtitle="Hlavní kniha • první díl" cover="/books/financial-restart-hq.jpg" pages="225 stran" description="Uspořádaný začátek pro člověka, který nechce skládat vlastní finance z náhodných rad. Kniha propojuje každodenní rozhodnutí s principy, které dávají smysl i bez ekonomického vzdělání." reasons={['Uvidíte finance jako celek, ne jako izolované produkty.', 'Snáz určíte, které téma potřebujete řešit jako první.', 'Získáte společný jazyk pro rozhovor s bankou nebo poradcem.']} contents={['příjmy, výdaje, rozpočet a finanční rezerva', 'dluhy, úroky, inflace a ekonomické souvislosti', 'základy investování, riziko a budování majetku']} sampleLabel="Tři ostré ukázky z různých částí knihy — každou můžete otevřít v plné kvalitě." samples={financialSamples} individualPrice="690 Kč" /></div>
            </article>
            <article className="flagship-card">
              <img src="/books/investor-dictionary-hq.jpg" width="1200" height="1818" alt="Obálka knihy Slovník investora" className="flagship-cover" />
              <div><span className="book-kicker">2. díl • 224 stran</span><h3>Slovník investora</h3><p>Srozumitelná referenční příručka investičních pojmů, nástrojů a principů, ke které se můžete průběžně vracet.</p><ul><li><Check /> lépe se zorientujete v článcích a nabídkách</li><li><Check /> dohledáte si neznámý pojem v souvislostech</li><li><Check /> snáze poznáte, na co se potřebujete zeptat</li></ul><BookOfferDialog title="Slovník investora" subtitle="Hlavní kniha • druhý díl" cover="/books/investor-dictionary-hq.jpg" pages="224 stran" description="Referenční příručka pro chvíle, kdy na vás z článku, smlouvy nebo nabídky vyskočí pojem, kterému nerozumíte. Neučíte se definice nazpaměť — dohledáte si je ve chvíli, kdy je potřebujete." reasons={['Nemusíte předstírat, že rozumíte odbornému jazyku.', 'Rychleji odhalíte, co si potřebujete ověřit nebo nechat vysvětlit.', 'Knihu používáte opakovaně jako praktickou referenci.']} contents={['investiční nástroje, trhy a typy aktiv', 'výnos, riziko, poplatky, diverzifikace a likvidita', 'pojmy, které se objevují u brokerů, fondů a smluv']} sampleLabel="Tři ostré ukázky přímo ze Slovníku investora — od základů po pokročilejší pojmy." samples={dictionarySamples} individualPrice="690 Kč" /></div>
            </article>
          </div>
        </div>
      </section>

      <section id="obsah" className="bg-brand-navy px-5 py-22 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_.72fr] lg:items-end"><div><p className="eyebrow text-brand-green">Šest průvodců pro konkrétní situace</p><h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">Nemusíte hledat jednu odpověď v celé knihovně.</h2></div><p className="text-base leading-7 text-slate-300">Otevřete e-book k tématu, které právě řešíte. Každý titul má svou skutečnou obálku, přesný účel a je součástí kompletního balíčku.</p></div>
          <figure className="section-illustration section-illustration-dark mt-10"><img src="/story/guide-library.jpg" width="1586" height="1000" alt="Ilustrace výběru praktického finančního průvodce podle aktuální situace" /><figcaption>Nečtete všechno najednou. Sáhnete po tématu, které právě potřebujete vyřešit.</figcaption></figure>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practicalBooks.map((book) => <article key={book.title} className="practical-card"><img src={book.image} width="240" height="364" alt={`Obálka e-booku ${book.title}`} /><div><p className="text-xs font-bold uppercase tracking-[.14em] text-brand-green">Praktický e-book</p><h3>{book.title}</h3><p>{book.use}</p><a href="#jednotlive-ebooky">Samostatně 249 Kč <ArrowRight /></a></div></article>)}
          </div>
          <div className="bonus-panel"><img src="/books/mindset.png" width="240" height="364" alt="Obálka bonusu Mindset úspěšného investora" /><div><span>BONUS K OBOU HLAVNÍM KNIHÁM</span><h3>Mindset úspěšného investora</h3><p>Emoce, FOMO, pravidelnost a osobní pravidla pro klidnější rozhodování. Bonus doplňuje znalosti o způsob, jak s nimi pracovat v praxi.</p></div></div>
          <div className="mt-10 text-center"><a href="#nabidka" className={primaryCta}>Získat všech 9 e-booků <ArrowRight data-icon="inline-end" /></a></div>
        </div>
      </section>

      <section className="bg-[#f5f8f6] px-5 py-22 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div>
            <div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Uvnitř skutečných knih</p><h2 className="section-title">Nejen názvy na obálce. Podívejte se na témata z různých částí obou knih.</h2><p className="section-lead">Ukázky jsou nově ve vysokém rozlišení. Kliknutím otevřete celou stranu a můžete si prohlédnout sazbu, obrázky i způsob vysvětlení.</p>
              <div className="mt-8 space-y-4">{[['1', 'Začněte základy', 'Finanční (Re)Start vám dá mapu a pořadí témat.'], ['2', 'Dohledávejte pojmy', 'Slovník investora používejte jako průběžnou referenci.'], ['3', 'Otevřete aktuální situaci', 'Vyberte jeden ze šesti praktických průvodců.']].map(([n, title, text]) => <div key={n} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-navy font-extrabold text-brand-green">{n}</span><div><h3 className="font-bold text-brand-navy">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{text}</p></div></div>)}</div>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {[['Finanční (Re)Start', financialSamples], ['Slovník investora', dictionarySamples]].map(([title, samples]) => <article key={title as string} className="sample-book"><div className="sample-book-heading"><span>Ukázky napříč knihou</span><h3>{title as string}</h3></div><div className="sample-grid">{(samples as typeof financialSamples).map((sample) => <a key={sample.src} href={sample.src} target="_blank" rel="noreferrer"><img src={sample.src} width="1400" height="2121" alt={sample.alt} loading="lazy" /><span>{sample.topic} ↗</span></a>)}</div></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-22 lg:px-8">
        <div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><p className="eyebrow">Zpětná vazba testovacích čtenářů</p><h2 className="section-title">Oceňují strukturu, příklady a čtivost.</h2><p className="section-lead">Konkrétní dojmy lidí, kteří dostali materiály k přečtení — bez anonymních hvězdiček a bez přikrášlování.</p><figure className="section-illustration mt-8"><img src="/story/readers-learning.jpg" width="1586" height="1000" alt="Ilustrace čtenářů, kteří používají finanční příručky v praxi" /><figcaption>Jeden systém, různé situace a vlastní tempo čtení.</figcaption></figure></div><div className="grid gap-4 sm:grid-cols-2">{testimonials.map((quote, index) => <figure key={quote.name} className={cn('rounded-3xl border border-slate-200 bg-[#f8faf8] p-7', index === 2 && 'sm:col-span-2')}><blockquote className="text-lg leading-8 text-brand-navy">„{quote.text}“</blockquote><figcaption className="mt-6 flex items-center gap-3 text-sm font-bold text-slate-700"><span className="grid size-9 place-items-center rounded-full bg-brand-navy text-brand-green">{quote.name.charAt(0)}</span>{quote.name} <span className="font-normal text-slate-400">• testovací čtenář/ka</span></figcaption></figure>)}</div></div></div>
      </section>

      <section id="o-projektu" className="bg-[#f5f8f6] px-5 py-22 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_24px_80px_rgba(3,23,42,.06)] md:grid-cols-[.58fr_1.42fr] md:p-10">
          <figure className="founder-visual"><img src="/story/founder-story.jpg" width="1586" height="1000" alt="Ilustrace proměny zkušenosti se smlouvou v praktické vzdělávací materiály" /><figcaption><Sparkles className="size-5 text-brand-yellow" /><span><small>Autor projektu</small><strong>Lukáš Zahrádka</strong></span></figcaption></figure>
          <div className="self-center"><p className="eyebrow">Proč Restartuj Peníze vzniklo</p><h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-navy">Ne proto, abych vám prodal finanční produkt.</h2><p className="mt-5 leading-7 text-slate-600">Vlastní neznalost důležitých podmínek ve smlouvě mě stála více než 100 000 Kč. Začal jsem si finanční témata skládat od základů a převádět je do podoby, které rozumí i člověk bez ekonomického vzdělání.</p><p className="mt-4 leading-7 text-slate-600">Výsledkem není návod, kam investovat. Je to knihovna, která vám pomůže lépe rozumět informacím, se kterými se při finančních rozhodnutích setkáváte.</p><div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-3 py-2 text-sm font-bold text-[#087a46]"><ShieldCheck className="size-4" /> Projekt neprodává finanční produkty</div></div>
        </div>
      </section>

      <section id="nabidka" className="bg-white px-5 py-22 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Vyberte si podle toho, co právě potřebujete</p><h2 className="section-title">Jedna kniha, tematická sada, nebo celý systém.</h2><p className="section-lead">Každá možnost má jasnou cenu. Kompletní knihovna je nejvýhodnější, ale nemusíte kupovat víc, než právě využijete.</p></div>

          <div className="pricing-grid">
            <article className="pricing-card">
              <div className="pricing-card-top"><span className="pricing-label">Sada 1 • pevné základy</span><h3>Finanční mapa</h3><p>Obě hlavní knihy pro pochopení celku, základních pojmů a investičního jazyka.</p></div>
              <div className="pricing-covers pricing-covers-main"><img src="/books/financial-restart-hq.jpg" width="1200" height="1818" alt="Finanční (Re)Start" /><img src="/books/investor-dictionary-hq.jpg" width="1200" height="1818" alt="Slovník investora" /></div>
              <ul>{['Finanční (Re)Start • 225 stran', 'Slovník investora • 224 stran', '449 stran uspořádaného základu'].map((item) => <li key={item}><Check />{item}</li>)}</ul>
              <div className="pricing-total"><p>Při nákupu zvlášť 1 380 Kč</p><strong>1 090 Kč</strong><span>Ušetříte 290 Kč</span></div>
              <button type="button" disabled>Vybrat Finanční mapu <ArrowRight /></button>
            </article>

            <article className="pricing-card">
              <div className="pricing-card-top"><span className="pricing-label">Sada 2 • konkrétní problémy</span><h3>Finanční první pomoc</h3><p>Šest průvodců pro situace, ve kterých lidé nejčastěji ztrácejí peníze, jistotu nebo čas.</p></div>
              <div className="pricing-covers pricing-covers-practical">{practicalBooks.map((book) => <img key={book.image} src={book.image} width="240" height="364" alt="" />)}</div>
              <ul>{['nátlak a emoce při rozhodování', 'broker, rozpočet, příjem a poplatky', 'jak prověřit finančního poradce'].map((item) => <li key={item}><Check />{item}</li>)}</ul>
              <div className="pricing-total"><p>Při nákupu zvlášť 1 494 Kč</p><strong>890 Kč</strong><span>Ušetříte 604 Kč</span></div>
              <button type="button" disabled>Vybrat praktickou sadu <ArrowRight /></button>
            </article>

            <article className="pricing-card pricing-card-featured">
              <span className="pricing-ribbon">Nejlepší poměr obsahu a ceny</span>
              <div className="pricing-card-top"><span className="pricing-label">Kompletní knihovna</span><h3>Celý systém Restartuj Peníze</h3><p>Obě sady pohromadě a navíc bonus Mindset pro klidnější rozhodování bez FOMO.</p></div>
              <div className="pricing-covers pricing-covers-complete"><img src="/books/financial-restart-hq.jpg" width="1200" height="1818" alt="Finanční (Re)Start" /><img src="/books/investor-dictionary-hq.jpg" width="1200" height="1818" alt="Slovník investora" /><img src="/books/mindset.png" width="240" height="364" alt="Mindset úspěšného investora" /></div>
              <ul>{['2 hlavní knihy a 6 praktických e-booků', 'Mindset úspěšného investora jako bonus', '9 PDF • jednorázová platba'].map((item) => <li key={item}><Check />{item}</li>)}</ul>
              <div className="pricing-total"><p>Obě sady samostatně 1 980 Kč</p><strong>1 490 Kč</strong><span>Ušetříte 490 Kč + získáte bonus</span></div>
              <button type="button" disabled>Vybrat kompletní knihovnu <ArrowRight /></button>
            </article>
          </div>

          <div className="pricing-trust"><ShieldCheck /><div><strong>Žádná falešná původní cena.</strong><p>Porovnání vychází pouze ze skutečného součtu samostatných knih a sad. Digitální doručení, bez předplatného a bez následného prodejního hovoru.</p></div></div>

          <details id="jednotlive-ebooky" className="individual-pricing">
            <summary>Chci koupit pouze jeden e-book <ChevronDown /></summary>
            <div className="individual-pricing-content">
              <div><p className="book-kicker">Hlavní knihy • 690 Kč za titul</p><div className="individual-grid individual-grid-main">{[{ image: '/books/financial-restart-hq.jpg', title: 'Finanční (Re)Start', text: '225 stran • základní mapa osobních financí' }, { image: '/books/investor-dictionary-hq.jpg', title: 'Slovník investora', text: '224 stran • referenční příručka pojmů' }].map((book) => <article key={book.title} className="individual-book"><img src={book.image} width="1200" height="1818" alt={`Obálka ${book.title}`} /><div><h3>{book.title}</h3><p>{book.text}</p><strong>690 Kč</strong><button type="button" disabled>Vybrat e-book</button></div></article>)}</div></div>
              <div><p className="book-kicker">Praktické e-booky • 249 Kč za titul</p><div className="individual-grid">{practicalBooks.map((book) => <article key={book.title} className="individual-book"><img src={book.image} width="240" height="364" alt={`Obálka ${book.title}`} /><div><h3>{book.title}</h3><p>{book.use}</p><strong>249 Kč</strong><button type="button" disabled>Vybrat e-book</button></div></article>)}</div></div>
            </div>
          </details>

          <div className="mt-7 flex items-center justify-center gap-2 text-xs text-slate-500"><CircleDollarSign className="size-4" /> Tlačítka jsou zatím náhledová. Bezpečná platba přes Stripe bude napojena přímo zde.</div>
        </div>
      </section>

      <section id="faq" className="bg-[#f5f8f6] px-5 py-22 lg:px-8"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.62fr_1.38fr]"><div><p className="eyebrow">Časté otázky</p><h2 className="section-title">Vše důležité před rozhodnutím.</h2><p className="section-lead">Přesně víte, co kupujete — a také co tento balíček neslibuje.</p></div><div className="space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-slate-200 bg-white px-5 py-1 open:shadow-[0_10px_30px_rgba(3,23,42,.04)]"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-bold text-brand-navy marker:content-none">{question}<ChevronDown className="size-4 shrink-0 text-slate-400 transition group-open:rotate-180" /></summary><p className="border-t border-slate-100 pb-5 pt-4 text-sm leading-6 text-slate-600">{answer}</p></details>)}</div></div></section>

      <section className="bg-brand-navy px-5 py-20 text-white lg:px-8"><div className="mx-auto max-w-4xl text-center"><BookOpen className="mx-auto size-8 text-brand-green" /><h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">Nemusíte znát odpověď na všechno. Potřebujete vědět, kde ji hledat a na co se zeptat.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Začněte u základů a otevřete konkrétní průvodce ve chvíli, kdy ho potřebujete.</p><a href="#nabidka" className={cn(primaryCta, 'mt-8')}>Prohlédnout kompletní nabídku <ArrowRight data-icon="inline-end" /></a></div></section>

      <footer className="bg-[#02111f] px-5 py-10 text-sm text-slate-400 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row"><div><BrandLogo compact /><p className="mt-3 max-w-md leading-6">Vzdělávací projekt pro srozumitelnější každodenní finanční rozhodování.</p></div><div className="grid gap-3 sm:grid-cols-2 sm:gap-x-10"><a href="mailto:info@restartujpenize.cz" className="inline-flex items-center gap-2 transition hover:text-white"><Mail className="size-4" /> info@restartujpenize.cz</a><span>Obchodní podmínky</span><span>Ochrana osobních údajů</span><span>Vzdělávací disclaimer</span></div></div><div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-xs leading-5 text-slate-500">Obsah nenahrazuje osobní finanční, investiční, právní ani daňové poradenství. Konkrétní podmínky produktů a poskytovatelů vždy ověřte v aktuálních oficiálních zdrojích.</div></footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(3,23,42,.1)] backdrop-blur md:hidden"><div className="mx-auto flex max-w-md items-center gap-3"><div className="min-w-0 flex-1"><p className="truncate text-xs text-slate-500">Kompletní balíček • 9 e-booků</p><p className="font-extrabold text-brand-navy">1 490 Kč</p></div><a href="#nabidka" className="inline-flex h-11 items-center justify-center rounded-xl bg-brand-navy px-4 text-sm font-bold text-white">Zobrazit nabídku</a></div></div>
    </main>
  );
}
