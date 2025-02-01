'use client';

import { routing, usePathname, useRouter } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

type Props = {
  className?: string;
  defaultValue: string;
};

export default function LocaleSwitcherSelect({
  className,
  defaultValue,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const t = useTranslations('LocaleSwitcher');

  function onSelectChange(locale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: locale}
      );
    });
  }

  return (
    <>
      <Select
        defaultValue={defaultValue}
        disabled={isPending}
        onValueChange={onSelectChange}
      >
        <SelectTrigger className={cn("w-[180px]", className)}>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
        {routing.locales.map((cur) => (
          <SelectItem key={cur} value={cur}>
            {t('locale', {locale: cur})}
          </SelectItem>
        ))}
        </SelectContent>
      </Select>
    </>
  );
}
