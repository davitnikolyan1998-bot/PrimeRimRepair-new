import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Prime Rim Repair | Premium Wheel Restoration",
  description: "Premium wheel restoration services. Curb rash repair, bent wheel straightening, custom refinishing. Call (747) 955-7555.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Prime Rim Repair",
  },
  formatDetection: {
    telephone: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0a0a0c",
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18085295436"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18085295436');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0c] text-[#f0f0f0] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
