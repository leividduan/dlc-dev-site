export function Home() {
  return (
    <section className="bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col items-center gap-2">
        <div className="w-40 h-40 rounded-full bg-gray-100"></div>
        <h1 className="text-xl tracking-tight leading-none md:text-2xl lg:text-2xl text-white">
          Olá, meu nome é Deivid
        </h1>
        <small className="text-sx md:text-sm tracking-tighter text-gray-500 mb-4">
          Desenvolvedor Full Stack Sênior
        </small>
        <p className="mb-8 font-bold text-5xl md:text-6xl xl:px-48 text-white tracking-tight">
          Curioso, comunicativo e apaixonado por projetos de sucesso.
        </p>
      </div>
    </section>
  );
}
