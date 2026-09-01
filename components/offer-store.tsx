'use client';

import { useMemo, useState, type ReactNode } from 'react';
import { ArrowRight, Check, ChevronDown, CircleDollarSign, ShieldCheck, ShoppingCart, Trash2 } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

type PracticalBook = {
  image: string;
  title: string;
  use: string;
};

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  kind: 'set' | 'ebook';
};

const money = new Intl.NumberFormat('cs-CZ', {
  style: 'currency',
  currency: 'CZK',
  maximumFractionDigits: 0,
});

const products = {
  firstAid: {
    id: 'set-first-aid',
    name: 'Finanční první pomoc',
    description: 'Sada 6 praktických e-booků',
    price: 890,
    image: '/books/emotions.png',
    kind: 'set',
  },
  map: {
    id: 'set-financial-map',
    name: 'Finanční mapa',
    description: 'Sada 2 hlavních knih',
    price: 1090,
    image: '/books/financial-restart-hq.jpg',
    kind: 'set',
  },
  complete: {
    id: 'complete-library',
    name: 'Celý systém Restartuj Peníze',
    description: '9 e-booků včetně bonusu Mindset',
    price: 1490,
    image: '/books/investor-dictionary-hq.jpg',
    kind: 'set',
  },
} satisfies Record<string, Product>;

function AddButton({ product, selected, onAdd, featured = false, children }: { product: Product; selected: boolean; onAdd: (product: Product) => void; featured?: boolean; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={() => onAdd(product)}
      aria-pressed={selected}
      className={cn('offer-add-button', featured && 'offer-add-button-featured', selected && 'offer-add-button-selected')}
    >
      {selected ? <><Check /> V košíku — zobrazit</> : <>{children}<ArrowRight /></>}
    </button>
  );
}

export function OfferStore({ practicalBooks }: { practicalBooks: PracticalBook[] }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutNote, setCheckoutNote] = useState(false);

  const mainBooks: Product[] = [
    { id: 'financial-restart', name: 'Finanční (Re)Start', description: '225 stran • základní mapa osobních financí', price: 690, image: '/books/financial-restart-hq.jpg', kind: 'ebook' },
    { id: 'investor-dictionary', name: 'Slovník investora', description: '224 stran • referenční příručka pojmů', price: 690, image: '/books/investor-dictionary-hq.jpg', kind: 'ebook' },
  ];

  const practicalProducts: Product[] = practicalBooks.map((book, index) => ({
    id: `practical-${index + 1}`,
    name: book.title,
    description: book.use,
    price: 249,
    image: book.image,
    kind: 'ebook',
  }));

  const total = useMemo(() => cart.reduce((sum, item) => sum + item.price, 0), [cart]);
  const selected = (id: string) => cart.some((item) => item.id === id);
  const hasBothSets = selected(products.firstAid.id) && selected(products.map.id);

  function addProduct(product: Product) {
    setCheckoutNote(false);
    setCart((current) => current.some((item) => item.id === product.id) ? current : [...current, product]);
    setCartOpen(true);
  }

  function removeProduct(id: string) {
    setCart((current) => current.filter((item) => item.id !== id));
    setCheckoutNote(false);
  }

  function chooseCompleteLibrary() {
    setCart([products.complete]);
    setCheckoutNote(false);
  }

  return (
    <>
      <section id="nabidka" className="bg-white px-5 py-22 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Vyberte si podle toho, co právě potřebujete</p><h2 className="section-title">Od konkrétní pomoci přes pevné základy až po celý systém.</h2><p className="section-lead">Začněte levnější praktickou sadou, pokračujte hlavními knihami, nebo si vyberte kompletní knihovnu za nejvýhodnější cenu.</p></div>

          <div className="pricing-grid">
            <article className="pricing-card">
              <div className="pricing-card-top"><span className="pricing-label">1 • konkrétní problémy</span><h3>Finanční první pomoc</h3><p>Šest průvodců pro situace, ve kterých lidé nejčastěji ztrácejí peníze, jistotu nebo čas.</p></div>
              <div className="pricing-covers pricing-covers-practical">{practicalBooks.map((book) => <img key={book.image} src={book.image} width="240" height="364" alt="" />)}</div>
              <ul>{['nátlak a emoce při rozhodování', 'broker, rozpočet, příjem a poplatky', 'jak prověřit finančního poradce'].map((item) => <li key={item}><Check />{item}</li>)}</ul>
              <div className="pricing-total"><p>Při nákupu zvlášť 1 494 Kč</p><strong>890 Kč</strong><span>Ušetříte 604 Kč</span></div>
              <AddButton product={products.firstAid} selected={selected(products.firstAid.id)} onAdd={addProduct}>Vybrat praktickou sadu</AddButton>
            </article>

            <article className="pricing-card">
              <div className="pricing-card-top"><span className="pricing-label">2 • pevné základy</span><h3>Finanční mapa</h3><p>Obě hlavní knihy pro pochopení celku, základních pojmů a investičního jazyka.</p></div>
              <div className="pricing-covers pricing-covers-main"><img src="/books/financial-restart-hq.jpg" width="1200" height="1818" alt="Finanční (Re)Start" /><img src="/books/investor-dictionary-hq.jpg" width="1200" height="1818" alt="Slovník investora" /></div>
              <ul>{['Finanční (Re)Start • 225 stran', 'Slovník investora • 224 stran', '449 stran uspořádaného základu'].map((item) => <li key={item}><Check />{item}</li>)}</ul>
              <div className="pricing-total"><p>Při nákupu zvlášť 1 380 Kč</p><strong>1 090 Kč</strong><span>Ušetříte 290 Kč</span></div>
              <AddButton product={products.map} selected={selected(products.map.id)} onAdd={addProduct}>Vybrat Finanční mapu</AddButton>
            </article>

            <article className="pricing-card pricing-card-featured">
              <span className="pricing-ribbon">Nejlepší poměr obsahu a ceny</span>
              <div className="pricing-card-top"><span className="pricing-label">3 • kompletní knihovna</span><h3>Celý systém Restartuj Peníze</h3><p>Obě sady pohromadě a navíc bonus Mindset pro klidnější rozhodování bez FOMO.</p></div>
              <div className="pricing-covers pricing-covers-complete"><div className="complete-main-covers"><img src="/books/financial-restart-hq.jpg" width="1200" height="1818" alt="Finanční (Re)Start" /><img src="/books/investor-dictionary-hq.jpg" width="1200" height="1818" alt="Slovník investora" /><img src="/books/mindset.png" width="240" height="364" alt="Mindset úspěšného investora" /></div><div className="complete-practical-covers" aria-label="Šest praktických e-booků">{practicalBooks.map((book) => <img key={book.image} src={book.image} width="240" height="364" alt="" />)}</div></div>
              <ul>{['2 hlavní knihy a 6 praktických e-booků', 'Mindset úspěšného investora jako bonus', '9 PDF • jednorázová platba'].map((item) => <li key={item}><Check />{item}</li>)}</ul>
              <div className="pricing-total"><p>Obě sady samostatně 1 980 Kč</p><strong>1 490 Kč</strong><span>Ušetříte 490 Kč + získáte bonus</span></div>
              <AddButton product={products.complete} selected={selected(products.complete.id)} onAdd={addProduct} featured>Vybrat kompletní knihovnu</AddButton>
            </article>
          </div>

          <div className="pricing-trust"><ShieldCheck /><div><strong>Žádná falešná původní cena.</strong><p>Porovnání vychází pouze ze skutečného součtu samostatných knih a sad. Digitální doručení, bez předplatného a bez následného prodejního hovoru.</p></div></div>

          <details id="jednotlive-ebooky" className="individual-pricing">
            <summary>Chci koupit pouze jeden e-book <ChevronDown /></summary>
            <div className="individual-pricing-content">
              <div><p className="book-kicker">Hlavní knihy • 690 Kč za titul</p><div className="individual-grid individual-grid-main">{mainBooks.map((book) => <article key={book.id} className="individual-book"><img src={book.image} width="1200" height="1818" alt={`Obálka ${book.name}`} /><div><h3>{book.name}</h3><p>{book.description}</p><strong>{money.format(book.price)}</strong><button type="button" aria-pressed={selected(book.id)} onClick={() => addProduct(book)}>{selected(book.id) ? 'V košíku — zobrazit' : 'Přidat do košíku'}</button></div></article>)}</div></div>
              <div><p className="book-kicker">Praktické e-booky • 249 Kč za titul</p><div className="individual-grid">{practicalProducts.map((book) => <article key={book.id} className="individual-book"><img src={book.image} width="240" height="364" alt={`Obálka ${book.name}`} /><div><h3>{book.name}</h3><p>{book.description}</p><strong>{money.format(book.price)}</strong><button type="button" aria-pressed={selected(book.id)} onClick={() => addProduct(book)}>{selected(book.id) ? 'V košíku — zobrazit' : 'Přidat do košíku'}</button></div></article>)}</div></div>
            </div>
          </details>

          <div className="mt-7 flex items-center justify-center gap-2 text-xs text-slate-500"><CircleDollarSign className="size-4" /> Košík je funkční náhled. Skutečná bezpečná platba přes Stripe bude připojena v dalším kroku.</div>
        </div>
      </section>

      {cart.length > 0 && <button type="button" className="cart-fab" onClick={() => setCartOpen(true)} aria-label={`Otevřít košík, ${cart.length} položek`}><ShoppingCart /><span>{cart.length}</span><strong>{money.format(total)}</strong></button>}

      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        <SheetContent side="right" className="w-full max-w-[440px] gap-0 border-l border-slate-200 bg-[#f7faf8] p-0 sm:max-w-[440px]">
          <SheetHeader className="border-b border-slate-200 bg-white p-6 pr-16">
            <SheetTitle className="flex items-center gap-3 text-2xl font-extrabold text-brand-navy"><span className="grid size-10 place-items-center rounded-xl bg-brand-navy text-brand-green"><ShoppingCart className="size-5" /></span>Váš výběr</SheetTitle>
            <SheetDescription className="mt-2 leading-6 text-slate-500">Digitální e-booky ve formátu PDF. Jednorázová platba, žádné předplatné.</SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto p-5">
            {cart.length === 0 ? <div className="grid min-h-64 place-items-center text-center"><div><ShoppingCart className="mx-auto size-9 text-slate-300" /><h3 className="mt-4 font-extrabold text-brand-navy">Košík je prázdný</h3><p className="mt-2 text-sm text-slate-500">Vyberte sadu nebo samostatný e-book.</p></div></div> : <div className="space-y-3">{cart.map((item) => <article key={item.id} className="grid grid-cols-[58px_1fr_auto] gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"><img src={item.image} width="120" height="182" alt="" className="h-[76px] w-[52px] rounded-md object-cover shadow" /><div className="min-w-0 self-center"><span className="text-[10px] font-extrabold uppercase tracking-[.12em] text-[#087a46]">{item.kind === 'set' ? 'Sada' : 'E-book'}</span><h3 className="mt-1 text-sm font-extrabold leading-5 text-brand-navy">{item.name}</h3><p className="mt-1 text-xs leading-4 text-slate-500">{item.description}</p><strong className="mt-2 block text-sm text-brand-navy">{money.format(item.price)}</strong></div><button type="button" onClick={() => removeProduct(item.id)} className="grid size-8 place-items-center rounded-lg text-slate-400 transition hover:bg-rose-50 hover:text-rose-600" aria-label={`Odebrat ${item.name}`}><Trash2 className="size-4" /></button></article>)}</div>}

            {hasBothSets && <div className="mt-4 rounded-2xl border border-brand-green/35 bg-[#edfff5] p-4"><p className="text-xs font-extrabold uppercase tracking-[.12em] text-[#087a46]">Výhodnější možnost</p><h3 className="mt-1 font-extrabold text-brand-navy">Obě sady máte za 1 980 Kč.</h3><p className="mt-1 text-sm leading-6 text-slate-600">Kompletní knihovna stojí 1 490 Kč, obsahuje navíc bonus Mindset a ušetří vám 490 Kč.</p><button type="button" onClick={chooseCompleteLibrary} className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-xl bg-brand-navy px-4 text-sm font-extrabold text-white">Vyměnit za kompletní knihovnu</button></div>}
          </div>

          <div className="border-t border-slate-200 bg-white p-5">
            <div className="flex items-end justify-between"><span className="text-sm text-slate-500">Celkem</span><strong className="text-3xl font-extrabold tracking-tight text-brand-navy">{money.format(total)}</strong></div>
            <button type="button" disabled={cart.length === 0} onClick={() => setCheckoutNote(true)} className="mt-4 inline-flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-5 text-base font-extrabold text-brand-navy shadow-[0_14px_35px_rgba(24,232,120,.2)] transition hover:bg-[#46f394] disabled:cursor-not-allowed disabled:opacity-40">Pokračovat k bezpečné platbě <ArrowRight className="size-4" /></button>
            {checkoutNote && <p role="status" className="mt-3 rounded-xl bg-brand-yellow/15 px-4 py-3 text-center text-xs font-semibold leading-5 text-brand-navy">Tady bude navazovat Stripe Checkout. V náhledu zatím nic neplatíte a žádná objednávka se neodesílá.</p>}
            <p className="mt-3 text-center text-[11px] leading-4 text-slate-400">Obsah košíku je pouze náhled budoucího nákupního procesu.</p>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
