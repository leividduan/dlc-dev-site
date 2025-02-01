import img from '@/app/images/email.svg';
import { useTranslations } from 'next-intl';
import Image from "next/image";

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">{t('title')}</h2>
        <p className="mb-8 lg:mb-16 font-light text-center sm:text-md">{t('description')} <a href='mailto:deivid.cardos@gmail.com'  className='text-foreground font-medium underline underline-offset-2'>deivid.cardos@gmail.com</a>.</p>
      </div>
      <Image src={img} alt='Send e-mail' width={600} />
    </section>
  );
}
