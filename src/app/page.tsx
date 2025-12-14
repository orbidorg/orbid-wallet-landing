"use client";

import Image from "next/image";
import PhoneCarousel from "@/components/PhoneCarousel";
import { useLocale } from "@/hooks/useLocale";

const mockupImages = [
    "/assets/screen-1.png",
    "/assets/screen-2.png",
    "/assets/screen-3.png",
];

export default function Home() {
    const { translations: t, isLoaded } = useLocale();

    // Show nothing while loading to prevent flash
    if (!isLoaded) {
        return (
            <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 pb-24 sm:pb-12 overflow-hidden">
                <div className="gradient-glow absolute top-1/4 left-1/4 w-96 h-96 rounded-full -z-10" />
                <div className="gradient-glow absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full -z-10" style={{ animationDelay: '2s' }} />
            </main>
        );
    }

    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 pb-24 sm:pb-12 overflow-hidden">
            {/* Background Glow Effects - with pulse animation */}
            <div className="gradient-glow absolute top-1/4 left-1/4 w-96 h-96 rounded-full -z-10" />
            <div className="gradient-glow absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full -z-10" style={{ animationDelay: '2s' }} />

            {/* Content Container */}
            <div className="flex flex-col items-center gap-10 max-w-4xl w-full">

                {/* Logo */}
                <div className="flex items-center gap-3 animate-fade-in-up">
                    <Image
                        src="/logo.svg"
                        alt="OrbId Wallet"
                        width={56}
                        height={56}
                        priority
                    />
                    <span className="text-2xl font-bold text-white">OrbId Wallet</span>
                </div>

                {/* Hero Title - staggered fade in */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up-delay-1">
                        {t.hero.title}{" "}
                        <span className="gradient-text-animated">
                            {t.hero.titleHighlight}
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-white/60 max-w-md mx-auto animate-fade-in-up-delay-2">
                        {t.hero.subtitle}
                    </p>
                </div>

                {/* Phone Carousel - with delay */}
                <div className="animate-fade-in-up-delay-3">
                    <PhoneCarousel images={mockupImages} autoPlayInterval={4000} />
                </div>

                {/* CTA Button - animated gradient */}
                <a
                    href="https://worldcoin.org/mini-app?app_id=app_920c1c9a0cb3aaa68e626f54c09f3cf9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg animate-fade-in-up-delay-4"
                >
                    {/* World Chain Icon */}
                    <svg
                        className="w-6 h-6"
                        viewBox="0 0 138 138"
                        fill="currentColor"
                    >
                        <path d="M103.596 9.22563C93.0251 3.07522 81.4931 0 69 0C56.507 0 44.9749 3.07522 34.4039 9.22563C23.8329 15.3761 15.3761 23.8329 9.22563 34.4039C3.07522 44.9749 0 56.507 0 69C0 81.493 3.07522 93.0251 9.22563 103.596C15.3761 114.167 23.8329 122.624 34.4039 128.774C44.9749 134.925 56.507 138 69 138C81.4931 138 93.0251 134.925 103.596 128.774C114.167 122.624 122.624 114.167 128.774 103.596C134.925 93.0251 138 81.493 138 69C138 56.507 134.925 44.9749 128.774 34.4039C122.624 23.8329 114.167 15.3761 103.596 9.22563ZM73.2284 93.9861C65.3482 93.9861 59.1978 91.6797 54.3928 87.2591C51.1253 84.1838 49.0112 80.5321 48.0502 76.1114H122.624C121.855 82.4541 119.933 88.4123 117.242 93.9861H73.4206H73.2284ZM48.0502 62.0808C49.0112 57.8524 51.1253 54.0084 54.3928 50.9332C59.1978 46.5125 65.3482 44.2061 73.2284 44.2061H117.242C120.125 49.78 121.855 55.7382 122.624 62.0808H48.0502ZM22.2953 41.5153C27.1003 33.2507 33.6351 26.5237 41.8997 21.7187C50.1643 16.9137 59.1978 14.415 69.1922 14.415C79.1867 14.415 88.2201 16.9137 96.4847 21.7187C100.713 24.2173 104.365 27.1003 107.825 30.5599H73.0362C65.156 30.5599 58.0446 32.2897 51.8942 35.5571C45.7438 38.8245 40.9387 43.4373 37.6713 49.2034C35.3649 53.2396 33.8273 57.6602 33.0585 62.273H15.9527C16.7215 54.9694 19.0279 48.0501 22.6797 41.7075L22.2953 41.5153ZM96.2925 116.281C88.0279 121.086 78.9944 123.585 69 123.585C59.0056 123.585 49.9722 121.086 41.7075 116.281C33.4429 111.476 26.9081 104.749 22.1031 96.4847C18.4513 90.1421 16.1448 83.4151 15.376 76.1114H32.4819C33.2507 80.7243 34.7883 85.1448 37.0947 89.1811C40.5543 94.9471 45.3593 99.3677 51.3176 102.827C57.468 106.095 64.5794 107.825 72.4596 107.825H107.056C103.788 111.092 100.137 113.975 96.1003 116.281H96.2925Z" />
                    </svg>
                    {t.cta.button}
                </a>

            </div>

            {/* Footer */}
            <footer className="mt-12 text-center text-white/30 text-sm">
                © {new Date().getFullYear()} OrbId Labs. {t.footer.copyright}
            </footer>
        </main>
    );
}
