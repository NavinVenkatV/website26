'use client';

import { useRouter, usePathname } from '../../i18n/routing';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="cursor-pointer">
      <select
        value={locale}
        onChange={(e) => switchLocale(e.target.value)}
        className="text-white outline-none"
      >
        <option value="en">🇺🇸 EN</option>
        <option value="fr">🇫🇷 FR</option>
      </select>
    </div>
  );
}
