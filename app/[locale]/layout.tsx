import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "../../i18n/routing";
import { Nav } from "../component/nav";
import { Footer } from "../component/footer";
import { IntroLoader } from "../component/intro-loader";
import { SmoothScroll } from "../component/smooth-scroll";
import "../globals.css";         

const geist = Manrope({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = JetBrains_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrument = Fraunces({
  variable: "--font-instrument",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
});

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
      <body className="min-h-screen bg-ink font-sans text-paper">
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
