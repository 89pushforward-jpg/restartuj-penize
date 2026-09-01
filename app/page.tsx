import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  CircleDollarSign,
  FileCheck2,
  Gauge,
  Mail,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
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

const testimonials = [
  { name: 'Vojta', text: 'Průvodce do světa investování, který od základu všechno vysvětlí. Obrázky, struktura — je to čtivé.' },
  { name: 'Lucka', text: 'Je to víc zaměřené na praxi. Ve škole se člověk učí, ale často neví, jak informace použít.' },
  { name: 'Eva', text: 'Všechno to usazuje a dává lidem jistotu, aby se mohli ve financích opřít sami o sebe.' },
];

const faqs = [
  ['Je balíček vhodný pro úplného začátečníka?', 'Ano. Finanční (Re)Start začíná od základů. Slovník investora používáte jako průběžnou referenci a kratší e-booky otevíráte podle situace, kterou právě řešíte.'],
  ['Musím přečíst všech devět knih?', 'Ne. Začněte hlavní knihou a potom si vyberte konkrétní průvodce. Smyslem balíčku je mít spolehlivou knihovnu, ke které se můžete vracet.'],
  ['V čem je rozdíl proti informacím zdarma na internetu?', 'Informace jsou uspořádané do jednoho návazného systému. Nemusíte skládat základy z desítek článků a zároveň máte praktické kontrolní otázky pro běžné situace.'],
  ['Je to investiční doporučení?', 'Ne. Materiály vysvětlují pojmy, rizika a kontrolní otázky. Neříkají vám, co máte koupit, a nenahrazují individuální finanční, právní ani daňové poradenství.'],
  ['Jak aktuální jsou informace o brokerech a poplatcích?', 'Principy a kontrolní otázky jsou navržené jako dlouhodobě použitelné. Konkrétní sazby, regulaci a podmínky poskytovatelů je vždy potřeba ověřit v aktuálních oficiálních zdrojích.'],
  ['V jakém formátu knihy dostanu?', 'Jde o digitální e-booky ve formátu PDF pro počítač, tablet i telefon. Nejde o tištěné knihy.'],
  ['Jak proběhne doručení a platba?', 'Po úspěšné platbě vám přijde e-mail s přístupem nebo odkazy ke stažení. V této náhledové verzi ještě platební krok není aktivní.'],
  ['Jde o předplatné?', 'Ne. Cena je jednorázová a nevzniká žádná automaticky obnovovaná platba.'],
];

const primaryCta = cn(
  buttonVariants({ size: 'lg' }),
  'h-13 rounded-xl bg-[#18e878] px-6 text-base font-extrabold text-[#03172a] shadow-[0_14px_42px_rgba(24,232,120,.22)] hover:bg-[#46f394]',
);

function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src="/brand/logo-gradient.webp"
      width="800"
      height="450"
      alt="Restartuj Peníze"
      className={compact ? 'h-11 w-auto max-w-[190px] object-contain object-left' : 'h-auto w-full max-w-[390px]'}
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="border-b border-white/10 bg-brand-navy text-white">
        <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 lg:px-8">
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
            <div className="mb-7 w-fit rounded-2xl border border-white/10 bg-white/[.035] px-4 py-2"><BrandLogo /></div>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-green/25 bg-brand-green/8 px-3 py-1.5 text-sm font-semibold text-brand-green">
              <ShieldCheck className="size-4" /> Bez prodeje finančních produktů
            </p>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-extrabold leading-[1.03] tracking-[-.045em] sm:text-5xl lg:text-6xl">Finance, kterým konečně rozumíte.</h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300">Dvě rozsáhlé příručky, bonus k investičnímu mindsetu a šest praktických e-booků pro rozhodnutí, která řešíte v běžném životě.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#nabidka" className={primaryCta}>Získat balíček za 1 490 Kč <ArrowRight data-icon="inline-end" /></a>
              <a href="#hlavni-knihy" className="inline-flex h-13 items-center justify-center rounded-xl border border-white/15 px-5 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/5">Prohlédnout e-booky</a>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-400">9 PDF • jednorázová platba • bez předplatného • bez následného prodejního hovoru</p>
          </div>

          <div className="relative mx-auto min-h-[520px] w-full max-w-[580px]" aria-label="Skutečné obálky hlavních e-booků Restartuj Peníze">
            <div className="absolute inset-10 rounded-full bg-brand-green/15 blur-3xl" />
            <img src="/books/investor-dictionary.png" width="240" height="364" alt="Obálka e-booku Slovník investora" className="book-cover absolute right-[2%] top-[5%] z-10 w-[49%] rotate-[7deg]" />
            <img src="/books/financial-restart.png" width="240" height="364" alt="Obálka e-booku Finanční (Re)Start" className="book-cover absolute left-[4%] top-[1%] z-20 w-[51%] -rotate-[6deg]" />
            <div className="absolute bottom-6 left-1/2 z-30 flex w-[88%] -translate-x-1/2 items-center gap-4 rounded-2xl border border-white/12 bg-[#061c31]/92 p-4 shadow-2xl backdrop-blur">
              <img src="/books/mindset.png" width="240" height="364" alt="Obálka bonusového e-booku Mindset úspěšného investora" className="h-28 w-auto rounded-md shadow-xl" />
              <div><span className="inline-flex rounded-full bg-brand-yellow px-2.5 py-1 text-xs font-extrabold text-brand-navy">BONUS</span><p className="mt-2 font-bold">Mindset úspěšného investora</p><p className="mt-1 text-sm leading-5 text-slate-300">Součást kompletního balíčku spolu se šesti praktickými e-booky.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-navy/8 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {proof.map((item) => <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-green/12 text-[#087a46]"><Check className="size-4" /></span>{item}</div>)}
        </div>
      </section>

      <section className="bg-[#f5f8f6] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="eyebrow">Pro chvíle, kdy nestačí jen tušit</p><h2 className="section-title">Udělejte si jasno dřív, než podepíšete smlouvu nebo pošlete peníze.</h2><p className="section-lead">Balíček neslibuje zázračné výnosy. Dává vám jazyk, souvislosti a kontrolní otázky, se kterými se můžete rozhodovat informovaněji.</p></div>
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
              <img src="/books/financial-restart.png" width="240" height="364" alt="Obálka knihy Finanční (Re)Start" className="flagship-cover" />
              <div><span className="book-kicker">1. díl • 225 stran</span><h3>Finanční (Re)Start</h3><p>Základní mapa osobních financí od první výplaty po rozpočet, dluhy, rezervu, ekonomické souvislosti a budování majetku.</p><ul><li><Check /> srovnáte si základní pojmy a souvislosti</li><li><Check /> propojíte rozpočet, práci, dluhy a investování</li><li><Check /> získáte pevnější základ pro další rozhodování</li></ul></div>
            </article>
            <article className="flagship-card">
              <img src="/books/investor-dictionary.png" width="240" height="364" alt="Obálka knihy Slovník investora" className="flagship-cover" />
              <div><span className="book-kicker">2. díl • 224 stran</span><h3>Slovník investora</h3><p>Srozumitelná referenční příručka investičních pojmů, nástrojů a principů, ke které se můžete průběžně vracet.</p><ul><li><Check /> lépe se zorientujete v článcích a nabídkách</li><li><Check /> dohledáte si neznámý pojem v souvislostech</li><li><Check /> snáze poznáte, na co se potřebujete zeptat</li></ul></div>
            </article>
          </div>
        </div>
      </section>

      <section id="obsah" className="bg-brand-navy px-5 py-22 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_.72fr] lg:items-end"><div><p className="eyebrow text-brand-green">Šest průvodců pro konkrétní situace</p><h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">Nemusíte hledat jednu odpověď v celé knihovně.</h2></div><p className="text-base leading-7 text-slate-300">Otevřete e-book k tématu, které právě řešíte. Každý titul má svou skutečnou obálku, přesný účel a je součástí kompletního balíčku.</p></div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practicalBooks.map((book) => <article key={book.title} className="practical-card"><img src={book.image} width="240" height="364" alt={`Obálka e-booku ${book.title}`} /><div><p className="text-xs font-bold uppercase tracking-[.14em] text-brand-green">Praktický e-book</p><h3>{book.title}</h3><p>{book.use}</p></div></article>)}
          </div>
          <div className="bonus-panel"><img src="/books/mindset.png" width="240" height="364" alt="Obálka bonusu Mindset úspěšného investora" /><div><span>BONUS K OBOU HLAVNÍM KNIHÁM</span><h3>Mindset úspěšného investora</h3><p>Emoce, FOMO, pravidelnost a osobní pravidla pro klidnější rozhodování. Bonus doplňuje znalosti o způsob, jak s nimi pracovat v praxi.</p></div></div>
          <div className="mt-10 text-center"><a href="#nabidka" className={primaryCta}>Získat všech 9 e-booků <ArrowRight data-icon="inline-end" /></a></div>
        </div>
      </section>

      <section className="bg-[#f5f8f6] px-5 py-22 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div><p className="eyebrow">Uvnitř skutečných knih</p><h2 className="section-title">Nejen názvy na obálce. Uspořádaný obsah, ke kterému se dá vracet.</h2><p className="section-lead">Hlavní knihy kombinují výklad, příklady a kontrolní otázky. Kratší e-booky pak pomáhají rychle otevřít konkrétní problém.</p>
              <div className="mt-8 space-y-4">{[['1', 'Začněte základy', 'Finanční (Re)Start vám dá mapu a pořadí témat.'], ['2', 'Dohledávejte pojmy', 'Slovník investora používejte jako průběžnou referenci.'], ['3', 'Otevřete aktuální situaci', 'Vyberte jeden ze šesti praktických průvodců.']].map(([n, title, text]) => <div key={n} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-navy font-extrabold text-brand-green">{n}</span><div><h3 className="font-bold text-brand-navy">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{text}</p></div></div>)}</div>
            </div>
            <div className="sample-grid" aria-label="Ukázky stran z knihy Finanční (Re)Start"><img src="/books/sample-financial-1.png" width="240" height="340" alt="Ukázka vnitřní strany e-booku" /><img src="/books/sample-financial-2.png" width="240" height="340" alt="Ukázka vnitřní strany e-booku" /><img src="/books/sample-financial-3.png" width="240" height="340" alt="Ukázka vnitřní strany e-booku" /></div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-22 lg:px-8">
        <div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start"><div><p className="eyebrow">Zpětná vazba testovacích čtenářů</p><h2 className="section-title">Oceňují strukturu, příklady a čtivost.</h2><p className="section-lead">Konkrétní dojmy lidí, kteří dostali materiály k přečtení — bez anonymních hvězdiček a bez přikrášlování.</p></div><div className="grid gap-4 sm:grid-cols-2">{testimonials.map((quote, index) => <figure key={quote.name} className={cn('rounded-3xl border border-slate-200 bg-[#f8faf8] p-7', index === 2 && 'sm:col-span-2')}><blockquote className="text-lg leading-8 text-brand-navy">„{quote.text}“</blockquote><figcaption className="mt-6 flex items-center gap-3 text-sm font-bold text-slate-700"><span className="grid size-9 place-items-center rounded-full bg-brand-navy text-brand-green">{quote.name.charAt(0)}</span>{quote.name} <span className="font-normal text-slate-400">• testovací čtenář/ka</span></figcaption></figure>)}</div></div></div>
      </section>

      <section id="o-projektu" className="bg-[#f5f8f6] px-5 py-22 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_24px_80px_rgba(3,23,42,.06)] md:grid-cols-[.58fr_1.42fr] md:p-10">
          <div className="relative min-h-64 overflow-hidden rounded-2xl bg-brand-navy p-7 text-white"><div className="absolute -right-12 -top-12 size-48 rounded-full border-[28px] border-brand-green/15" /><Sparkles className="size-6 text-brand-yellow" /><p className="mt-20 text-sm text-slate-400">Autor projektu</p><p className="mt-1 text-2xl font-extrabold">Lukáš Zahrádka</p></div>
          <div className="self-center"><p className="eyebrow">Proč Restartuj Peníze vzniklo</p><h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-navy">Ne proto, abych vám prodal finanční produkt.</h2><p className="mt-5 leading-7 text-slate-600">Vlastní neznalost důležitých podmínek ve smlouvě mě stála více než 100 000 Kč. Začal jsem si finanční témata skládat od základů a převádět je do podoby, které rozumí i člověk bez ekonomického vzdělání.</p><p className="mt-4 leading-7 text-slate-600">Výsledkem není návod, kam investovat. Je to knihovna, která vám pomůže lépe rozumět informacím, se kterými se při finančních rozhodnutích setkáváte.</p><div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-3 py-2 text-sm font-bold text-[#087a46]"><ShieldCheck className="size-4" /> Projekt neprodává finanční produkty</div></div>
        </div>
      </section>

      <section id="nabidka" className="bg-white px-5 py-22 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_100px_rgba(3,23,42,.12)]"><div className="grid lg:grid-cols-[1.12fr_.88fr]">
          <div className="p-7 sm:p-10"><p className="eyebrow">Kompletní balíček Restartuj Peníze</p><h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy">Celá knihovna finančních základů</h2><p className="mt-4 max-w-xl leading-7 text-slate-600">Dvě hlavní knihy, Mindset jako bonus a šest praktických e-booků pro běžná finanční rozhodnutí.</p><div className="mt-7 flex gap-3 overflow-hidden"><img src="/books/financial-restart.png" width="240" height="364" alt="Finanční (Re)Start" className="h-44 w-auto rounded-lg shadow-lg" /><img src="/books/investor-dictionary.png" width="240" height="364" alt="Slovník investora" className="h-44 w-auto rounded-lg shadow-lg" /><img src="/books/mindset.png" width="240" height="364" alt="Mindset úspěšného investora" className="hidden h-44 w-auto rounded-lg shadow-lg sm:block" /></div><ul className="mt-7 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">{['Finanční (Re)Start • 225 stran', 'Slovník investora • 224 stran', 'Bonus Mindset úspěšného investora', '6 praktických tematických e-booků', 'PDF pro mobil, tablet i počítač', 'Bez předplatného a následného hovoru'].map((item) => <li key={item} className="flex items-start gap-2"><Check className="mt-0.5 size-4 shrink-0 text-[#087a46]" /> {item}</li>)}</ul><div className="mt-8 rounded-2xl border border-brand-yellow/45 bg-brand-yellow/10 p-4 text-sm leading-6 text-[#5c4700]"><strong>Transparentní cena bez falešné slevy.</strong> Žádný umělý časovač ani nafouknutá „původní hodnota“.</div></div>
          <div className="flex flex-col justify-between bg-brand-navy p-7 text-white sm:p-10"><div><p className="text-sm text-slate-400">Jednorázová cena za všech 9 e-booků</p><p className="mt-2 text-5xl font-extrabold tracking-tight">1 490 Kč</p><p className="mt-2 text-sm text-slate-400">digitální doručení • bez dalších plateb</p></div><div className="mt-10"><button type="button" disabled className="flex h-14 w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-brand-green px-6 text-base font-extrabold text-brand-navy opacity-90">Objednávka bude brzy dostupná <ArrowRight className="size-4" /></button><div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400"><CircleDollarSign className="size-4" /> Bezpečná platba přes Stripe bude přímo zde</div><p className="mt-4 text-center text-xs leading-5 text-slate-500">Toto je náhled nabídky. Tlačítko zatím neodesílá objednávku ani platbu.</p></div></div>
        </div></div>
      </section>

      <section id="faq" className="bg-[#f5f8f6] px-5 py-22 lg:px-8"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.62fr_1.38fr]"><div><p className="eyebrow">Časté otázky</p><h2 className="section-title">Vše důležité před rozhodnutím.</h2><p className="section-lead">Přesně víte, co kupujete — a také co tento balíček neslibuje.</p></div><div className="space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-slate-200 bg-white px-5 py-1 open:shadow-[0_10px_30px_rgba(3,23,42,.04)]"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-bold text-brand-navy marker:content-none">{question}<ChevronDown className="size-4 shrink-0 text-slate-400 transition group-open:rotate-180" /></summary><p className="border-t border-slate-100 pb-5 pt-4 text-sm leading-6 text-slate-600">{answer}</p></details>)}</div></div></section>

      <section className="bg-brand-navy px-5 py-20 text-white lg:px-8"><div className="mx-auto max-w-4xl text-center"><BookOpen className="mx-auto size-8 text-brand-green" /><h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">Nemusíte znát odpověď na všechno. Potřebujete vědět, kde ji hledat a na co se zeptat.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Začněte u základů a otevřete konkrétní průvodce ve chvíli, kdy ho potřebujete.</p><a href="#nabidka" className={cn(primaryCta, 'mt-8')}>Prohlédnout kompletní nabídku <ArrowRight data-icon="inline-end" /></a></div></section>

      <footer className="bg-[#02111f] px-5 py-10 text-sm text-slate-400 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row"><div><BrandLogo compact /><p className="mt-3 max-w-md leading-6">Vzdělávací projekt pro srozumitelnější každodenní finanční rozhodování.</p></div><div className="grid gap-3 sm:grid-cols-2 sm:gap-x-10"><a href="mailto:info@restartujpenize.cz" className="inline-flex items-center gap-2 transition hover:text-white"><Mail className="size-4" /> info@restartujpenize.cz</a><span>Obchodní podmínky</span><span>Ochrana osobních údajů</span><span>Vzdělávací disclaimer</span></div></div><div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-xs leading-5 text-slate-500">Obsah nenahrazuje osobní finanční, investiční, právní ani daňové poradenství. Konkrétní podmínky produktů a poskytovatelů vždy ověřte v aktuálních oficiálních zdrojích.</div></footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(3,23,42,.1)] backdrop-blur md:hidden"><div className="mx-auto flex max-w-md items-center gap-3"><div className="min-w-0 flex-1"><p className="truncate text-xs text-slate-500">Kompletní balíček • 9 e-booků</p><p className="font-extrabold text-brand-navy">1 490 Kč</p></div><a href="#nabidka" className="inline-flex h-11 items-center justify-center rounded-xl bg-brand-navy px-4 text-sm font-bold text-white">Zobrazit nabídku</a></div></div>
    </main>
  );
}
