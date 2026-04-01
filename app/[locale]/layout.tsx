import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Space_Grotesk } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '../../i18n/routing';
import { Theader } from "../component/tHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],      // specify subset
  weight: ['400', '500', '700'],  // optional weights you need
  display: 'swap',         // optional, recommended for performance
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Navin Venkat's Portfolio",
  description: "Full Stack Developer | AI/ML Enthusiast | Web3 Explorer",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${spaceGrotesk.className}`}
      >
        <NextIntlClientProvider messages={messages}>
          {/* <LanguageSwitcher /> */}
          <Theader/>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
