// app/layout.tsx
import Head from 'next/head';
import '../styles/globals.scss'; 
import { GetPageName } from '@/components/Utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Roboto, Lavishly_Yours, Libre_Bodoni} from 'next/font/google';
import { useRouter } from 'next/router';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const path = GetPageName();
  const siteName = "My Branding Site";
  const title = `${siteName}|${path}`;
  const canonicalUrl = `https://www.kyoto-amidaji.com${router.asPath}`;
  const description = "providing support for branding.";

  const roboto = Roboto({
    subsets: ['latin'],          // Required
    display: 'swap',             // Optional: improves rendering
    weight: ['400', '700'],      // Optional: include specific weights
    variable: '--font-roboto',    // Optional: for use in CSS
  });

  const lavish = Lavishly_Yours({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-lavish',
    weight: '400'
  });

  const libre = Libre_Bodoni({
    subsets: ['latin'],          
    display: 'swap',             
    weight: ['400', '700'],      
    variable: '--font-libre',    
  });
  return (
    <html lang="en" className={`${roboto.variable} ${lavish.variable} ${libre.variable}`}>
      <body>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta httpEquiv="content-type" content="text/html" charSet="UTF-8" />
          <meta httpEquiv="content-language" content="en" />
          <meta name="theme-color" content="#1D6167" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

          <link rel="canonical" href={canonicalUrl} />
          
          {/* OGP setting */}
          <meta property="og:title" content={title}/>
          <meta property="og:type" content="website" />
          <meta property="og:description" content={description}/>
          <meta property="og:site_name" content={siteName} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:image" content="/logo.png" />
          <meta property="og:image:width" content='1200' />
          <meta property="og:image:height" content="675" />
          <meta name="twitter:card" content="summary" />
          
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
};

export default Layout;