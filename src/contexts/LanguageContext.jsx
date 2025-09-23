// src/contexts/LanguageContext.js
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

// ✅ Make sure this export is present
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// ✅ Make sure this export is present
export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');

  const toggleLanguage = () => {
    setCurrentLang(prev => prev === 'en' ? 'am' : 'en');
  };

  const translations = {
    en: {
      home: "Home",
      gameCategory: "Game Category",
      actionGames: "Action",
      adventureGames: "Adventure",
      arcadeGames: "Arcade",
      sportsGames: "Sports",
      puzzleGames: "Puzzle",
      myAccount: "My Account",
      languageToggle: "En | አማርኛ",
      heroTitle: "YOUR ULTIMATE DESTINATION FOR ONLINE GAMING",
      heroDescription: "Experience the ultimate gaming universe with KIDOPIA, featuring 100+ high quality, premium HTML5 games featuring Action, Arcade, Sports and Adventure Enthusiasts.",
      playNow: "Play Now",
      aboutKidopia: "ABOUT KIDOPIA ----",
      aboutTitle: "EXPERIENCE NEXT-LEVEL ENTERTAINMENT WITH KIDOPIA – YOUR ULTIMATE PREMIUM HTML5 GAMING PORTAL.",
      aboutDescription: "Play hundreds of high-quality games instantly — no downloads, no waiting, just pure fun. Fast, sleek, and built for any device, KIDOPIA turns every moment into a gaming adventure.",
      privacyPolicy: "Privacy Policy",
      termsConditions: "Terms & Conditions", 
      contactUs: "Contact Us",
      faq: "FAQ",
      copyright: "© ETHIO TELECOM KIDOPIA 2025, ALL RIGHTS RESERVED",
    },
    am: {
      home: "ቤት",
      gameCategory: "የጨዋታ ምድብ",
      actionGames: "ተግባር",
      adventureGames: "መግባባት",
      arcadeGames: "አርካድ",
      sportsGames: "ስፖርት",
      puzzleGames: "እንቆቅልሽ",
      myAccount: "የእኔ መለያ",
      languageToggle: "En | አማርኛ",
      heroTitle: "ለኦንላይን ጨዋታዎች የመጨረሻ መድረሻዎ",
      heroDescription: "ከ 100 በላይ የ Android እና HTML አስደሳች እና አስቂኝ ጨዋታዎች በአንድ ቦታ በ Kidopia የጨዋታ አለም ያግኙ።",
      playNow: "አሁኑኑ ይጫወቱ",
      aboutKidopia: "ስለ KIDOPIA ----",
      aboutTitle: "የቀጣይ ደረጃ መዝናኛን ከKIDOPIA ጋር ይለማመዱ - የእርስዎ የመጨረሻው ፕሪሚየም HTML5 ጨዋታ መግቢያ።",
      aboutDescription: "በመቶዎች የሚቆጠሩ ከፍተኛ ጥራት ያላቸውን ጨዋታዎችን በቅጽበት ይጫወቱ - ምንም ማውረድ፣ መጠበቅ የለም፣ ንጹህ አዝናኝ ብቻ። ፈጣን፣ ቄንጠኛ እና ለማንኛውም መሳሪያ የተሰራ KIDOPIA እያንዳንዱን አፍታ ወደ የጨዋታ ጀብዱነት ይቀየራል።",
      privacyPolicy: "የግለሰቦች ፖሊሲ",
      termsConditions: "ውሎች እና ሁኔታዎች",
      contactUs: "ያግኙን", 
      faq: "FAQ", // You can add Amharic translation if needed
      copyright: "© ኢትዮ ቴሌኮም KIDOPIA 2025፣ መብቱ በህግ የተጠበቀ ነው።",
    }
  };

  const t = (key) => translations[currentLang]?.[key] || key;

  const value = {
    currentLang,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};