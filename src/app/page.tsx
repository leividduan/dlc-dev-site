
export default function Home() {
  return (
    <section className="h-full flex items-center justify-center">
      <div className="mx-auto max-w-screen-xl text-center flex flex-col items-center gap-2">
        <span className="mb-14 font-bold text-5xl md:text-7xl tracking-tight">
          Entusiasta, comunicativo e apaixonado por projetos de sucesso.
        </span>
        <p className="md:px-20 xl:px-48 text-md md:text-xl text-foreground/80">
          <span className="text-foreground">🌟</span> Olá! Sou parte da equipe de tecnologia na <a className='text-foreground font-medium underline underline-offset-2' href='https://weduka.com.br' target='__blank'>Weduka</a>, onde me dedico a criar soluções de software incríveis. Adoro transformar ideias em realidade, seja em desenvolvimentos de projetos ou resolvendo problemas complexos. <br/>
          <span className="text-foreground">🚀</span> Tenho experiência em várias tecnologias, como .NET, JS, TS, Python, Node, SQL, e estou sempre pronto para aprender mais e compartilhar o que sei.
        </p>
      </div>
    </section>
  );
}
