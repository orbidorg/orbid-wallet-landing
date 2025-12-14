"use client";

import { useState, useEffect } from 'react';
import { Locale, defaultLocale, supportedLocales, getTranslations, Translations } from '@/lib/translations';

function detectLocale(): Locale {
    if (typeof window === 'undefined') return defaultLocale;

    // Get browser language
    const browserLang = navigator.language || (navigator as unknown as { userLanguage?: string }).userLanguage || '';

    // Normalize the language code
    const normalizedLang = browserLang.toLowerCase();

    // Check for exact match first (e.g., es-419)
    for (const locale of supportedLocales) {
        if (normalizedLang === locale.toLowerCase()) {
            return locale;
        }
    }

    // Check for language match (e.g., es-MX -> es-419 for LATAM Spanish)
    const langCode = normalizedLang.split('-')[0];
    const regionCode = normalizedLang.split('-')[1];

    // Handle Latin American Spanish
    const latamRegions = ['mx', 'ar', 'cl', 'co', 'pe', 've', 'ec', 'gt', 'cu', 'bo', 'do', 'hn', 'py', 'sv', 'ni', 'cr', 'pa', 'uy', 'pr'];
    if (langCode === 'es' && regionCode && latamRegions.includes(regionCode)) {
        return 'es-419';
    }

    // Check for base language match
    for (const locale of supportedLocales) {
        if (locale.toLowerCase().startsWith(langCode)) {
            return locale;
        }
    }

    // Check if the base language matches any supported locale
    if (langCode === 'zh') return 'zh';
    if (langCode === 'es') return 'es';
    if (langCode === 'hi') return 'hi';
    if (langCode === 'pt') return 'pt';
    if (langCode === 'fr') return 'fr';
    if (langCode === 'ja') return 'ja';
    if (langCode === 'ko') return 'ko';
    if (langCode === 'de') return 'de';

    return defaultLocale;
}

export function useLocale() {
    const [locale, setLocale] = useState<Locale>(defaultLocale);
    const [translations, setTranslations] = useState<Translations>(getTranslations(defaultLocale));
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const detectedLocale = detectLocale();
        setLocale(detectedLocale);
        setTranslations(getTranslations(detectedLocale));
        setIsLoaded(true);
    }, []);

    return { locale, translations, isLoaded };
}
