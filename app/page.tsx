import {
  ArrowRight,
  Check,
  ChevronDown,
  Compass,
  Mail,
  Route,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';

import { BookOfferDialog } from '@/components/book-offer-dialog';
import { OfferStore } from '@/components/offer-store';
import { ProductInfoDialog } from '@/components/product-info-dialog';
import { cn } from '@/lib/utils';

const proof = [
  'Finanční (Re)Start • 225 stran',
  'Slovník investora • 224 stran',
  '449 stran v logické posloupnosti',
  'Ukázky uvnitř v plné kvalitě',
];

const practicalBooks = [
  { image: '/books/emotions.png', title: 'Faktor nátlaku a emocí při rozhodování', use: 'Získáte jednoduchou brzdu proti tlaku a FOMO, abyste nepodepsali nebo nekoupili něco jen proto, že vás někdo tlačí k rychlému „ano“.', forWhom: 'Vás rozhodnutí znervózní, prodejce spěchá nebo se bojíte, že vám uteče příležitost.', inside: ['jak nátlak mění rozhodování', 'typické spouštěče strachu a FOMO', 'praktická pauza před podpisem nebo nákupem'] },
  { image: '/books/broker.png', title: 'Jak si vybrat správného brokera pro investování', use: 'Srovnáte brokery podle konkrétních kritérií a snáz odhalíte poplatky, omezení nebo varovné signály ještě před odesláním peněz.', forWhom: 'Vybíráte platformu a nechcete rozhodovat jen podle reklamy, aplikace nebo doporučení známého.', inside: ['regulace, zabezpečení a oddělení majetku', 'poplatky, nabídka nástrojů a omezení', 'otázky pro porovnání více brokerů'] },
  { image: '/books/budget.png', title: 'Jak vytvořit rodinný rozpočet', use: 'Uvidíte, kam peníze skutečně mizí, a sestavíte si plán výdajů, rezervy a cílů, který lze dlouhodobě dodržet.', forWhom: 'Na konci měsíce nevíte, kam peníze odešly, nebo se na rozpočtu potřebujete domluvit v domácnosti.', inside: ['přehled příjmů a pravidelných výdajů', 'rezerva, cíle a rozdělení peněz', 'jednoduchý systém pro průběžnou kontrolu'] },
  { image: '/books/income.png', title: 'Jak zvýšit svůj příjem', use: 'Pojmenujete svou hodnotu, připravíte si argumenty pro vyšší odměnu a objevíte konkrétní cesty, kde lze příjem posunout.', forWhom: 'Úspory už nestačí a potřebujete promyslet vyjednávání, změnu práce nebo další zdroj příjmu.', inside: ['příprava argumentů pro vyšší odměnu', 'zhodnocení dovedností a možností trhu', 'varianty aktivního a vedlejšího příjmu'] },
  { image: '/books/fees.png', title: 'Poplatky, které platíte zbytečně', use: 'Najdete pravidelné platby a poplatky, které stojí za kontrolu, a získáte postup pro porovnání nebo vyjednání lepších podmínek.', forWhom: 'Máte více smluv a služeb a chcete zjistit, kde odcházejí malé částky, které se za rok nasčítají.', inside: ['kontrola bankovních a servisních poplatků', 'porovnání tarifů a pravidelných služeb', 'příprava na změnu nebo vyjednání podmínek'] },
  { image: '/books/advisor.png', title: 'Poradci — dobrý vs. špatný', use: 'Dostanete otázky, které pomohou odlišit skutečné vysvětlování od prodejního tlaku dřív, než podepíšete nevýhodnou smlouvu.', forWhom: 'Máte před sebou doporučení nebo smlouvu a nevíte, zda poradce vysvětluje, nebo hlavně prodává.', inside: ['otázky na odměnu, rizika a alternativy', 'varovné signály prodejního tlaku', 'co si nechat vysvětlit před podpisem'] },
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
  ['Mohu koupit jen jeden e-book?', 'Ano. Tituly z Finančního štítu stojí samostatně 99 Kč, praktické e-booky 199 Kč a každá hlavní kniha 590 Kč. Pokud chcete více témat, sada nebo kompletní knihovna vychází výhodněji.'],
  ['Jak se počítá zvýhodnění sad?', 'Pouze z reálných cen jednotlivých titulů. Finanční štít stojí 290 Kč místo 396 Kč, Finanční první pomoc 790 Kč místo 1 194 Kč a Finanční mapa 990 Kč místo 1 180 Kč. Všechny tři sady samostatně stojí 2 070 Kč, kompletní knihovna 1 490 Kč.'],
  ['Musím přečíst všech třináct PDF?', 'Ne. Začněte tím, co právě řešíte: ochranou před podvodem, konkrétním problémem nebo hlavní knihou. Smyslem balíčku je mít spolehlivou knihovnu, ke které se můžete vracet.'],
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
            <a href="#obsah" className="transition hover:text-white">Praktické e-booky</a>
            <a href="#o-projektu" className="transition hover:text-white">O projektu</a>
          </div>
          <a href="#hlavni-knihy" className="rounded-xl border border-brand-green/40 px-3 py-2 text-sm font-bold text-brand-green transition hover:bg-brand-green/10">Hlavní knihy</a>
        </div>
      </nav>

      <section id="top" className="relative isolate bg-brand-navy text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_25%,rgba(24,232,120,.18),transparent_34%),radial-gradient(circle_at_14%_80%,rgba(255,211,37,.09),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8 lg:py-22">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-green/25 bg-brand-green/8 px-3 py-1.5 text-sm font-semibold text-brand-green">
              <Compass className="size-4" /> Když už nevíte, komu ve financích věřit
            </p>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-extrabold leading-[1.18] tracking-[.003em] sm:text-5xl lg:text-6xl">Ve financích nestačí věřit. Potřebujete rozumět tomu, podle čeho se rozhodujete.</h1>
            <div className="hero-pain-points"><span>Každý radí něco jiného</span><span>Není jasné, čí zájem je v pozadí</span><span>Nechcete znovu udělat drahou chybu</span></div>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300">Poradce doporučuje jedno, finanční „guru“ druhé a reklama nabízí jednoduché řešení. <strong className="text-white">Restartuj Peníze vám pomůže uspořádat si souvislosti v klidu, vlastním tempem a bez prodeje finančních produktů.</strong></p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#hlavni-knihy" className={primaryCta}>Prohlédnout dvě hlavní knihy <ArrowRight data-icon="inline-end" /></a>
              <a href="#ukazky" className="inline-flex h-13 items-center justify-center rounded-xl border border-white/15 px-5 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/5">Podívat se dovnitř knih</a>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-400">2 hlavní e-booky • 449 stran • bez investičních doporučení • bez následného prodejního hovoru</p>
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
            <p className="eyebrow">Nedůvěra není chyba</p>
            <h2 className="section-title">Po špatné zkušenosti nehledáte další přesvědčování. Potřebujete způsob, jak si věci ověřit sami.</h2>
            <p className="section-lead">Ne každý finanční poradce pracuje špatně. Když ale neznáte základy, rizika a motivaci druhé strany, těžko rozeznáte poctivé vysvětlení od dobře zabaleného prodeje.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                'Každý zdroj doporučuje něco jiného.',
                'Nevíte, kdo vysvětluje a kdo hlavně prodává.',
                'Po špatné zkušenosti nechcete další ukvapené rozhodnutí.',
                'Informací je dost, ale chybí jejich pořadí.',
              ].map((item) => <div key={item} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold leading-6 text-slate-700"><span className="mt-2 size-2 shrink-0 rounded-full bg-brand-yellow" />{item}</div>)}
            </div>
            <div className="mt-6 rounded-2xl border border-brand-green/20 bg-white p-5 text-left shadow-[0_10px_30px_rgba(3,23,42,.04)]">
              <p className="text-xs font-extrabold uppercase tracking-[.12em] text-[#087a46]">Co ukázaly rozhovory s prvními čtenáři</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">V sedmi kvalitativních rozhovorech se opakovaly nejistota při neporozumění, obava ze ztráty, nedůvěra k části finančních poradců a chybějící praktické souvislosti ze školy.</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">Nejde o reprezentativní statistiku. Tyto odpovědi pomohly určit pořadí témat a způsob, jakým je knihovna vysvětluje.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cesta" className="bg-white px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl text-left">
            <p className="eyebrow">Teď přichází řešení</p>
            <h2 className="section-title">Restartuj Peníze není další zdroj navíc. Je to systém, který dává známým informacím pořadí a souvislosti.</h2>
          </div>
          <div className="mt-10 grid gap-8 rounded-[2rem] border border-brand-green/30 bg-brand-navy p-7 text-left text-white shadow-[0_24px_70px_rgba(3,23,42,.12)] sm:p-10 lg:grid-cols-[1fr_.42fr] lg:items-center">
            <div><p className="text-xs font-extrabold uppercase tracking-[.14em] text-brand-green">Hlavní rozdíl Restartuj Peníze</p>
            <h3 className="mt-4 max-w-5xl text-balance text-2xl font-extrabold leading-[1.35] tracking-[.005em] sm:text-4xl">Informace o financích máte všude a často zdarma. Problém není jejich nedostatek, ale přílišná složitost a chybějící logické uspořádání.</h3>
            <p className="mt-5 max-w-4xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">Témata, o kterých jste už mnohokrát slyšeli, jsou v knihovně seřazená od jednoduchých základů ke složitějším souvislostem. Při průchodu postupně doplňujete mezery z minulosti a začínáte chápat, jak do sebe jednotlivé části finančního světa zapadají.</p></div>
            <div className="flex items-end justify-center gap-3" aria-label="Dvě hlavní knihy Restartuj Peníze"><img src="/books/financial-restart-hq.jpg" width="1200" height="1818" alt="Finanční (Re)Start" className="w-[43%] -rotate-3 rounded-xl shadow-[0_20px_45px_rgba(0,0,0,.35)]" /><img src="/books/investor-dictionary-hq.jpg" width="1200" height="1818" alt="Slovník investora" className="w-[47%] rotate-2 rounded-xl shadow-[0_20px_45px_rgba(0,0,0,.35)]" /></div>
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
              <h3>Dvě navazující knihy, které vedou od jednoduchých základů k náročnějším rozhodnutím.</h3>
              <ul>
                {['Finanční (Re)Start pro logickou posloupnost finančních témat', 'Slovník investora pro pojmy, které potřebujete průběžně doplnit', 'jeden společný základ pro posuzování dalších informací a nabídek'].map((item) => <li key={item}><Check />{item}</li>)}
              </ul>
            </article>
          </div>
          <div className="map-panel">
            <img src="/story/map-out-web.jpg" width="1586" height="1000" alt="Ilustrace přehledné cesty z finančního zmatku k uspořádanému systému" />
            <div className="map-panel-copy"><div className="flex items-center gap-3"><img src="/brand/mark-official.png" width="960" height="960" alt="" className="size-14 object-contain" /><span className="inline-flex rounded-full bg-brand-green/12 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[.12em] text-brand-green">Dvě knihy, jeden systém</span></div><h3>Finanční (Re)Start vytvoří mapu. Slovník investora doplní jazyk.</h3><p>První kniha seřadí témata do návazného celku. Druhá zůstává po ruce pro pojmy, které potkáte při čtení smluv, článků nebo nabídek.</p><div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-slate-200"><span>1. Doplnit základy</span><ArrowRight /><span>2. Spojit souvislosti</span><ArrowRight /><span>3. Rozumět pojmům</span><ArrowRight /><span>4. Rozhodovat se s přehledem</span></div></div>
          </div>
        </div>
      </section>

      <section id="hlavni-knihy" className="bg-white px-5 py-22 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl text-left"><p className="eyebrow">Jádro celé knihovny</p><h2 className="section-title">Dvě hlavní knihy doplní základy a spojí známé pojmy do jednoho srozumitelného systému.</h2></div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="flagship-card">
              <img src="/books/financial-restart-hq.jpg" width="1200" height="1818" alt="Obálka knihy Finanční (Re)Start" className="flagship-cover" />
              <div><span className="book-kicker">1. díl • Jasné pořadí kroků • 225 stran</span><h3>Finanční (Re)Start</h3><p>Když nevíte, co řešit jako první, kniha vám uspořádá rozpočet, rezervu, dluhy a investování do srozumitelného pořadí.</p><ul><li><Check /> určíte, kde vaše finance potřebují největší pozornost</li><li><Check /> přestanete řešit každý produkt odděleně a uvidíte souvislosti</li><li><Check /> vytvoříte si pevnější základ pro další rozhodnutí</li></ul><BookOfferDialog title="Finanční (Re)Start" subtitle="Hlavní kniha • první díl" cover="/books/financial-restart-hq.jpg" pages="225 stran" description="Mapa pro člověka, který má ve financích příliš mnoho otevřených otázek a neví, čím začít. Pomůže vám seřadit rozpočet, rezervu, dluhy a investování do logických kroků, místo abyste skládali plán z náhodných rad." reasons={['Uvidíte, co má ve vaší situaci přednost a co může počkat.', 'Propojíte každodenní peníze s dlouhodobým budováním majetku.', 'Půjdete do rozhovoru s bankou nebo poradcem s lepšími otázkami.']} contents={['příjmy, výdaje, rozpočet a finanční rezerva', 'dluhy, úroky, inflace a ekonomické souvislosti', 'základy investování, riziko a budování majetku']} sampleLabel="Tři ostré ukázky z různých částí knihy — každou můžete otevřít v plné kvalitě." samples={financialSamples} individualPrice="590 Kč" /></div>
            </article>
            <article className="flagship-card">
              <img src="/books/investor-dictionary-hq.jpg" width="1200" height="1818" alt="Obálka knihy Slovník investora" className="flagship-cover" />
              <div><span className="book-kicker">2. díl • Rozumět nabídkám • 224 stran</span><h3>Slovník investora</h3><p>Když vás odborné pojmy staví do nevýhody, rychle si ověříte, co znamenají a na co se potřebujete doptat.</p><ul><li><Check /> přestanete tápat při čtení smluv, článků a investičních nabídek</li><li><Check /> rychleji odhalíte, co vám druhá strana nevysvětlila</li><li><Check /> získáte jistější jazyk pro porovnání možností</li></ul><BookOfferDialog title="Slovník investora" subtitle="Hlavní kniha • druhý díl" cover="/books/investor-dictionary-hq.jpg" pages="224 stran" description="Praktická opora pro chvíle, kdy odborný výraz zakrývá důležité riziko, poplatek nebo podmínku. Pojem si dohledáte v souvislostech a hned víte, co ještě potřebujete ověřit." reasons={['Nebudete muset přikyvovat něčemu, čemu zatím nerozumíte.', 'Snáz poznáte nejasnou formulaci nebo chybějící vysvětlení.', 'Při porovnávání nabídek budete vědět, na co se ptát.']} contents={['investiční nástroje, trhy a typy aktiv', 'výnos, riziko, poplatky, diverzifikace a likvidita', 'pojmy, které se objevují u brokerů, fondů a smluv']} sampleLabel="Tři ostré ukázky přímo ze Slovníku investora — od základů po pokročilejší pojmy." samples={dictionarySamples} individualPrice="590 Kč" /></div>
            </article>
          </div>
        </div>
      </section>

      <section id="ukazky" className="bg-[#f5f8f6] px-5 py-22 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div>
            <div className="max-w-3xl text-left"><p className="eyebrow">Nejdřív se podívejte dovnitř</p><h2 className="section-title">Nejen názvy na obálce. Prohlédněte si témata z různých částí obou hlavních knih.</h2><p className="section-lead">Kliknutím otevřete celou stranu ve vysokém rozlišení a můžete si ověřit sazbu, obrázky i způsob vysvětlení ještě před představením celé knihovny.</p></div>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {[[ 'Finanční (Re)Start', financialSamples], ['Slovník investora', dictionarySamples]].map(([title, samples]) => <article key={title as string} className="sample-book"><div className="sample-book-heading"><span>Ukázky napříč knihou</span><h3>{title as string}</h3></div><div className="sample-grid">{(samples as typeof financialSamples).map((sample) => <a key={sample.src} href={sample.src} target="_blank" rel="noreferrer"><img src={sample.src} width="1400" height="2121" alt={sample.alt} loading="lazy" /><span>{sample.topic} ↗</span></a>)}</div></article>)}
            </div>
          </div>
        </div>
      </section>

      <section id="obsah" className="bg-brand-navy px-5 py-22 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_.72fr] lg:items-end"><div><p className="eyebrow text-brand-green">Teď se základ rozšiřuje v celou knihovnu</p><h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.25] tracking-[.005em] sm:text-4xl">Dvě hlavní knihy vysvětlují celek. Další průvodci pomáhají ve chvíli, kdy řešíte konkrétní situaci.</h2></div><p className="text-base leading-7 text-slate-300">K pevnému základu se přidává šest praktických e-booků, čtyři průvodci proti podvodům a bonus Mindset. Nemusíte je číst postupně — otevřete právě ten, který v danou chvíli potřebujete.</p></div>
          <figure className="section-illustration section-illustration-dark mt-10"><img src="/story/guide-library.jpg" width="1586" height="1000" alt="Ilustrace výběru praktického finančního průvodce podle aktuální situace" /><figcaption>Nečtete všechno najednou. Sáhnete po tématu, které právě potřebujete vyřešit.</figcaption></figure>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practicalBooks.map((book, index) => <article key={book.title} className="practical-card"><img src={book.image} width="240" height="364" alt={`Obálka e-booku ${book.title}`} /><div><p className="text-xs font-bold uppercase tracking-[.14em] text-brand-green">Praktický e-book</p><h3>{book.title}</h3><p>{book.use}</p><ProductInfoDialog instanceId={`prehled-${index + 1}`} title={book.title} eyebrow="Praktický e-book" description={book.use} bestFor={book.forWhom} outcome={book.use} includes={book.inside} price="199 Kč" formatLine="Samostatný digitální e-book • PDF" coverGroups={[{ covers: [{ src: book.image, alt: `Obálka e-booku ${book.title}` }] }]} triggerLabel="Prohlédnout detail" triggerClassName="product-info-trigger-dark" /></div></article>)}
          </div>
          <div className="bonus-panel"><img src="/books/mindset.png" width="240" height="364" alt="Obálka bonusu Mindset úspěšného investora" /><div><span>BONUS K OBOU HLAVNÍM KNIHÁM</span><h3>Mindset úspěšného investora</h3><p>Vytvoříte si osobní pravidla, která pomáhají brzdit impulzivní nákupy, FOMO a chaotické změny plánu ve chvíli, kdy emoce přebírají kontrolu.</p><ProductInfoDialog instanceId="bonus-mindset" title="Mindset úspěšného investora" eyebrow="Bonusový e-book" description="Praktický doplněk k hlavním knihám pro chvíle, kdy správné rozhodnutí nekomplikuje nedostatek informací, ale emoce a tlak okolí." bestFor="Znáte základní principy, ale FOMO, panika nebo časté změny plánu vám komplikují jejich dodržování." outcome="Sepíšete si vlastní rozhodovací pravidla a vytvoříte odstup mezi emocí a konkrétní akcí." includes={['rozpoznání emočních spouštěčů', 'pravidla pro klidnější investiční rozhodování', 'práce s FOMO a impulzivní změnou plánu']} price="Bonus k Finanční mapě" formatLine="Bonusový digitální e-book • PDF" coverGroups={[{ covers: [{ src: '/books/mindset.png', alt: 'Mindset úspěšného investora' }] }]} triggerLabel="Prohlédnout bonus" triggerClassName="product-info-trigger-dark" /></div></div>
        </div>
      </section>

      <section className="bg-white px-5 py-22 lg:px-8">
        <div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><p className="eyebrow">Zpětná vazba prvních čtenářů</p><h2 className="section-title">Oceňují strukturu, příklady a čtivost.</h2><p className="section-lead">Konkrétní dojmy prvních lidí, kteří dostali materiály k přečtení. Nejde o statistické hodnocení ani slib výsledku — každý čtenář začíná v jiné situaci.</p><figure className="section-illustration mt-8"><img src="/story/readers-learning-cz-young.png" width="1536" height="1024" alt="Ilustrace mladých českých čtenářů, kteří používají finanční příručky v praxi" /><figcaption>Jeden systém, různé situace a vlastní tempo čtení.</figcaption></figure></div><div className="grid gap-4 sm:grid-cols-2">{testimonials.map((quote, index) => <figure key={quote.name} className={cn('rounded-3xl border border-slate-200 bg-[#f8faf8] p-7', index === 2 && 'sm:col-span-2')}><blockquote className="text-lg leading-8 text-brand-navy">„{quote.text}“</blockquote><figcaption className="mt-6 flex items-center gap-3 text-sm font-bold text-slate-700"><span className="grid size-9 place-items-center rounded-full bg-brand-navy text-brand-green">{quote.name.charAt(0)}</span>{quote.name}</figcaption></figure>)}</div></div></div>
      </section>

      <section className="bg-brand-navy px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="eyebrow text-brand-green">Ne další hromada informací. Jasné pořadí.</p><h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.25] tracking-[.005em] sm:text-4xl">Porozumění nevzniká množstvím informací. Vzniká tím, že každá nová věc má na co navázat.</h2><p className="mt-5 text-lg leading-8 text-slate-300">Proto knihovna postupuje od běžných situací a základních pojmů ke složitějším souvislostem. To, co jste dříve slyšeli odděleně, postupně dostává jasné místo v celku.</p></div>
          <div className="content-method-grid">
            <article><Route /><span>1</span><h3>Doplnit chybějící základ</h3><p>Každé téma začíná tím, co potřebujete vědět předem — bez předpokladu, že už ovládáte odborný jazyk.</p></article>
            <article><SearchCheck /><span>2</span><h3>Zařadit informaci do celku</h3><p>Pojmy, možnosti a rizika dostanou návazné pořadí, takže vidíte, co s čím souvisí a proč.</p></article>
            <article><ShieldCheck /><span>3</span><h3>Převést pochopení do praxe</h3><p>Na souvislosti navazují otázky a postupy pro smlouvu, nabídku, rozpočet nebo další vlastní rozhodnutí.</p></article>
          </div>
          <div className="mt-8 rounded-3xl border border-white/12 bg-white/6 p-6 sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[.14em] text-brand-yellow">Praktická vrstva, která mnoha lidem ve škole chyběla</p>
            <p className="mt-3 max-w-4xl text-base leading-7 text-slate-200">Škola může vysvětlit pojmy, ale často zbývá otázka, jak spolu v běžném životě souvisejí smlouva, rezerva, úrok, poplatek, riziko a investice. Knihovna tuto praktickou vrstvu doplňuje pro zaměstnance, podnikatele i začínající investory — bez předpokladu ekonomického vzdělání.</p>
          </div>
          <p className="method-note"><ShieldCheck /> Nadčasové principy oddělujeme od údajů, které se mění. Aktuální sazby, regulaci a podmínky poskytovatelů je vždy potřeba ověřit v oficiálních zdrojích.</p>
        </div>
      </section>

      <section id="o-projektu" className="bg-[#f5f8f6] px-5 py-22 lg:px-8">
        <div className="founder-card founder-card-compact mx-auto max-w-6xl">
          <div className="founder-card-compact-layout">
            <img src="/story/lukas-zahradka.webp" width="720" height="720" alt="Lukáš Zahrádka, autor projektu Restartuj Peníze" />
            <div><p className="eyebrow">Proč jsem Restartuj Peníze poskládal</p><h2>Nechyběly mi další zdroje. Chyběl mi celek, ve kterém by do sebe informace konečně zapadly.</h2><p>Jako podnikatel s více než 15 lety praxe a zkušeností s vedením marketingové firmy jsem se musel naučit třídit velké množství informací, rozlišovat podstatné od vedlejšího a hledat mezi tématy návaznosti. Ve financích jsem ale stále narážel na útržky: jednotlivé rady, odborné pojmy a nabídky bez společné mapy.</p><p>Proto jsem knihovnu poskládal od základů ke složitějším souvislostem. Nátlak, zamlčené podmínky a jednoduché sliby se pak posuzují snáz — ne proto, že věříte další autoritě, ale protože už chápete, kam daná informace patří a na co se potřebujete zeptat.</p><div className="founder-tags"><span><Check /> 15+ let podnikatelské praxe</span><span><Check /> zkušenost s vedením marketingové firmy</span><span><Check /> bez prodeje finančních produktů</span></div></div>
            <div className="founder-detail-panel"><Sparkles className="size-6 text-brand-yellow" /><h3>Co drží knihovnu pohromadě</h3><ol className="founder-method-list"><li><strong>Výběr:</strong> témata podle problémů, které lidé skutečně řeší.</li><li><strong>Struktura:</strong> pojmy a rizika v návazném pořadí.</li><li><strong>Použití:</strong> příklady, kontrolní otázky a další konkrétní krok.</li></ol></div>
          </div>
          <div className="founder-card-footer"><ShieldCheck /><span><strong>Cílem není, abyste věřili nám.</strong> Cílem je, abyste už nemuseli věřit naslepo.</span></div>
        </div>
      </section>

      <OfferStore practicalBooks={practicalBooks} />

      <section id="faq" className="bg-[#f5f8f6] px-5 py-22 lg:px-8"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.62fr_1.38fr]"><div><p className="eyebrow">Časté otázky</p><h2 className="section-title">Vše důležité před rozhodnutím.</h2><p className="section-lead">Přesně víte, co kupujete — a také co tento balíček neslibuje.</p></div><div className="space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-slate-200 bg-white px-5 py-1 open:shadow-[0_10px_30px_rgba(3,23,42,.04)]"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-bold text-brand-navy marker:content-none">{question}<ChevronDown className="size-4 shrink-0 text-slate-400 transition group-open:rotate-180" /></summary><p className="border-t border-slate-100 pb-5 pt-4 text-sm leading-6 text-slate-600">{answer}</p></details>)}</div></div></section>

      <footer className="bg-[#02111f] px-5 py-10 text-sm text-slate-400 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row"><div><BrandLogo compact /><p className="mt-3 max-w-md leading-6">Vzdělávací projekt pro srozumitelnější každodenní finanční rozhodování.</p></div><div className="grid gap-3 sm:grid-cols-2 sm:gap-x-10"><a href="mailto:info@restartujpenize.cz" className="inline-flex items-center gap-2 transition hover:text-white"><Mail className="size-4" /> info@restartujpenize.cz</a><span>Obchodní podmínky</span><span>Ochrana osobních údajů</span><span>Vzdělávací disclaimer</span></div></div><div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-xs leading-5 text-slate-500">Obsah nenahrazuje osobní finanční, investiční, právní ani daňové poradenství. Konkrétní podmínky produktů a poskytovatelů vždy ověřte v aktuálních oficiálních zdrojích.</div></footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(3,23,42,.1)] backdrop-blur md:hidden"><div className="mx-auto flex max-w-md items-center gap-3"><div className="min-w-0 flex-1"><p className="truncate text-xs text-slate-500">Kompletní knihovna • 13 PDF</p><p className="font-extrabold text-brand-navy">1 490 Kč</p></div><a href="#nabidka" className="inline-flex h-11 items-center justify-center rounded-xl bg-brand-navy px-4 text-sm font-bold text-white">Zobrazit nabídku</a></div></div>
    </main>
  );
}
