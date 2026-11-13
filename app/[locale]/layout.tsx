import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "../../i18n/routing";
import { Nav } from "../component/nav";
import { Footer } from "../component/footer";
import { IntroLoader } from "../component/intro-loader";
import { SmoothScroll } from "../component/smooth-scroll";
import "../globals.css";         

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
// Display face: same geometric sans, set light and tight (see .font-serif in globals.css)
const instrument = Geist({ variable: "--font-instrument", subsets: ["latin"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { languages: { en: "/en", fr: "/fr" } },
    openGraph: { title: t("title"), description: t("description"), images: ["/image.jpg"] },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}>
      <body className="min-h-screen font-sans text-paper">
        <NextIntlClientProvider>
          <IntroLoader />
          <SmoothScroll />
          <div className="grain" aria-hidden />
          <Nav />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
