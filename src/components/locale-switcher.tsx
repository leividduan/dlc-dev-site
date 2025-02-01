import { useLocale } from 'next-intl';
import LocaleSwitcherSelect from './locale-switcher-select';

export default function LocaleSwitcher({ className }: { className?: string  }) {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} className={className} />
  );
}
