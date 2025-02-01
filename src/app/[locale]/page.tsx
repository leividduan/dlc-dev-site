import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <section className="h-full flex items-center justify-center">
      <div className="mx-auto max-w-screen-xl text-center flex flex-col items-center gap-2">
        <span className="mb-14 font-bold text-5xl md:text-7xl tracking-tight">
          {t('title')}
        </span>
        <p className="md:px-20 xl:px-48 text-md md:text-xl text-foreground/80">
          <span className="text-foreground">🌟</span> {t('description_1')} <a className='text-foreground font-medium underline underline-offset-2' href='https://weduka.com.br' target='__blank'>Weduka</a>, {t('description_2')} <br/>
          <span className="text-foreground">🚀</span> {t('experiences')}
        </p>
      </div>
    </section>
  );
}
