import Image from "next/image";

const drops = [
  { name: "Jaqueta Ledge", price: "R$ 289", tag: "recorte urbano", color: "bg-acid" },
  { name: "Cargo Guia", price: "R$ 249", tag: "bolso de sessao", color: "bg-cobalt text-paper" },
  { name: "Tee Griptape", price: "R$ 129", tag: "print de asfalto", color: "bg-riot text-paper" }
];

const principles = ["Feito pra rua", "Corte amplo", "Cor em choque", "Drop limitado"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <nav className="sticky top-0 z-50 border-b-4 border-ink bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a className="font-display text-3xl tracking-tight" href="#">
            QUINA
          </a>
          <div className="hidden items-center gap-2 font-bold uppercase md:flex">
            <a className="border-2 border-ink bg-acid px-3 py-1 shadow-brutal-sm transition hover:-translate-y-1" href="#drop">
              Drop
            </a>
            <a className="border-2 border-ink bg-paper px-3 py-1 shadow-brutal-sm transition hover:-translate-y-1" href="#manifesto">
              Manifesto
            </a>
          </div>
          <a className="border-4 border-ink bg-riot px-4 py-2 font-display text-sm uppercase text-paper shadow-brutal-sm transition hover:-translate-y-1 hover:shadow-brutal" href="#comprar">
            Comprar agora
          </a>
        </div>
      </nav>

      <section className="relative border-b-4 border-ink bg-paper">
        <div className="absolute left-4 top-8 z-10 hidden rotate-[-8deg] border-4 border-ink bg-mint px-4 py-2 font-display text-lg shadow-brutal-sm animate-wobble lg:block">
          novo drop
        </div>
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:py-16">
          <div className="relative z-10 flex flex-col justify-center">
            <p className="mb-4 max-w-full rotate-[-2deg] border-4 border-ink bg-cobalt px-4 py-2 font-display text-sm uppercase text-paper shadow-brutal-sm sm:w-max sm:text-base">
              roupa para entrar fazendo barulho
            </p>
            <h1 className="font-display text-[clamp(3.45rem,13vw,10.5rem)] uppercase leading-[.78] tracking-tight">
              Rua no <span className="text-stroke block">corte</span>
            </h1>
            <p className="mt-6 max-w-xl border-l-8 border-ink bg-paper py-2 pl-4 text-xl font-black uppercase leading-tight sm:text-2xl">
              Streetwear de pista, guia e calcada: corte amplo, cor em conflito e roupa pronta para a sessao.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="group brutal-border bg-acid px-6 py-4 text-center font-display text-xl uppercase shadow-brutal transition hover:-translate-y-2 hover:shadow-brutal-blue" href="#comprar">
                <span className="inline-flex items-center justify-center gap-3">
                  Ver o drop
                  <svg
                    aria-hidden="true"
                    className="h-6 w-10 transition-transform duration-300 group-hover:translate-x-2"
                    fill="none"
                    viewBox="0 0 44 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 12H38" stroke="currentColor" strokeLinecap="square" strokeWidth="5" />
                    <path d="M28 4L39 12L28 20" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="5" />
                  </svg>
                </span>
              </a>
              <a className="brutal-border bg-paper px-6 py-4 text-center font-display text-xl uppercase shadow-brutal transition hover:-translate-y-2 hover:shadow-brutal-red" href="#manifesto">
                Manifesto
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-3 rotate-2 bg-riot brutal-border shadow-brutal-blue" />
            <div className="noise relative overflow-hidden brutal-border bg-ink shadow-brutal">
              <Image
                src="/images/hero-fashion.png"
                alt="Modelos usando roupas streetwear em cenario neobrutalista"
                width={1792}
                height={1024}
                priority
                className="min-h-[420px] w-full object-cover object-center lg:min-h-[640px]"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>
            <div className="absolute bottom-8 left-[-10px] rotate-[-5deg] brutal-border bg-paper px-5 py-3 font-display text-2xl uppercase shadow-brutal animate-floaty">
              drop de rua
            </div>
          </div>
        </div>
      </section>

      <div className="border-y-4 border-ink bg-ink py-3 text-paper">
        <div className="flex w-[200%] animate-marquee gap-8 whitespace-nowrap font-display text-2xl uppercase">
          {[...principles, ...principles, ...principles, ...principles].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-8">
              {item}
              <span className="text-acid">///</span>
            </span>
          ))}
        </div>
      </div>

      <section id="drop" className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_.9fr]">
        <div className="relative order-2 lg:order-1" data-reveal="left">
          <div className="absolute -left-2 -top-2 h-full w-full rotate-[-2deg] bg-acid brutal-border" />
          <div className="relative overflow-hidden brutal-border bg-paper shadow-brutal">
            <Image
              src="/images/product-flatlay.png"
              alt="Composicao de roupas streetwear para vitrine"
              width={1200}
              height={1200}
              className="aspect-square h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div id="comprar" className="order-1 flex flex-col justify-center lg:order-2" data-reveal="right">
          <p className="mb-3 max-w-full rotate-2 brutal-border bg-blush px-3 py-1 font-display uppercase shadow-brutal-sm sm:w-max">
            drop 01
          </p>
          <h2 className="font-display text-5xl uppercase leading-none sm:text-7xl">
            Pecas para cair de pe, gastar sola e voltar.
          </h2>
          <p className="mt-5 max-w-xl text-lg font-bold">
            Poucas unidades, modelagem solta e uma paleta que nao conversa baixo. Feito para quem transforma quina, pista e avenida em territorio.
          </p>
          <div className="mt-8 grid gap-4">
            {drops.map((item, index) => (
              <article
                className={`group brutal-border ${item.color} p-4 shadow-brutal transition duration-300 hover:-translate-x-2 hover:-translate-y-2`}
                data-reveal="stack"
                data-reveal-delay={String(index + 1)}
                key={item.name}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl uppercase">{item.name}</h3>
                    <p className="font-black uppercase">{item.tag}</p>
                  </div>
                  <p className="rotate-3 border-4 border-ink bg-paper px-3 py-2 font-display text-2xl text-ink shadow-brutal-sm transition group-hover:rotate-[-3deg]">
                    {item.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="manifesto" className="border-y-4 border-ink bg-cobalt text-paper">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-3">
          <div className="brutal-border bg-paper p-6 text-ink shadow-brutal" data-reveal="stack">
            <p className="font-display text-6xl">01</p>
            <h3 className="mt-4 font-display text-3xl uppercase">Volume</h3>
            <p className="mt-2 font-bold">Silhueta larga para movimento real. Espaco para ollie, giro, pedalada e caminho.</p>
          </div>
          <div className="brutal-border bg-acid p-6 text-ink shadow-brutal" data-reveal="stack" data-reveal-delay="1">
            <p className="font-display text-6xl">02</p>
            <h3 className="mt-4 font-display text-3xl uppercase">Contraste</h3>
            <p className="mt-2 font-bold">Cores chapadas, bordas duras, prints com cara de adesivo colado no shape.</p>
          </div>
          <div className="brutal-border bg-riot p-6 text-paper shadow-brutal" data-reveal="stack" data-reveal-delay="2">
            <p className="font-display text-6xl">03</p>
            <h3 className="mt-4 font-display text-3xl uppercase">Atitude</h3>
            <p className="mt-2 font-bold">Roupa para virar sinal: na pista, na foto, no role e na memoria.</p>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6">
        <div className="halftone absolute inset-x-0 top-0 h-24 border-b-4 border-ink bg-acid" />
        <div className="relative mx-auto max-w-5xl brutal-border bg-paper p-6 text-center shadow-brutal sm:p-10" data-reveal="rise">
          <p className="mx-auto mb-4 max-w-full rotate-[-2deg] brutal-border bg-ink px-4 py-2 font-display text-sm uppercase text-paper shadow-brutal-sm sm:w-max sm:text-base">
            pronto para sair do papel?
          </p>
          <h2 className="font-display text-5xl uppercase leading-none sm:text-8xl">
            O drop abre hoje.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-xl font-black uppercase">
            Entre na lista e receba acesso primeiro. Sem spam. So drop novo, cupom relampago e estoque baixo.
          </p>
          <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <input
              aria-label="Seu e-mail"
              className="min-h-14 flex-1 brutal-border bg-paper px-4 font-black uppercase outline-none placeholder:text-ink/55 focus:bg-acid"
              placeholder="seu@email.com"
              type="email"
            />
            <button className="min-h-14 brutal-border bg-riot px-6 font-display uppercase text-paper shadow-brutal-sm transition hover:-translate-y-1 hover:shadow-brutal" type="submit">
              Quero acesso
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t-4 border-ink bg-ink px-4 py-8 text-paper sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 font-black uppercase sm:flex-row">
          <p>QUINA streetwear para pista, guia e asfalto.</p>
          <p>Instagram / TikTok / Newsletter</p>
        </div>
      </footer>
    </main>
  );
}
