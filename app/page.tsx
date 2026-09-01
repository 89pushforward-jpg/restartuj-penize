import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BookOpen,
  Check,
  ChevronDown,
  CircleDollarSign,
  Compass,
  FileCheck2,
  Gauge,
  Mail,
  Scale,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const proof = [
  '449 stran ve 2 hlavních příručkách',
  '9 e-booků v jednom systému',
  'Jednorázová platba, žádné předplatné',
  'Vzdělávání, ne investiční doporučení',
];

const situations = [
  { icon: FileCheck2, title: 'Před podpisem smlouvy', text: 'Víte, které pojmy, poplatky a podmínky si potřebujete nechat vysvětlit.' },
  { icon: SearchCheck, title: 'Při výběru poradce nebo brokera', text: 'Máte konkrétní otázky a kritéria, podle kterých můžete nabídky porovnat.' },
  { icon: WalletCards, title: 'Když peníze mizí bez systému', text: 'Začnete rozpočtem, rezervou a místy, kde má smysl zkontrolovat pravidelné výdaje.' },
  { icon: Gauge, title: 'Když cítíte tlak nebo FOMO', text: 'Rozpoznáte emoční spouštěče a získáte prostor rozhodnout se vlastním tempem.' },
];

const pillars = [
  {
    step: '01',
    label: 'Porozumět',
    title: 'Mapa finančních základů',
    text: 'Nejdřív si srovnáte jazyk peněz, dluhů, ekonomiky a investování. Další informace tak konečně zapadnou do souvislostí.',
    items: ['Finanční (Re)Start', 'Slovník investora', 'Mindset investora'],
  },
  {
    step: '02',
    label: 'Prověřit',
    title: 'Ochrana před tlakem a drahými detaily',
    text: 'Naučíte se všímat motivace druhé strany, způsobu odměňování, poplatků a varovných signálů v nabídce.',
    items: ['Rozhodnutí bez nátlaku', 'Jak prověřit poradce', 'Audit zbytečných poplatků'],
  },
  {
    step: '03',
    label: 'Rozhodnout',
    title: 'Praktické postupy pro běžný život',
    text: 'Převedete základy do rozpočtu, výběru brokera a přípravy na jednání o vlastní hodnotě a příjmu.',
    items: ['Rodinný rozpočet v praxi', 'Jak vybrat brokera', 'Jak zvýšit svou hodnotu a příjem'],
  },
];

const books = [
  { n: '01', title: 'Finanční (Re)Start', meta: '225 stran • 6 kapitol', text: 'Základní mapa peněz, dluhů, rozpočtu, ekonomiky, práce a budování majetku.' },
  { n: '02', title: 'Slovník investora', meta: '224 stran • 4 kapitoly', text: 'Přehled pojmů, nástrojů a principů, ke kterému se můžete průběžně vracet.' },
  { n: '03', title: 'Mindset investora', meta: 'Bonusový průvodce', text: 'Emoce, FOMO, pravidelnost a osobní pravidla pro klidnější rozhodování.' },
  { n: '04', title: 'Rozhodnutí bez nátlaku', meta: 'Praktický e-book', text: 'Jak rozpoznat časový tlak, falešnou autoritu a další manipulační vzorce.' },
  { n: '05', title: 'Jak prověřit poradce', meta: 'Praktický e-book', text: 'Odměňování, kontrolní otázky a odpovědi, které mají být varovným signálem.' },
  { n: '06', title: 'Jak vybrat brokera', meta: 'Praktický e-book', text: 'Regulace, poplatky, měnové konverze, výběry a vhodnost pro váš způsob investování.' },
  { n: '07', title: 'Audit zbytečných poplatků', meta: 'Praktický e-book', text: 'Seznam oblastí, které má smysl zkontrolovat, porovnat nebo znovu vyjednat.' },
  { n: '08', title: 'Rodinný rozpočet v praxi', meta: 'Praktický e-book', text: 'Příjmy, nezbytné a volitelné výdaje, rezerva, dluhy a dlouhodobé cíle.' },
  { n: '09', title: 'Jak zvýšit svou hodnotu a příjem', meta: 'Praktický e-book', text: 'Kompetence, měřitelné výsledky a příprava na rozhovor o odměně.' },
];

const testimonials = [
  { name: 'Vojta', text: 'Průvodce do světa investování, který od základu všechno vysvětlí. Obrázky, struktura — je to čtivé.' },
  { name: 'Lucka', text: 'Je to víc zaměřené na praxi. Ve škole se člověk učí, ale často neví, jak informace použít.' },
  { name: 'Eva', text: 'Všechno to usazuje a dává lidem jistotu, aby se mohli ve financích opřít sami o sebe.' },
];

const faqs = [
  ['Je to investiční doporučení?', 'Ne. Materiály vysvětlují pojmy, rizika a kontrolní otázky. Neříkají vám, co máte koupit, a nenahrazují individuální finanční, právní ani daňové poradenství.'],
  ['Je balíček vhodný pro úplného začátečníka?', 'Ano. Hlavní příručky začínají od základů a další průvodci na ně navazují. Doporučené pořadí je Finanční (Re)Start, Slovník investora podle potřeby, Mindset a potom praktický průvodce k vaší aktuální situaci.'],
  ['Dostanu tištěné knihy?', 'Ne. Jde o digitální e-booky ve formátu PDF, které můžete číst na počítači, tabletu i telefonu.'],
  ['Jak materiály obdržím?', 'Po úspěšné platbě vám přijde e-mail s přístupem nebo odkazy ke stažení. V této náhledové verzi ještě platební krok není aktivní.'],
  ['Jde o předplatné?', 'Ne. Cena je jednorázová. Nevzniká žádná automaticky obnovovaná platba.'],
  ['Pomůže mi balíček s akutními dluhy nebo exekucí?', 'Poskytne vám vzdělávací základ, ale nenahrazuje individuální pomoc kvalifikované dluhové poradny, právníka nebo jiného odborníka.'],
  ['Jak aktuální jsou informace o brokerech a poplatcích?', 'Principy a kontrolní otázky jsou navržené jako dlouhodobě použitelné. Konkrétní sazby, regulaci a podmínky poskytovatelů je před rozhodnutím vždy potřeba ověřit v aktuálních oficiálních zdrojích.'],
];

const primaryCta = cn(
  buttonVariants({ size: 'lg' }),
  'h-13 rounded-xl bg-emerald-400 px-6 text-base font-semibold text-[#061625] shadow-[0_12px_36px_rgba(16,185,129,.2)] hover:bg-emerald-300',
);

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="border-b border-white/10 bg-[#061625] text-white">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight" aria-label="Restartuj Peníze — nahoru">
            <span className="grid size-10 place-items-center rounded-full bg-emerald-400 text-[#061625] shadow-[0_0_28px_rgba(52,211,153,.28)]">
              <Banknote className="size-5" aria-hidden="true" />
            </span>
            <span>Restartuj Peníze</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#jak-to-funguje" className="transition hover:text-white">Jak to funguje</a>
            <a href="#obsah" className="transition hover:text-white">Co získáte</a>
            <a href="#faq" className="transition hover:text-white">Otázky</a>
          </div>
          <a href="#nabidka" className="rounded-lg border border-white/15 px-3 py-2 text-sm font-semibold transition hover:border-emerald-300/50 hover:bg-white/5">Zobrazit nabídku</a>
        </div>
      </nav>

      <section id="top" className="relative isolate bg-[#061625] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_24%,rgba(16,185,129,.17),transparent_34%),radial-gradient(circle_at_15%_85%,rgba(250,204,21,.07),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-18 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/8 px-3 py-1.5 text-sm text-emerald-200">
              <ShieldCheck className="size-4" aria-hidden="true" />
              Finanční vzdělávání bez prodeje finančních produktů
            </div>
            <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.04] tracking-[-.04em] sm:text-5xl lg:text-6xl">
              Rozumějte svým penězům dřív, než o nich rozhodnete.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-300">
              Restartuj Peníze je sada 9 názorných e-booků pro rozpočet, dluhy, poplatky, poradce, brokery a základy investování. Jednoduše, prakticky a bez slibů rychlého zbohatnutí.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#nabidka" className={primaryCta}>Získat kompletní balíček <ArrowRight data-icon="inline-end" /></a>
              <a href="#obsah" className="inline-flex h-13 items-center justify-center rounded-xl border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5">Prohlédnout obsah</a>
            </div>
            <p className="mt-4 max-w-xl text-xs leading-5 text-slate-400">Vzdělávací materiál, ne osobní investiční doporučení. Cílem je, abyste se dokázali lépe ptát, porovnávat a rozhodovat.</p>
          </div>

          <div className="relative mx-auto w-full max-w-xl" aria-label="Obsah balíčku Restartuj Peníze">
            <div className="absolute -inset-8 -z-10 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="rounded-[2rem] border border-white/12 bg-white/[.055] p-5 shadow-2xl backdrop-blur sm:p-7">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm text-slate-300">Finanční kompas</span>
                <span className="rounded-full bg-amber-300 px-2.5 py-1 text-xs font-bold text-[#061625]">9 e-booků</span>
              </div>
              <div className="grid grid-cols-[1fr_.82fr] items-end gap-4">
                <div className="relative min-h-78 overflow-hidden rounded-2xl border border-emerald-300/20 bg-gradient-to-br from-[#0b2c38] to-[#071925] p-6 shadow-xl">
                  <div className="mb-16 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.18em] text-emerald-300"><BadgeCheck className="size-4" /> Základ</div>
                  <p className="text-3xl font-semibold leading-none tracking-tight">Finanční<br />(Re)Start</p>
                  <p className="mt-4 text-sm leading-6 text-slate-300">Osobní finance od první výplaty po pevnější finanční systém.</p>
                  <p className="absolute bottom-5 left-6 text-xs text-emerald-200">225 stran • 6 kapitol</p>
                </div>
                <div className="mb-5 min-h-64 rounded-2xl border border-amber-300/20 bg-gradient-to-br from-[#1d2933] to-[#0a1821] p-5 shadow-xl">
                  <BookOpen className="mb-12 size-6 text-amber-300" aria-hidden="true" />
                  <p className="text-xl font-semibold leading-tight">Slovník investora</p>
                  <p className="mt-3 text-xs leading-5 text-slate-300">Pojmy a souvislosti bez zbytečné složitosti.</p>
                  <p className="mt-6 text-xs text-amber-200">224 stran</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-slate-300">
                <span className="rounded-xl border border-white/10 bg-white/[.04] px-2 py-3">3 základy</span>
                <span className="rounded-xl border border-white/10 bg-white/[.04] px-2 py-3">3 ochrany</span>
                <span className="rounded-xl border border-white/10 bg-white/[.04] px-2 py-3">3 postupy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {proof.map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700"><Check className="size-4" /></span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f7f3] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-emerald-700">Finanční mlha má konkrétní podobu</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#071925] sm:text-4xl">Finance nejsou těžké. Často jsou jen vysvětlené ve špatném pořadí.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Když chybí základy a souvislosti, těžko se poznává, co je vhodné, co je drahé a na co se máte zeptat. Balíček vám dává strukturu pro situace, které řešíte dnes.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {situations.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(6,22,37,.04)]">
                <span className="grid size-11 place-items-center rounded-xl bg-[#071925] text-emerald-300"><Icon className="size-5" /></span>
                <h3 className="mt-5 font-semibold text-[#071925]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="jak-to-funguje" className="bg-white px-5 py-22 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr]">
            <div className="lg:sticky lg:top-8 lg:self-start">
              <p className="text-sm font-semibold uppercase tracking-[.16em] text-emerald-700">Jeden systém, ne hromada PDF</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#071925] sm:text-4xl">Od pojmů k rozhodnutím ve třech krocích.</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">Nemusíte přečíst všechno najednou. Začněte mapou a potom otevřete průvodce k situaci, kterou právě řešíte.</p>
            </div>
            <div className="space-y-4">
              {pillars.map((pillar) => (
                <article key={pillar.step} className="grid gap-5 rounded-3xl border border-slate-200 bg-[#f8faf8] p-6 sm:grid-cols-[auto_1fr] sm:p-8">
                  <span className="grid size-12 place-items-center rounded-full bg-emerald-100 font-semibold text-emerald-800">{pillar.step}</span>
                  <div>
                    <p className="text-sm font-semibold text-emerald-700">{pillar.label}</p>
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[#071925]">{pillar.title}</h3>
                    <p className="mt-3 max-w-2xl leading-7 text-slate-600">{pillar.text}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {pillar.items.map((item) => <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">{item}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="obsah" className="bg-[#061625] px-5 py-22 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.16em] text-emerald-300">Kompletní obsah</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">9 příruček. Každá má jasnou roli.</h2>
            </div>
            <p className="text-base leading-7 text-slate-300">Dvě hlavní knihy tvoří základ. Sedm kratších průvodců vám pomůže rychle otevřít konkrétní situaci, otázky a kontrolní body.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book, index) => (
              <article key={book.n} className={cn('group rounded-2xl border p-6 transition', index < 2 ? 'border-emerald-300/25 bg-emerald-300/[.07]' : 'border-white/10 bg-white/[.045] hover:border-white/20')}>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-semibold tracking-[.18em] text-emerald-300">{book.n}</span>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-slate-400">{book.meta}</span>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight">{book.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{book.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="#nabidka" className={primaryCta}>Získat kompletní balíček <ArrowRight data-icon="inline-end" /></a>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7f3] px-5 py-22 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-emerald-700">Jak s knihovnou pracovat</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#071925] sm:text-4xl">Nemusíte zvládnout 449 stran za víkend.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              [Compass, 'Vyberte situaci', 'Začněte otázkou, kterou právě řešíte — rozpočet, poradce, broker, poplatky nebo nátlak.'],
              [BookOpen, 'Otevřete správnou část', 'Hlavní příručky dodají kontext. Praktický e-book zkrátí cestu ke konkrétním bodům.'],
              [Scale, 'Položte lepší otázky', 'Porovnejte podmínky, ověřte zdroje a udělejte rozhodnutí vlastním tempem.'],
            ].map(([Icon, title, text], index) => {
              const StepIcon = Icon as typeof Compass;
              return (
                <article key={String(title)} className="relative rounded-3xl border border-slate-200 bg-white p-7">
                  <span className="absolute right-6 top-5 text-5xl font-semibold text-slate-100">{index + 1}</span>
                  <StepIcon className="size-6 text-emerald-700" />
                  <h3 className="mt-7 text-xl font-semibold text-[#071925]">{String(title)}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{String(text)}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-[#061625] shadow-[0_24px_70px_rgba(6,22,37,.12)]">
            <img
              src="/og.png"
              width="1728"
              height="909"
              alt="Finanční kompas projektu Restartuj Peníze s příručkami a cestou k cíli"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-22 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.16em] text-emerald-700">Zpětná vazba testovacích čtenářů</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#071925] sm:text-4xl">Nejčastěji oceňují strukturu, příklady a čtivost.</h2>
              <p className="mt-5 leading-7 text-slate-600">Nejde o anonymní hvězdičky. Jde o konkrétní dojmy lidí, kteří dostali materiály k přečtení a popsali, co jim na nich pomohlo.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {testimonials.map((quote, index) => (
                <figure key={quote.name} className={cn('rounded-3xl border border-slate-200 bg-[#f8faf8] p-7', index === 2 && 'sm:col-span-2')}>
                  <blockquote className="text-lg leading-8 text-[#071925]">„{quote.text}“</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <span className="grid size-9 place-items-center rounded-full bg-[#071925] text-emerald-300">{quote.name.charAt(0)}</span>
                    {quote.name} <span className="font-normal text-slate-400">• testovací čtenář/ka</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7f3] px-5 py-22 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_24px_80px_rgba(6,22,37,.06)] md:grid-cols-[.55fr_1.45fr] md:p-10">
          <div className="relative min-h-64 overflow-hidden rounded-2xl bg-[#071925] p-7 text-white">
            <div className="absolute -right-12 -top-12 size-48 rounded-full border-[28px] border-emerald-400/15" />
            <Sparkles className="size-6 text-amber-300" />
            <p className="mt-20 text-sm text-slate-400">Autor projektu</p>
            <p className="mt-1 text-2xl font-semibold">Lukáš Zahrádka</p>
          </div>
          <div className="self-center">
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-emerald-700">Proč projekt vznikl</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#071925]">Ne proto, abych vám prodal finanční produkt.</h2>
            <p className="mt-5 leading-7 text-slate-600">Vlastní neznalost důležitých podmínek ve smlouvě mě stála více než 100 000 Kč. Začal jsem si finanční témata skládat od základů a převádět je do podoby, které rozumí i člověk bez ekonomického vzdělání.</p>
            <p className="mt-4 leading-7 text-slate-600">Výsledkem není návod, kam investovat. Je to systém, který vám pomůže lépe rozumět informacím, se kterými se při finančních rozhodnutích setkáváte.</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800"><ShieldCheck className="size-4" /> Projekt neprodává finanční produkty</div>
          </div>
        </div>
      </section>

      <section id="nabidka" className="bg-white px-5 py-22 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_100px_rgba(6,22,37,.11)]">
          <div className="grid lg:grid-cols-[1.15fr_.85fr]">
            <div className="p-7 sm:p-10">
              <p className="text-sm font-semibold text-emerald-700">Kompletní balíček</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#071925]">Restartuj Peníze: Finanční kompas</h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-600">Devět digitálních e-booků pro jistější orientaci v každodenních financích.</p>
              <ul className="mt-7 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                {['2 hlavní příručky, 449 stran', '7 praktických tematických e-booků', 'PDF pro mobil, tablet i počítač', 'Doporučené pořadí čtení', 'Okamžité digitální doručení', 'Bez předplatného a následného hovoru'].map((item) => (
                  <li key={item} className="flex items-start gap-2"><Check className="mt-0.5 size-4 shrink-0 text-emerald-700" /> {item}</li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
                <strong>Transparentní cena bez falešné slevy.</strong> Nezvyšujeme „hodnotu“ krátkých PDF jen proto, aby sleva vypadala větší.
              </div>
            </div>
            <div className="flex flex-col justify-between bg-[#071925] p-7 text-white sm:p-10">
              <div>
                <p className="text-sm text-slate-400">Jednorázová cena</p>
                <p className="mt-2 text-5xl font-semibold tracking-tight">1 490 Kč</p>
                <p className="mt-2 text-sm text-slate-400">za celý balíček • bez dalších plateb</p>
              </div>
              <div className="mt-10">
                <button type="button" disabled className="flex h-14 w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 text-base font-semibold text-[#061625] opacity-90">
                  Objednávka bude brzy dostupná <ArrowRight className="size-4" />
                </button>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400"><CircleDollarSign className="size-4" /> Budoucí bezpečná platba přes Stripe přímo zde</div>
                <p className="mt-4 text-center text-xs leading-5 text-slate-500">Toto je náhled nabídky. Tlačítko zatím neodesílá objednávku ani platbu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#f4f7f3] px-5 py-22 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.62fr_1.38fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-emerald-700">Časté otázky</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#071925]">Vše důležité před rozhodnutím.</h2>
            <p className="mt-5 leading-7 text-slate-600">Chceme, abyste přesně věděli, co kupujete — a také co tento balíček neslibuje.</p>
          </div>
          <div className="space-y-3">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-slate-200 bg-white px-5 py-1 open:shadow-[0_10px_30px_rgba(6,22,37,.04)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold text-[#071925] marker:content-none">
                  {question}<ChevronDown className="size-4 shrink-0 text-slate-400 transition group-open:rotate-180" />
                </summary>
                <p className="border-t border-slate-100 pb-5 pt-4 text-sm leading-6 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061625] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Compass className="mx-auto size-8 text-emerald-300" />
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Nemusíte znát odpověď na všechno. Potřebujete vědět, na co se zeptat.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Začněte u základů, které můžete použít při každém dalším rozhodnutí — od rodinného rozpočtu až po výběr brokera.</p>
          <a href="#nabidka" className={cn(primaryCta, 'mt-8')}>Prohlédnout kompletní nabídku <ArrowRight data-icon="inline-end" /></a>
        </div>
      </section>

      <footer className="bg-[#04101c] px-5 py-10 text-sm text-slate-400 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
          <div>
            <div className="flex items-center gap-2 font-semibold text-white"><Banknote className="size-5 text-emerald-300" /> Restartuj Peníze</div>
            <p className="mt-3 max-w-md leading-6">Vzdělávací projekt pro srozumitelnější každodenní finanční rozhodování.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-x-10">
            <a href="mailto:info@restartujpenize.cz" className="inline-flex items-center gap-2 transition hover:text-white"><Mail className="size-4" /> info@restartujpenize.cz</a>
            <span>Obchodní podmínky</span>
            <span>Ochrana osobních údajů</span>
            <span>Vzdělávací disclaimer</span>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-xs leading-5 text-slate-500">Obsah nenahrazuje osobní finanční, investiční, právní ani daňové poradenství. Konkrétní podmínky produktů a poskytovatelů vždy ověřte v aktuálních oficiálních zdrojích.</div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(6,22,37,.1)] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md items-center gap-3">
          <div className="min-w-0 flex-1"><p className="truncate text-xs text-slate-500">Kompletní balíček</p><p className="font-semibold text-[#071925]">1 490 Kč</p></div>
          <a href="#nabidka" className="inline-flex h-11 items-center justify-center rounded-xl bg-[#071925] px-4 text-sm font-semibold text-white">Zobrazit nabídku</a>
        </div>
      </div>
    </main>
  );
}
