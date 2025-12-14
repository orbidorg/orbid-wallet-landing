import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "OrbId Wallet - Tu Identidad Descentralizada",
    description: "OrbId Wallet es tu billetera de identidad descentralizada para World App. Gestiona tu identidad digital de forma segura y privada.",
    keywords: ["OrbId", "Wallet", "World App", "Worldcoin", "Identidad", "Descentralizada"],
    authors: [{ name: "OrbId" }],
    icons: {
        icon: "/favicon.ico",
        apple: "/favicon.ico",
    },
    openGraph: {
        title: "OrbId Wallet - Tu Identidad Descentralizada",
        description: "Gestiona tu identidad digital de forma segura y privada en World App.",
        type: "website",
        locale: "es_ES",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    themeColor: "#0a0a0f",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${inter.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
