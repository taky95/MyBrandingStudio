// app/layout.tsx
import '@/styles/global.scss'; 
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Roboto, Sacramento, Libre_Bodoni} from 'next/font/google';

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
  description: "providing support for branding.",
  keywords: ["branding", "design", "consulting"],
  alternates: {
    canonical: "https://mybrandingstudio.ca",
  },
  openGraph: {
    title: "My Branding Studio",
    description: "providing support for branding.",
    url: "https://mybrandingstudio.ca",
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
  manifest: "/manifest.webmanifest",
  other: {
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  themeColor: '#1D6167',
};

export default function RootLayout({ children,}: {children: React.ReactNode}) {

  return (
    <html lang="en" className={`${roboto.variable} ${sacra.variable} ${libre.variable}`}>
      <body>
        <Header />
          <main>
            {children} 
          </main>
        <Footer />
      </body>
    </html>
  );
}