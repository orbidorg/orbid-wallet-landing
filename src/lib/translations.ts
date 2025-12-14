// Translation dictionaries for all supported languages

export type Locale =
    | 'en'      // English
    | 'zh'      // Chinese Simplified
    | 'es-419'  // Spanish (Latin America)
    | 'es'      // Spanish
    | 'hi'      // Hindi
    | 'pt'      // Portuguese
    | 'fr'      // French
    | 'ja'      // Japanese
    | 'ko'      // Korean
    | 'de';     // German

export interface Translations {
    meta: {
        title: string;
        description: string;
    };
    hero: {
        title: string;
        titleHighlight: string;
        subtitle: string;
    };
    cta: {
        button: string;
    };
    footer: {
        copyright: string;
    };
    notFound: {
        title: string;
        subtitle: string;
        description: string;
        backHome: string;
        footer: string;
    };
}

export const translations: Record<Locale, Translations> = {
    en: {
        meta: {
            title: "OrbId Wallet - Your Decentralized Identity",
            description: "OrbId Wallet is your decentralized identity wallet for World App. Manage your digital identity securely and privately.",
        },
        hero: {
            title: "OrbId Wallet in your",
            titleHighlight: "pocket",
            subtitle: "Your decentralized identity for World App. Secure, private, and always with you.",
        },
        cta: {
            button: "Download it now in World App",
        },
        footer: {
            copyright: "All rights reserved.",
        },
        notFound: {
            title: "404",
            subtitle: "Page Not Found",
            description: "Oops! The page you're looking for seems to have wandered off into the blockchain void.",
            backHome: "Back to Home",
            footer: "OrbId Wallet • World Chain",
        },
    },
    zh: {
        meta: {
            title: "OrbId 钱包 - 您的去中心化身份",
            description: "OrbId 钱包是您在 World App 中的去中心化身份钱包。安全、私密地管理您的数字身份。",
        },
        hero: {
            title: "OrbId 钱包在您的",
            titleHighlight: "口袋里",
            subtitle: "适用于 World App 的去中心化身份。安全、私密、随时随地。",
        },
        cta: {
            button: "在 World App 中立即下载",
        },
        footer: {
            copyright: "保留所有权利。",
        },
        notFound: {
            title: "404",
            subtitle: "页面未找到",
            description: "糟糕！您要找的页面似乎已经消失在区块链虚空中了。",
            backHome: "返回首页",
            footer: "OrbId 钱包 • World Chain",
        },
    },
    'es-419': {
        meta: {
            title: "OrbId Wallet - Tu Identidad Descentralizada",
            description: "OrbId Wallet es tu billetera de identidad descentralizada para World App. Administra tu identidad digital de forma segura y privada.",
        },
        hero: {
            title: "OrbId Wallet en tu",
            titleHighlight: "bolsillo",
            subtitle: "Tu identidad descentralizada para World App. Segura, privada y siempre contigo.",
        },
        cta: {
            button: "Descárgala ahora en World App",
        },
        footer: {
            copyright: "Todos los derechos reservados.",
        },
        notFound: {
            title: "404",
            subtitle: "Página No Encontrada",
            description: "¡Ups! La página que buscas parece haberse perdido en el vacío de la blockchain.",
            backHome: "Volver al Inicio",
            footer: "OrbId Wallet • World Chain",
        },
    },
    es: {
        meta: {
            title: "OrbId Wallet - Tu Identidad Descentralizada",
            description: "OrbId Wallet es tu cartera de identidad descentralizada para World App. Gestiona tu identidad digital de forma segura y privada.",
        },
        hero: {
            title: "OrbId Wallet en tu",
            titleHighlight: "bolsillo",
            subtitle: "Tu identidad descentralizada para World App. Segura, privada y siempre contigo.",
        },
        cta: {
            button: "Descárgala ahora en World App",
        },
        footer: {
            copyright: "Todos los derechos reservados.",
        },
        notFound: {
            title: "404",
            subtitle: "Página No Encontrada",
            description: "¡Vaya! La página que buscas parece haberse perdido en el vacío de la blockchain.",
            backHome: "Volver al Inicio",
            footer: "OrbId Wallet • World Chain",
        },
    },
    hi: {
        meta: {
            title: "OrbId Wallet - आपकी विकेंद्रीकृत पहचान",
            description: "OrbId Wallet World App के लिए आपका विकेंद्रीकृत पहचान वॉलेट है। अपनी डिजिटल पहचान को सुरक्षित और निजी रूप से प्रबंधित करें।",
        },
        hero: {
            title: "OrbId Wallet आपकी",
            titleHighlight: "जेब में",
            subtitle: "World App के लिए आपकी विकेंद्रीकृत पहचान। सुरक्षित, निजी और हमेशा आपके साथ।",
        },
        cta: {
            button: "World App में अभी डाउनलोड करें",
        },
        footer: {
            copyright: "सर्वाधिकार सुरक्षित।",
        },
        notFound: {
            title: "404",
            subtitle: "पृष्ठ नहीं मिला",
            description: "उफ़! आप जो पृष्ठ खोज रहे हैं वह ब्लॉकचेन शून्य में खो गया लगता है।",
            backHome: "होम पर वापस जाएं",
            footer: "OrbId Wallet • World Chain",
        },
    },
    pt: {
        meta: {
            title: "OrbId Wallet - Sua Identidade Descentralizada",
            description: "OrbId Wallet é sua carteira de identidade descentralizada para o World App. Gerencie sua identidade digital de forma segura e privada.",
        },
        hero: {
            title: "OrbId Wallet no seu",
            titleHighlight: "bolso",
            subtitle: "Sua identidade descentralizada para o World App. Segura, privada e sempre com você.",
        },
        cta: {
            button: "Baixe agora no World App",
        },
        footer: {
            copyright: "Todos os direitos reservados.",
        },
        notFound: {
            title: "404",
            subtitle: "Página Não Encontrada",
            description: "Ops! A página que você procura parece ter se perdido no vazio da blockchain.",
            backHome: "Voltar ao Início",
            footer: "OrbId Wallet • World Chain",
        },
    },
    fr: {
        meta: {
            title: "OrbId Wallet - Votre Identité Décentralisée",
            description: "OrbId Wallet est votre portefeuille d'identité décentralisée pour World App. Gérez votre identité numérique de manière sécurisée et privée.",
        },
        hero: {
            title: "OrbId Wallet dans votre",
            titleHighlight: "poche",
            subtitle: "Votre identité décentralisée pour World App. Sécurisée, privée et toujours avec vous.",
        },
        cta: {
            button: "Téléchargez maintenant sur World App",
        },
        footer: {
            copyright: "Tous droits réservés.",
        },
        notFound: {
            title: "404",
            subtitle: "Page Non Trouvée",
            description: "Oups ! La page que vous cherchez semble s'être perdue dans le vide de la blockchain.",
            backHome: "Retour à l'Accueil",
            footer: "OrbId Wallet • World Chain",
        },
    },
    ja: {
        meta: {
            title: "OrbId Wallet - あなたの分散型アイデンティティ",
            description: "OrbId WalletはWorld App用の分散型アイデンティティウォレットです。デジタルIDを安全かつプライベートに管理します。",
        },
        hero: {
            title: "OrbId Walletを",
            titleHighlight: "ポケットに",
            subtitle: "World App用の分散型アイデンティティ。安全、プライベート、いつでもあなたと一緒に。",
        },
        cta: {
            button: "World Appで今すぐダウンロード",
        },
        footer: {
            copyright: "全著作権所有。",
        },
        notFound: {
            title: "404",
            subtitle: "ページが見つかりません",
            description: "おっと！お探しのページはブロックチェーンの虚空に迷い込んでしまったようです。",
            backHome: "ホームに戻る",
            footer: "OrbId Wallet • World Chain",
        },
    },
    ko: {
        meta: {
            title: "OrbId Wallet - 당신의 탈중앙화 신원",
            description: "OrbId Wallet은 World App을 위한 탈중앙화 신원 지갑입니다. 디지털 신원을 안전하고 개인적으로 관리하세요.",
        },
        hero: {
            title: "OrbId Wallet을",
            titleHighlight: "주머니에",
            subtitle: "World App을 위한 탈중앙화 신원. 안전하고 프라이빗하며 항상 함께합니다.",
        },
        cta: {
            button: "World App에서 지금 다운로드",
        },
        footer: {
            copyright: "모든 권리 보유.",
        },
        notFound: {
            title: "404",
            subtitle: "페이지를 찾을 수 없음",
            description: "앗! 찾고 계신 페이지가 블록체인 공허 속으로 사라진 것 같습니다.",
            backHome: "홈으로 돌아가기",
            footer: "OrbId Wallet • World Chain",
        },
    },
    de: {
        meta: {
            title: "OrbId Wallet - Ihre Dezentralisierte Identität",
            description: "OrbId Wallet ist Ihre dezentralisierte Identitätswallet für World App. Verwalten Sie Ihre digitale Identität sicher und privat.",
        },
        hero: {
            title: "OrbId Wallet in Ihrer",
            titleHighlight: "Tasche",
            subtitle: "Ihre dezentralisierte Identität für World App. Sicher, privat und immer bei Ihnen.",
        },
        cta: {
            button: "Jetzt in World App herunterladen",
        },
        footer: {
            copyright: "Alle Rechte vorbehalten.",
        },
        notFound: {
            title: "404",
            subtitle: "Seite Nicht Gefunden",
            description: "Hoppla! Die gesuchte Seite scheint sich in der Blockchain-Leere verlaufen zu haben.",
            backHome: "Zurück zur Startseite",
            footer: "OrbId Wallet • World Chain",
        },
    },
};

export const defaultLocale: Locale = 'en';

export const supportedLocales: Locale[] = [
    'en', 'zh', 'es-419', 'es', 'hi', 'pt', 'fr', 'ja', 'ko', 'de'
];

export function getTranslations(locale: Locale): Translations {
    return translations[locale] || translations[defaultLocale];
}

