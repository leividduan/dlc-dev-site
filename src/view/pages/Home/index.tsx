import { Link } from 'react-router-dom';

export function Home() {
  return (
    <section className="bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col items-center gap-2">
        <span className="mb-14 font-bold text-5xl md:text-6xl md:px-15 xl:px-30 text-white tracking-tight">
          Entusiasta, comunicativo e apaixonado por projetos de sucesso.
        </span>
        <p className="text-gray-500 md:px-20 xl:px-48">
          🌟 Olá! Sou parte da equipe de tecnologia na <a className='text-gray-50 hover:text-gray-400' href='https://weduka.com.br' target='__blank'>Weduka</a>, onde me dedico a criar soluções de software incríveis. Adoro transformar ideias em realidade, seja em desenvolvimentos de projetos ou resolvendo problemas complexos. <br/>

          🚀 Tenho experiência em várias tecnologias, como .NET, JS, TS, Python, Node, SQL, e estou sempre pronto para aprender mais e compartilhar o que sei.
        </p>
        <Link to="/contact" className="p-4 bg-white rounded-lg text-black mt-10">
          Entrar em contato
        </Link>
      </div>
    </section>
  );
}
