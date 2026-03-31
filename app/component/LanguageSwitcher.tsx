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
    <div className="fixed top-4 right-4 z-50">
      <select
        value={locale}
        onChange={(e) => switchLocale(e.target.value)}
        className="bg-gray-800 text-white rounded px-2 py-1 border border-gray-600 outline-none"
      >
        <option value="en">🇺🇸 EN</option>
        <option value="fr">🇫🇷 FR</option>
      </select>
    </div>
  );
}
