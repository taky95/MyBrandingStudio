// app/layout.tsx
import '@/styles/global.scss'; 
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Roboto, Sacramento, Libre_Bodoni} from 'next/font/google';
import Head from 'next/head';

const roboto = Roboto({
  subsets: ['latin'],          // Required
  display: 'swap',             // Optional: improves rendering
  weight: ['200', '400', '700'],      // Optional: include specific weights
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
  description: "providing support for branding.",
  keywords: ["branding", "design", "consulting"],
  alternates: {
    canonical: "https://mybrandingstudio.ca",
  },
  openGraph: {
    title: "My Branding Studio",
    description: "providing support for branding.",
    url: "https://mybrandingstudio.c",
    siteName: "My Branding Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alt text for image",
      },
    ],
  },
};

export default function RootLayout({ children,}: {children: React.ReactNode}) {

  return (
    <html lang="en" className={`${roboto.variable} ${sacra.variable} ${libre.variable}`}>
      <body>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
          <meta name="theme-color" content="#1D6167" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

          {/*eslint-disable-next-line @next/next/no-css-tags*/}
          <link rel="stylesheet" href="/wp-styles/style.min.css" />
          {/*eslint-disable-next-line @next/next/no-css-tags*/}
          <link rel="stylesheet" href="/wp-styles/theme.min.css" />
          
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>

          <link rel="manifest" href="/manifest.webmanifest" crossOrigin="anonymous"/>
        </Head>
        <Header />
          <main>
            {children} 
          </main>
        <Footer />
      </body>
    </html>
  );
}