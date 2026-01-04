import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "./providers";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";
import CookieBanner from "./_components/CookieBanner";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    default: "Charlie M House - Boutique Hotel in Berlin Mitte | Smart Stay",
    template: "%s | Charlie M House Berlin"
  },
  description: "Experience a seamless, fully automated stay at Charlie M House, a boutique hotel in the heart of Berlin. Located on Friedrichstraße, steps away from Checkpoint Charlie. Modern design meets central convenience.",
  keywords: ["boutique hotel Berlin", "hotel Berlin Mitte", "smart hotel Berlin", "central Berlin accommodation", "stay near Checkpoint Charlie", "Charlie M House Berlin"],
  authors: [{ name: "Charlie M House" }],
  creator: "Charlie M House",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://charliemhouse.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_DE',
    url: 'https://charliemhouse.com',
    siteName: 'Charlie M House Berlin',
    title: 'Charlie M House - Boutique Hotel in Berlin Mitte',
    description: 'Fully automated boutique hotel in Central Berlin. Your perfect base for exploring Mitte and Kreuzberg.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Charlie M House - Boutique Hotel in Berlin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charlie M House Berlin',
    description: 'Smart boutique hotel in the heart of Berlin Mitte.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const plusJakartaSans = Plus_Jakarta_Sans({ 
  variable: "--font-plus-jakarta-sans", 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"]
});


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Hotel Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              "name": "Charlie M House Berlin",
              "description": "Boutique hotel in the heart of Berlin Mitte with fully automated check-in.",
              "url": "https://charliemhouse.com",
              "telephone": "+49-XX-XXXX-XXXX",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Friedrichstraße 33",
                "addressLocality": "Berlin",
                "postalCode": "10969",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "52.5015",
                "longitude": "13.3908"
              },
              "starRating": {
                "@type": "Rating",
                "ratingValue": "4"
              },
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Digital Check-in", "value": true }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${plusJakartaSans.variable} antialiased bg-light-bg flex flex-col min-h-screen relative`}>
        <ReactQueryProvider>
          <div className='z-11'>
            <Header/>
          </div>
          <main className="flex-1 relative z-10">{children}</main>
          <Footer/>
          <CookieBanner />
          <Toaster position="top-left" richColors/>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
