import type { Metadata } from 'next'
import type React from "react"
import "@/app/globals.css"
import { Cinzel, EB_Garamond, Raleway, Dancing_Script, Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700", "900"],
})

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400", "500", "600", "700", "800"],
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-raleway",
})

const dancing = Dancing_Script({ 
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-dancing' 
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant'
})

export const metadata: Metadata = {
  title: "Aravē Spa | Luxury Wellness & Beauty",
  description: "Experience luxury spa treatments and premium beauty products for your wellbeing at Aravē Spa",
  openGraph: {
    title: "Aravē Spa | Wellness & Beauty",
    description: "Experience luxury spa treatments and premium beauty products for your wellbeing at Aravē Spa",
    url: "https://arav-spa.vercel.app",
    siteName: "Aravē Spa",
    images: [
      {
        url: "https://arav-spa.vercel.app/images/spa.png",
        width: 1200,
        height: 630,
        alt: "Aravē Spa Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aravē Spa | Luxury Wellness & Beauty",
    description: "Experience luxury spa treatments and premium beauty products for your wellbeing at Aravē Spa",
    images: ["https://arav-spa.vercel.app/images/spa.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${ebGaramond.variable} ${raleway.variable} ${dancing.variable} ${playfair.variable} ${cormorant.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}