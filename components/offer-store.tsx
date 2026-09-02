'use client';

import { useMemo, useState, type ReactNode } from 'react';
import { ArrowRight, BookOpenCheck, Check, ChevronDown, CircleDollarSign, LifeBuoy, ShieldAlert, ShieldCheck, ShoppingCart, Trash2 } from 'lucide-react';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { ProductInfoDialog } from '@/components/product-info-dialog';
import { cn } from '@/lib/utils';

type PracticalBook = { image: string; title: string; use: string; forWhom: string; inside: string[] };
type Product = { id: string; name: string; description: string; price: number; image: string; kind: 'set' | 'ebook' };

const money = new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK', maximumFractionDigits: 0 });

const scamBooks: Product[] = [
  { id: 'scam-seniors', name: 'Podvody na seniorech', description: 'Pomůže vám s rodiči nebo prarodiči projít typické scénáře nátlaku a domluvit si jednoduchý postup dřív, než někomu předají peníze.', price: 99, image: '/books/scams/seniori.jpg', kind: 'ebook' },
  { id: 'scam-social', name: 'Podvody na sociálních sítích', description: 'Naučíte se ověřit podezřelý profil, reklamu nebo video, než kliknete, odpovíte nebo pošlete peníze.', price: 99, image: '/books/scams/socialni-site.jpg', kind: 'ebook' },
  { id: 'scam-ponzi', name: 'Investiční podvody a Ponziho schémata', description: 'Získáte kontrolní otázky pro nabídky „bez rizika“ a snáz poznáte, kdy výnos stojí hlavně na tlaku a neprůhledných slibech.', price: 99, image: '/books/scams/ponzi.jpg', kind: 'ebook' },
  { id: 'scam-phishing', name: 'Phishing a falešné weby', description: 'Rozpoznáte znaky falešného e-mailu, přihlášení nebo podpory a budete vědět, jak odkaz bezpečně ověřit.', price: 99, image: '/books/scams/phishing.jpg', kind: 'ebook' },
];

const scamDetails: Record<string, { bestFor: string; outcome: string; includes: string[] }> = {
  'scam-seniors': { bestFor: 'Chcete s rodiči nebo prarodiči probrat podvody dřív, než přijde naléhavý telefonát nebo návštěva.', outcome: 'Domluvíte si rodinný bezpečnostní postup a budete vědět, jak ověřit falešného příbuzného, pracovníka nebo výhru.', includes: ['telefonické výhry, falešní vnuci a předváděcí akce', 'falešní pracovníci bank, pošty a energetických firem', 'odmítnutí tlaku, kontrola smlouvy a ověření s rodinou'] },
  'scam-social': { bestFor: 'Na sociálních sítích vídáte investiční reklamy, soutěže nebo profily, u kterých si nejste jistí pravostí.', outcome: 'Snáz prověříte zdroj, falešný profil nebo deepfake video ještě před kliknutím či odesláním peněz.', includes: ['falešné profily, giveawaye, pracovní nabídky a e-shopy', 'deepfake videa a zneužití známých osobností', 'ověření oficiálního zdroje a bezpečný postup při pochybnostech'] },
  'scam-ponzi': { bestFor: 'Někdo vám nabízí vysoký nebo garantovaný výnos a není jasné, jak projekt skutečně vydělává.', outcome: 'Dostanete sadu varovných signálů pro Ponziho a pyramidová schémata a otázky pro základní prověření firmy.', includes: ['princip Ponziho schématu a proč se vždy zhroutí', 'garantované výnosy, nábor dalších lidí a neprůhledný model', 'ověření regulace, historie, recenzí a reálného podnikání'] },
  'scam-phishing': { bestFor: 'Chcete bezpečněji posuzovat naléhavé e-maily, SMS, telefonáty a přihlašovací stránky.', outcome: 'Poznáte časté znaky phishingu a budete vědět, jak komunikaci ověřit bez použití podezřelého odkazu.', includes: ['falešné bankovní e-maily, SMS a podvodné weby', 'kontrola odesílatele, domény a naléhavého požadavku', '2FA, ochrana citlivých údajů a ověření přes oficiální kontakt'] },
};

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

const mainDetails = {
  'financial-restart': { bestFor: 'Máte ve financích příliš mnoho otevřených témat a nevíte, co má přednost.', outcome: 'Uspořádáte rozpočet, rezervu, dluhy a investování do logického pořadí kroků.', includes: ['příjmy, výdaje, rozpočet a finanční rezerva', 'dluhy, úroky, inflace a ekonomické souvislosti', 'základy investování, riziko a budování majetku'], pages: '225 stran', samples: financialSamples },
  'investor-dictionary': { bestFor: 'Při čtení smlouvy, článku nebo nabídky narážíte na pojmy, které vám nikdo srozumitelně nevysvětlil.', outcome: 'Rychleji zjistíte, co výraz znamená, jak souvisí s rizikem a na co se potřebujete doptat.', includes: ['investiční nástroje, trhy a typy aktiv', 'výnos, riziko, poplatky, diverzifikace a likvidita', 'pojmy používané u brokerů, fondů a smluv'], pages: '224 stran', samples: dictionarySamples },
} as const;

const products = {
  shield: { id: 'set-financial-shield', name: 'Finanční štít', description: 'Poznejte časté podvody dřív, než odejdou peníze', price: 290, image: '/books/scams/phishing.jpg', kind: 'set' },
  firstAid: { id: 'set-first-aid', name: 'Finanční první pomoc', description: 'Vyřešte šest nejčastějších finančních situací krok za krokem', price: 790, image: '/books/emotions.png', kind: 'set' },
  map: { id: 'set-financial-map', name: 'Finanční mapa', description: 'Uspořádejte si finance a rozumějte nabídkám i pojmům', price: 990, image: '/books/financial-restart-hq.jpg', kind: 'set' },
  complete: { id: 'complete-library', name: 'Celý systém Restartuj Peníze', description: 'Ochrana, řešení problémů a jasný finanční systém v 13 PDF', price: 1490, image: '/books/investor-dictionary-hq.jpg', kind: 'set' },
} satisfies Record<string, Product>;

function AddButton({ product, selected, onAdd, featured = false, children }: { product: Product; selected: boolean; onAdd: (product: Product) => void; featured?: boolean; children: ReactNode }) {
  return <button type="button" onClick={() => onAdd(product)} aria-pressed={selected} className={cn('offer-add-button', featured && 'offer-add-button-featured', selected && 'offer-add-button-selected')}>
    {selected ? <><Check /> V košíku — zobrazit</> : <>{children}<ArrowRight /></>}
  </button>;
}

export function OfferStore({ practicalBooks }: { practicalBooks: PracticalBook[] }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutNote, setCheckoutNote] = useState(false);

  const mainBooks: Product[] = [
    { id: 'financial-restart', name: 'Finanční (Re)Start', description: 'Uspořádá finanční chaos do jasného pořadí kroků • 225 stran', price: 590, image: '/books/financial-restart-hq.jpg', kind: 'ebook' },
    { id: 'investor-dictionary', name: 'Slovník investora', description: 'Pomůže rozumět nabídkám, smlouvám a investičním pojmům • 224 stran', price: 590, image: '/books/investor-dictionary-hq.jpg', kind: 'ebook' },
  ];
  const practicalProducts: Product[] = practicalBooks.map((book, index) => ({ id: `practical-${index + 1}`, name: book.title, description: book.use, price: 199, image: book.image, kind: 'ebook' }));
  const scamIds = scamBooks.map((book) => book.id);
  const practicalIds = practicalProducts.map((book) => book.id);
  const mainIds = mainBooks.map((book) => book.id);
  const total = useMemo(() => cart.reduce((sum, item) => sum + item.price, 0), [cart]);
  const selected = (id: string) => cart.some((item) => item.id === id);
  const allScamSingles = scamIds.every(selected) && !selected(products.shield.id);
  const allPracticalSingles = practicalIds.every(selected) && !selected(products.firstAid.id);
  const allMainSingles = mainIds.every(selected) && !selected(products.map.id);
  const selectedSets = [products.shield.id, products.firstAid.id, products.map.id].filter(selected).length;
  const completeUpgrade = !selected(products.complete.id) && (selectedSets >= 2 || total >= 1000);

  function addProduct(product: Product) {
    setCheckoutNote(false);
    setCart((current) => {
      if (current.some((item) => item.id === product.id)) return current;
      if (product.id === products.complete.id) return [products.complete];
      let next = current.filter((item) => item.id !== products.complete.id);
      if (product.id === products.shield.id) next = next.filter((item) => !scamIds.includes(item.id));
      if (product.id === products.firstAid.id) next = next.filter((item) => !practicalIds.includes(item.id));
      if (product.id === products.map.id) next = next.filter((item) => !mainIds.includes(item.id));
      if (scamIds.includes(product.id)) next = next.filter((item) => item.id !== products.shield.id);
      if (practicalIds.includes(product.id)) next = next.filter((item) => item.id !== products.firstAid.id);
      if (mainIds.includes(product.id)) next = next.filter((item) => item.id !== products.map.id);
      return [...next, product];
    });
    setCartOpen(true);
  }

  function removeProduct(id: string) { setCart((current) => current.filter((item) => item.id !== id)); setCheckoutNote(false); }
  function chooseShield() { setCart((current) => [...current.filter((item) => !scamIds.includes(item.id)), products.shield]); setCheckoutNote(false); }
  function chooseFirstAid() { setCart((current) => [...current.filter((item) => !practicalIds.includes(item.id)), products.firstAid]); setCheckoutNote(false); }
  function chooseMap() { setCart((current) => [...current.filter((item) => !mainIds.includes(item.id)), products.map]); setCheckoutNote(false); }
  function chooseCompleteLibrary() { setCart([products.complete]); setCheckoutNote(false); }

  return <>
    <section id="nabidka" className="bg-white px-5 py-22 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl text-left"><p className="eyebrow">Jedna jasná hlavní volba</p><h2 className="section-title">Celá mapa na jednom místě. Nebo menší sada podle toho, co řešíte dnes.</h2><p className="section-lead">Kompletní knihovna spojuje ochranu před podvody, řešení konkrétních situací i pevné základy. Pokud celý systém nepotřebujete, níže si vyberete menší vstup.</p></div>

        <article className="pricing-card pricing-card-featured pricing-card-complete-lead">
          <span className="pricing-ribbon">Nejúplnější varianta</span>
          <div className="complete-lead-layout">
            <div className="pricing-card-top"><span className="pricing-label">Kompletní knihovna</span><h3>Celý systém Restartuj Peníze</h3><p>Jedna knihovna pro ochranu před podvody, řešení každodenních problémů i pochopení finančních souvislostí.</p><ul>{['poznáte časté podvody a podezřelé nabídky', 'vyřešíte konkrétní problém bez hledání v desítkách zdrojů', 'vytvoříte si vlastní systém pro klidnější rozhodování'].map((item) => <li key={item}><Check />{item}</li>)}</ul></div>
            <div className="complete-product-groups">
              <div className="complete-product-group complete-product-group-map"><span>Finanční mapa + bonus</span><div><img src="/books/financial-restart-hq.jpg" width="1200" height="1818" alt="Finanční (Re)Start" /><img src="/books/investor-dictionary-hq.jpg" width="1200" height="1818" alt="Slovník investora" /><img src="/books/mindset.png" width="240" height="364" alt="Mindset úspěšného investora" /></div></div>
              <div className="complete-product-group complete-product-group-aid"><span>Finanční první pomoc</span><div>{practicalBooks.map((book) => <img key={book.image} src={book.image} width="240" height="364" alt="" />)}</div></div>
              <div className="complete-product-group complete-product-group-shield"><span>Finanční štít</span><div>{scamBooks.map((book) => <img key={book.id} src={book.image} width="2475" height="3750" alt="" />)}</div></div>
            </div>
            <div className="complete-lead-buy"><p>Tři sady samostatně 2 070 Kč</p><strong>1 490 Kč</strong><span>Ušetříte 580 Kč + získáte bonus Mindset</span><small>13 PDF • jednorázová platba • bez předplatného</small><ProductInfoDialog instanceId="sada-komplet" title="Celý systém Restartuj Peníze" eyebrow="Kompletní knihovna" description="Všechna témata jsou pohromadě: ochrana před podvody, praktická pomoc pro aktuální situace a dvě hlavní knihy pro pochopení souvislostí." bestFor="Nechcete řešit jen jeden problém, ale vytvořit si dlouhodobou knihovnu, ke které se můžete vracet." outcome="Získáte mapu základů, kontrolní otázky pro běžná rozhodnutí a rychlé průvodce pro situace, které přijdou nečekaně." includes={['Finanční štít — 4 průvodci proti podvodům', 'Finanční první pomoc — 6 praktických e-booků', 'Finanční mapa — 2 hlavní knihy, celkem 449 stran', 'bonus Mindset úspěšného investora — celkem 13 PDF']} price="1 490 Kč" formatLine="Kompletní digitální knihovna • 13 PDF" coverGroups={[{ label: 'Finanční mapa + bonus', covers: [{ src: '/books/financial-restart-hq.jpg', alt: 'Finanční (Re)Start' }, { src: '/books/investor-dictionary-hq.jpg', alt: 'Slovník investora' }, { src: '/books/mindset.png', alt: 'Mindset úspěšného investora' }] }, { label: 'Finanční první pomoc', covers: practicalBooks.map((book) => ({ src: book.image, alt: book.title })) }, { label: 'Finanční štít', covers: scamBooks.map((book) => ({ src: book.image, alt: book.name })) }]} triggerLabel="Co přesně knihovna obsahuje" triggerClassName="product-info-trigger-on-dark" /><AddButton product={products.complete} selected={selected(products.complete.id)} onAdd={addProduct} featured>Vybrat kompletní knihovnu</AddButton></div>
          </div>
        </article>

        <div className="offer-alternatives-heading"><p className="eyebrow">Menší vstup podle aktuální potřeby</p><h3>Nechcete celou knihovnu? Začněte jednou sadou.</h3></div>

        <div className="pricing-grid">
          <article className="pricing-card pricing-card-shield"><div className="pricing-card-top"><span className="pricing-label"><ShieldAlert /> Ochrana před podvody</span><h3>Finanční štít</h3><p>Čtyři krátké průvodce pro chvíli, kdy potřebujete rychle poznat varovné signály a bezpečně si ověřit další krok.</p></div><div className="pricing-covers pricing-covers-shield">{scamBooks.map((book) => <img key={book.id} src={book.image} width="2475" height="3750" alt="" />)}</div><ul>{['bezpečnější domluva s rodiči a prarodiči', 'ověření profilu, reklamy, videa nebo nabídky', 'jasné signály, kdy neklikat ani neposílat peníze'].map((item) => <li key={item}><Check />{item}</li>)}</ul><div className="pricing-total"><p>Při nákupu zvlášť 396 Kč</p><strong>290 Kč</strong><span>Ušetříte 106 Kč</span></div><ProductInfoDialog instanceId="sada-stit" title="Finanční štít" eyebrow="Sada pro ochranu před podvody" description="Čtyři krátké průvodce vysvětlují konkrétní podvodné scénáře a bezpečný postup pro ověření dřív, než odejdou peníze nebo citlivé údaje." bestFor="Chcete rychle projít nejčastější podvody sami nebo společně s rodiči a prarodiči." outcome="Budete znát typické signály nátlaku, falešné identity a neprůhledné nabídky a budete vědět, kdy komunikaci zastavit." includes={['Podvody na seniorech', 'Podvody na sociálních sítích a deepfake', 'Investiční podvody a Ponziho schémata', 'Phishing, falešné e-maily a weby']} price="290 Kč" formatLine="Zvýhodněná sada • 4 digitální PDF" coverGroups={[{ covers: scamBooks.map((book) => ({ src: book.image, alt: book.name })) }]} triggerLabel="Prohlédnout obsah sady" /><AddButton product={products.shield} selected={selected(products.shield.id)} onAdd={addProduct}>Vybrat Finanční štít</AddButton></article>

          <article className="pricing-card pricing-card-first-aid"><div className="pricing-card-top"><span className="pricing-label"><LifeBuoy /> Konkrétní problémy</span><h3>Finanční první pomoc</h3><p>Šest průvodců pro chvíle, kdy potřebujete vyřešit jeden konkrétní problém a nechcete hledat odpověď v celé knihovně.</p></div><div className="pricing-covers pricing-covers-practical">{practicalBooks.map((book) => <img key={book.image} src={book.image} width="240" height="364" alt="" />)}</div><ul>{['získáte odstup před rozhodnutím pod tlakem', 'srovnáte brokera a zkontrolujete poradce', 'najdete mezery v rozpočtu, poplatcích i příjmu'].map((item) => <li key={item}><Check />{item}</li>)}</ul><div className="pricing-total"><p>Při nákupu zvlášť 1 194 Kč</p><strong>790 Kč</strong><span>Ušetříte 404 Kč</span></div><ProductInfoDialog instanceId="sada-prvni-pomoc" title="Finanční první pomoc" eyebrow="Sada pro konkrétní problémy" description="Šest samostatných průvodců otevřete podle situace, kterou právě řešíte — od rozpočtu a poplatků po výběr brokera nebo rozhovor s poradcem." bestFor="Základy už přibližně znáte, ale potřebujete praktický postup pro jednu konkrétní situaci." outcome="Místo dalšího hledání dostanete otázky, kritéria a postup, podle kterých si problém rozeberete." includes={practicalBooks.map((book) => book.title)} price="790 Kč" formatLine="Zvýhodněná sada • 6 digitálních PDF" coverGroups={[{ covers: practicalBooks.map((book) => ({ src: book.image, alt: book.title })) }]} triggerLabel="Prohlédnout obsah sady" /><AddButton product={products.firstAid} selected={selected(products.firstAid.id)} onAdd={addProduct}>Vybrat praktickou sadu</AddButton></article>

          <article className="pricing-card pricing-card-map"><div className="pricing-card-top"><span className="pricing-label"><BookOpenCheck /> Pevné základy</span><h3>Finanční mapa</h3><p>Dvě hlavní knihy pro člověka, který nechce jen hasit jednotlivé problémy, ale potřebuje pochopit celý systém.</p></div><div className="pricing-covers pricing-covers-main"><img src="/books/financial-restart-hq.jpg" width="1200" height="1818" alt="Finanční (Re)Start" /><img src="/books/investor-dictionary-hq.jpg" width="1200" height="1818" alt="Slovník investora" /></div><ul>{['ujasníte si, co řešit jako první a co může počkat', 'budete rozumět pojmům ve smlouvách a nabídkách', 'získáte systém, ke kterému se můžete vracet'].map((item) => <li key={item}><Check />{item}</li>)}</ul><div className="pricing-total"><p>Při nákupu zvlášť 1 180 Kč</p><strong>990 Kč</strong><span>Ušetříte 190 Kč</span></div><ProductInfoDialog instanceId="sada-mapa" title="Finanční mapa" eyebrow="Dvě hlavní knihy" description="Finanční (Re)Start uspořádá témata do logického pořadí a Slovník investora vám pomůže rozumět pojmům ve smlouvách, článcích a nabídkách." bestFor="Nechcete pouze hasit jednotlivý problém a potřebujete nejdřív pochopit širší souvislosti." outcome="Vytvoříte si přehled o základech a získáte referenci, ke které se můžete vracet při dalších rozhodnutích." includes={['Finanční (Re)Start — 225 stran', 'Slovník investora — 224 stran', 'celkem 449 stran názorně uspořádaného obsahu', 'bonus Mindset úspěšného investora']} price="990 Kč" formatLine="Zvýhodněná sada • 2 hlavní knihy + bonus" coverGroups={[{ covers: [{ src: '/books/financial-restart-hq.jpg', alt: 'Finanční (Re)Start' }, { src: '/books/investor-dictionary-hq.jpg', alt: 'Slovník investora' }, { src: '/books/mindset.png', alt: 'Mindset úspěšného investora' }] }]} samples={[...financialSamples.slice(0, 2), ...dictionarySamples.slice(0, 2)]} triggerLabel="Prohlédnout obsah a ukázky" /><AddButton product={products.map} selected={selected(products.map.id)} onAdd={addProduct}>Vybrat Finanční mapu</AddButton></article>
        </div>

        <div className="pricing-trust"><ShieldCheck /><div><strong>Žádná falešná původní cena.</strong><p>Porovnání vychází pouze ze skutečného součtu samostatných knih a sad. Digitální doručení, bez předplatného a bez následného prodejního hovoru.</p></div></div>

        <details id="jednotlive-ebooky" className="individual-pricing"><summary>Chci koupit pouze jeden e-book <ChevronDown /></summary><div className="individual-pricing-content">
          <div><p className="book-kicker">Finanční štít • 99 Kč za titul</p><div className="individual-grid individual-grid-scam">{scamBooks.map((book) => { const detail = scamDetails[book.id]; return <article key={book.id} className="individual-book individual-book-scam"><img src={book.image} width="2475" height="3750" alt={`Obálka ${book.name}`} /><div><h3>{book.name}</h3><p>{book.description}</p><strong>{money.format(book.price)}</strong><div className="individual-book-actions"><ProductInfoDialog instanceId={`jednotlive-${book.id}`} title={book.name} eyebrow="Finanční štít • samostatný e-book" description={book.description} bestFor={detail.bestFor} outcome={detail.outcome} includes={detail.includes} price="99 Kč" formatLine="Samostatný digitální e-book • PDF" coverGroups={[{ covers: [{ src: book.image, alt: book.name }] }]} triggerLabel="Detail knihy" /><button type="button" aria-pressed={selected(book.id)} onClick={() => addProduct(book)}>{selected(book.id) ? 'V košíku — zobrazit' : 'Přidat do košíku'}</button></div></div></article>; })}</div></div>
          <div><p className="book-kicker">Praktické e-booky • 199 Kč za titul</p><div className="individual-grid">{practicalBooks.map((book, index) => { const product = practicalProducts[index]; return <article key={product.id} className="individual-book"><img src={book.image} width="240" height="364" alt={`Obálka ${book.title}`} /><div><h3>{book.title}</h3><p>{book.use}</p><strong>{money.format(product.price)}</strong><div className="individual-book-actions"><ProductInfoDialog instanceId={`jednotlive-${product.id}`} title={book.title} eyebrow="Praktický e-book" description={book.use} bestFor={book.forWhom} outcome={book.use} includes={book.inside} price="199 Kč" formatLine="Samostatný digitální e-book • PDF" coverGroups={[{ covers: [{ src: book.image, alt: book.title }] }]} triggerLabel="Detail knihy" /><button type="button" aria-pressed={selected(product.id)} onClick={() => addProduct(product)}>{selected(product.id) ? 'V košíku — zobrazit' : 'Přidat do košíku'}</button></div></div></article>; })}</div></div>
          <div><p className="book-kicker">Hlavní knihy • 590 Kč za titul</p><div className="individual-grid individual-grid-main">{mainBooks.map((book) => { const detail = mainDetails[book.id as keyof typeof mainDetails]; return <article key={book.id} className="individual-book"><img src={book.image} width="1200" height="1818" alt={`Obálka ${book.name}`} /><div><h3>{book.name}</h3><p>{book.description}</p><strong>{money.format(book.price)}</strong><div className="individual-book-actions"><ProductInfoDialog instanceId={`jednotlive-${book.id}`} title={book.name} eyebrow="Hlavní kniha" description={book.description} bestFor={detail.bestFor} outcome={detail.outcome} includes={detail.includes as unknown as string[]} price="590 Kč" formatLine={`Hlavní kniha • ${detail.pages} • PDF`} coverGroups={[{ covers: [{ src: book.image, alt: book.name }] }]} samples={detail.samples as unknown as typeof financialSamples} triggerLabel="Detail a ukázky" /><button type="button" aria-pressed={selected(book.id)} onClick={() => addProduct(book)}>{selected(book.id) ? 'V košíku — zobrazit' : 'Přidat do košíku'}</button></div></div></article>; })}</div></div>
        </div></details>

        <div className="mt-7 flex items-center justify-center gap-2 text-xs text-slate-500"><CircleDollarSign className="size-4" /> Košík je funkční náhled. Skutečná bezpečná platba přes Stripe bude připojena v dalším kroku.</div>
      </div>
    </section>

    {cart.length > 0 && <button type="button" className="cart-fab" onClick={() => setCartOpen(true)} aria-label={`Otevřít košík, ${cart.length} položek`}><ShoppingCart /><span>{cart.length}</span><strong>{money.format(total)}</strong></button>}

    <Sheet open={cartOpen} onOpenChange={setCartOpen}><SheetContent side="right" className="w-full max-w-[440px] gap-0 border-l border-slate-200 bg-[#f7faf8] p-0 sm:max-w-[440px]"><SheetHeader className="border-b border-slate-200 bg-white p-6 pr-16"><SheetTitle className="flex items-center gap-3 text-2xl font-extrabold text-brand-navy"><span className="grid size-10 place-items-center rounded-xl bg-brand-navy text-brand-green"><ShoppingCart className="size-5" /></span>Váš výběr</SheetTitle><SheetDescription className="mt-2 leading-6 text-slate-500">Digitální e-booky ve formátu PDF. Jednorázová platba, žádné předplatné.</SheetDescription></SheetHeader>
      <div className="flex-1 overflow-y-auto p-5">
        {cart.length === 0 ? <div className="grid min-h-64 place-items-center text-center"><div><ShoppingCart className="mx-auto size-9 text-slate-300" /><h3 className="mt-4 font-extrabold text-brand-navy">Košík je prázdný</h3><p className="mt-2 text-sm text-slate-500">Vyberte sadu nebo samostatný e-book.</p></div></div> : <div className="space-y-3">{cart.map((item) => <article key={item.id} className="grid grid-cols-[58px_1fr_auto] gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"><img src={item.image} width="120" height="182" alt="" className="h-[76px] w-[52px] rounded-md object-cover shadow" /><div className="min-w-0 self-center"><span className="text-[10px] font-extrabold uppercase tracking-[.12em] text-[#087a46]">{item.kind === 'set' ? 'Sada' : 'E-book'}</span><h3 className="mt-1 text-sm font-extrabold leading-5 text-brand-navy">{item.name}</h3><p className="mt-1 text-xs leading-4 text-slate-500">{item.description}</p><strong className="mt-2 block text-sm text-brand-navy">{money.format(item.price)}</strong></div><button type="button" onClick={() => removeProduct(item.id)} className="grid size-8 place-items-center rounded-lg text-slate-400 transition hover:bg-rose-50 hover:text-rose-600" aria-label={`Odebrat ${item.name}`}><Trash2 className="size-4" /></button></article>)}</div>}
        {allScamSingles && <div className="cart-upgrade cart-upgrade-shield"><p>Výhodnější ochrana</p><h3>Čtyři tituly máte za 396 Kč.</h3><span>Finanční štít stojí 290 Kč. Výměnou ušetříte 106 Kč a obsah zůstane stejný.</span><button type="button" onClick={chooseShield}>Vyměnit za Finanční štít</button></div>}
        {allPracticalSingles && <div className="cart-upgrade"><p>Výhodnější praktická sada</p><h3>Šest titulů máte za 1 194 Kč.</h3><span>Finanční první pomoc stojí 790 Kč. Výměnou ušetříte 404 Kč.</span><button type="button" onClick={chooseFirstAid}>Vyměnit za Finanční první pomoc</button></div>}
        {allMainSingles && <div className="cart-upgrade"><p>Výhodnější hlavní sada</p><h3>Dvě knihy máte za 1 180 Kč.</h3><span>Finanční mapa stojí 990 Kč. Výměnou ušetříte 190 Kč.</span><button type="button" onClick={chooseMap}>Vyměnit za Finanční mapu</button></div>}
        {completeUpgrade && <div className="cart-upgrade"><p>Kompletní možnost</p><h3>Celá knihovna stojí 1 490 Kč.</h3><span>{total > products.complete.price ? `Výměnou ušetříte ${money.format(total - products.complete.price)} a získáte všech 13 PDF.` : `Za dalších ${money.format(products.complete.price - total)} získáte všech 13 PDF včetně bonusu Mindset.`}</span><button type="button" onClick={chooseCompleteLibrary}>Vyměnit za kompletní knihovnu</button></div>}
      </div>
      <div className="border-t border-slate-200 bg-white p-5"><div className="flex items-end justify-between"><span className="text-sm text-slate-500">Celkem</span><strong className="text-3xl font-extrabold tracking-tight text-brand-navy">{money.format(total)}</strong></div><button type="button" disabled={cart.length === 0} onClick={() => setCheckoutNote(true)} className="mt-4 inline-flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-5 text-base font-extrabold text-brand-navy shadow-[0_14px_35px_rgba(24,232,120,.2)] transition hover:bg-[#46f394] disabled:cursor-not-allowed disabled:opacity-40">Pokračovat k bezpečné platbě <ArrowRight className="size-4" /></button>{checkoutNote && <p role="status" className="mt-3 rounded-xl bg-brand-yellow/15 px-4 py-3 text-center text-xs font-semibold leading-5 text-brand-navy">Tady bude navazovat Stripe Checkout. V náhledu zatím nic neplatíte a žádná objednávka se neodesílá.</p>}<p className="mt-3 text-center text-[11px] leading-4 text-slate-400">Obsah košíku je pouze náhled budoucího nákupního procesu.</p></div>
    </SheetContent></Sheet>
  </>;
}
