// app/layout.tsx
import '@/styles/global.scss'; 
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Roboto, Sacramento, Libre_Bodoni} from 'next/font/google';

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";
import AnalyticsProvider from '@/components/AnalyticsProvider';

const roboto = Roboto({
  subsets: ['latin'],          // Required
  display: 'swap',             // Optional: improves rendering
  weight: ['200', '300', '400', '700'],      // Optional: include specific weights
  variable: '--font-roboto',    // Optional: for use in CSS
});

const sacra  = Sacramento({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sacra',
  weight: '400'
});

const libre = Libre_Bodoni({
  subsets: ['latin'],          
  display: 'swap',             
  weight: ['400', '700'],      
  variable: '--font-libre',    
});

export const metadata = {
  title: "My Branding Studio",
  description: "Branding & Marketing Strategist",
  keywords: ["branding", "design", "consulting"],
  alternates: {
    canonical: "https://mybrandingstudio.ca",
  },
  openGraph: {
    title: "My Branding Studio",
    description: "Branding & Marketing Strategist",
    url: "https://mybrandingstudio.ca",
    siteName: "My Branding Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mybrandingstudio.ca/logo.png",
        width: 1200,
        height: 630,
        alt: "My Branding Studio | Branding & Marketing Strategist",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
  metadataBase: new URL("https://mybrandingstudio.ca"),
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  themeColor: '#070808',
};

const schema = [{
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "My Branding Studio",
  url: "https://mybrandingstudio.ca",
  logo: "https://mybrandingstudio.ca/logo.png",
  sameAs: [
    "https://www.instagram.com/mypersonalbrandingstudio/",
    "https://www.linkedin.com/in/marina-yayla/",
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "marinayaylabranding@gmail.com"
  }
},
{
    "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "My Branding Studio",
  "url": "https://mybrandingstudio.ca"
}
];

export default function RootLayout({ children,}: {children: React.ReactNode}) {

  return (
    <html lang="en" className={`${roboto.variable} ${sacra.variable} ${libre.variable}`}>
      <body>
        <Header />
          <main>
            {children} 
          </main>

          {/* Schema markup */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        <Footer />
        <Analytics />
        <SpeedInsights />
                <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <AnalyticsProvider />
      </body>
    </html>
  );
}