import type { Metadata } from "next";
import { Noto_Sans, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";

import theme from "./theme";
import MainNavbar from "@/app/core-components/Navbar";
import MainFooter from "@/app/core-components/Footer";
import { ThemeProvider } from "@mui/material/styles";

// Import MUI components for the button
import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trust Track Travels | Premium Pilgrimage & City Transfers",
  description: "Experience a seamless, safe, and luxurious travel journey in Saudi Arabia. Specializing in Airport transfers, Makkah & Madinah Ziyarat, and inter-city trips with 24/7 professional support.",
  icons: {
    icon: "/log.png",
    shortcut: "/log.png",
    apple: "/log.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${geistMono.variable} antialiased`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <MainNavbar />

            <main style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
              {children}
            </main>

            {/* --- WhatsApp Floating Button --- */}
            <Fab
              color="primary"
              aria-label="whatsapp"
              href="https://wa.me/1234567890" // Replace with your number
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                position: "fixed",
                bottom: 32,
                right: 32,
                backgroundColor: "#25D366", // WhatsApp Green
                "&:hover": {
                  backgroundColor: "#128C7E",
                },
              }}
            >
              <WhatsAppIcon />
            </Fab>

            <MainFooter />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}