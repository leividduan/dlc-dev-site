import { Link } from 'react-router-dom';

export function Home() {
  return (
    <section className="bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col items-center gap-2">
        <span className="mb-14 font-bold text-5xl md:text-6xl md:px-15 xl:px-30 text-white tracking-tight">
          Entusiasta, comunicativo e apaixonado por projetos de sucesso.
        </span>
        <p className="text-gray-500 md:px-20 xl:px-48">
          Desenvolvedor Full Stack com experiência sólida em .NET e JavaScript, estou constantemente buscando novos conhecimentos e desafios para criar soluções inovadoras que impulsionem o sucesso de projetos. Além disso, tenho a habilidade de transferência de conhecimento.
        </p>
        <Link to="/contact" className="p-4 bg-white rounded-lg text-black mt-10">
          Entrar em contato
        </Link>
      </div>
    </section>
  );
}
