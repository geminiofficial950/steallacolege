import type { Metadata } from "next";
import Providers from "./providers";
import "../styles/index.scss";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google";
import Analytics from "@/components/Analytics";
// import Analytics from "@/components/Analytics";
import { Suspense } from "react";

import { AppProvider } from "@/context/AppContext";
import Toast from "@/components/Toast";
import IssuedModal from "@/components/IssuedModal";
import DownloadModal from "@/components/DownloadModal";
import "@/styles/globals.css";
import App from "next/app";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.stellacollege.edu.au";
const isDev = process.env.NODE_ENV === "development";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stella College - Australia’s leading education provider",
    template: "%s | Stella College",
  },
  description: "Stella College - Australia’s leading education provider",
  icons: "https://www.stellacollege.edu.au/favicon.png",
  keywords: [
    "aged care",
    "childcare",
    "disability",
    "training",
    "education",
    "online courses",
    "Stella College",
    "Australia",
  ],
  openGraph: {
    title: "Stella College - Australia’s leading education provider",
    description: "Stella College - Australia’s leading education provider",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Stella College",
  url: siteUrl,
  logo: `${siteUrl}/23.png`,
  image: `${siteUrl}/og-default.jpg`,
  description:
    "Stella College provides nationally recognised training, short courses, and career-focused education across Australia.",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61583405805847",
    "https://www.instagram.com/stella.college/?igsh=a2lhbjYyNmk2amlo&utm_source=qr#",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "info@stellacollege.com.au",
    availableLanguage: ["English"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sydney, NSW",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" suppressHydrationWarning={isDev}>
      <head>
        {/* ── Font preloads: discovered 789ms late in CSS chain ── */}
        <link
          rel="preload"
          href="/_next/static/media/flaticon_tg_default.db877af3.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/flaticon_skill_grow.a0b5f04d.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/fa-brands-400.7edea186.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.className} ${poppins.className}`}
      >
        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />

            <Script
              id="ga-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                 console.log("GA INIT FIRED");  
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  window.gtag = gtag;

                  gtag('js', new Date());

                  // IMPORTANT: disable auto pageview (we will handle routing manually)
                  gtag('config', '${GA_ID}', {
                    send_page_view: false
                  });
                `,
              }}
            />
          </>
        )}
        {/* GLOBAL JSON-LD ORGANIZATION SCHEMA */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Providers>
          <AppProvider>
            {children}
            <Toast />
            <IssuedModal />
            <DownloadModal />
          </AppProvider>
        </Providers>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
