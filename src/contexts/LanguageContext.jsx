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
      actionGames: "Action Games",
      adventureGames: "Adventure Games",
      reflexGames: "Reflex Games",
      sportsGames: "Sports Games",
      puzzleGames: "Puzzle Games",
      actionTitle: "ACTION PACKED –----",
      adventureTitle: "CHASE THE QUEST –----",
      puzzleTitle: "CRACK THE CODE –----",
      sportsTitle: "SPORTS CHALLENGE –----",
      reflexTitle: "REFLEXES FUN –----",
      myAccount: "My Account",
      logout: "Logout",
      languageToggle: "En | አማርኛ",
      heroTitle: "YOUR ULTIMATE DESTINATION FOR ONLINE GAMING",
      heroDescription: "Experience the ultimate gaming universe with KIDOPIA, featuring 100+ high quality, premium HTML5 games featuring Action, reflex, Sports and Adventure Enthusiasts.",
      playNow: "Play Now",
      aboutKidopia: "ABOUT KIDOPIA ----",
      aboutTitle: "EXPERIENCE NEXT-LEVEL ENTERTAINMENT WITH KIDOPIA – YOUR ULTIMATE PREMIUM HTML5 GAMING PORTAL.",
      aboutDescription: "Play hundreds of top-tier games instantly, no downloads, no delays, just pure enjoyment. Fast, elegant, and compatible with any device, KIDOPIA transforms every moment into a gaming adventure.",
      privacyPolicy: "Privacy Policy",
      faq: "FAQ",
      copyright: "© ETHIO TELECOM KIDOPIA 2025, ALL RIGHTS RESERVED",
      // Banner
      termsTitle: "TERMS AND CONDITIONS",
      termsDescription: "Welcome to our website! These terms and conditions outline the rules and regulations for the use of our website.",

      // Sections
      section1: "1. INTRODUCTION",
      section1Content: "By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use the website if you do not accept all of the terms and conditions stated on this page.",

      section2: "2. INTELLECTUAL PROPERTY RIGHTS",
      section2Content: "Other than the content you own, under these terms, Vision Tech. Trading One Member P.L.C and/or its licensors own all the intellectual property rights and materials contained in this website. You are granted a limited license only for purposes of viewing the material contained on this website.",

      section3: "3. RESTRICTIONS",
      section3Content: "You are specifically restricted from all of the following:",
      restriction1: "Publishing any website material in any other media;",
      restriction2: "Selling, sublicensing and/or otherwise commercializing any website material;",
      restriction3: "Publicly performing and/or showing any website material;",
      restriction4: "Using this website in any way that is or may be damaging to this website;",
      restriction5: "Using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity;",
      restriction6: "Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this website;",
      restriction7: "Using this website to engage in any advertising or marketing.",
      restriction8: "Certain areas of this website are restricted from being accessed by you and Vision Tech. Trading One Member P.L.C may further restrict access by you to any areas of this website, at any time, in absolute discretion.",

      section4: "4. KIDOPIA",
      section4Content: "\"KIDOPIA\" shall mean any audio, video, text, images or other material you choose to display on this website. By displaying Your Content, you grant Vision Tech. Trading One Member P.L.C a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.",

      section5: "5. NO WARRANTIES",
      section5Content: "This website is provided \"as is,\" with all faults, and Vision Tech. Trading One Member P.L.C express no representations or warranties, of any kind related to this website or the materials contained on this website.",

      section6: "6. LIMITATION OF LIABILITY",
      section6Content: "In no event shall Vision Tech. Trading One Member P.L.C, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. Vision Tech. Trading One Member P.L.C, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this website.",

      section7: "7. INDEMNIFICATION",
      section7Content: "You hereby indemnify to the fullest extent Vision Tech. Trading One Member P.L.C from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these terms.",

      section8: "8. SEVERABILITY",
      section8Content: "If any provision of these terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.",

      // Footer
      termsConditions: "Terms & Conditions",
      welcome: "WELCOME TO KIDOPIA",
      login: "Login",
      description: "Enter your phone number and PIN to access your account",
      phone_placeholder: "Enter your phone number",
      pin_placeholder: "Enter your PIN",
      invalid_phone: "Please enter a valid phone number",
      pin_required: "PIN is required",
      login_success: "Login successful! 🎉 Redirecting...",
      login_error: "Login failed. Please check your credentials.",
      please_register: "Please register first",
      consent: "By continuing, you agree to ",
      terms: "Terms and Conditions",
      login_btn: "LOGIN",
      trial: "Enjoy a 3-day free trial for your first Registration",
      help: "Help Desk : 251 970 305 059",
      daily: "To subscribe daily (3 birr) send A to 8117",
      weekly: "To subscribe weekly (15 birr) send B to 8117",
      monthly: "To subscribe monthly (75 birr) send C to 8117",
      logging_in: "Logging in...",
      myAccount_header: "My Account",
      phone_number: "Phone Number",
      registration_date: "Registration Date",
      status: "Status",
      active: "Active",
      inactive: "Inactive",
      subscription_type: "Subscription Type",
      back: "Back",
      unsubscribe: "Unsubscribe",
    },
    am: {
      home: "መግቢያ",
      gameCategory: "የጨዋታ ምድብ",
      actionGames: "ተግባር ጨዋታዎች",
      adventureGames: "አድንቬንቸር ጨዋታዎች",
      reflexGames: "ሪፍሌክስ ጨዋታዎች",
      sportsGames: "ስፖርት ጨዋታዎች",
      puzzleGames: "እንቆቅልሽ ጨዋታዎች",
      actionTitle: "የተሞላ ተግባር –----",
      adventureTitle: "ፍልሚያውን ያሸንፉ –----",
      puzzleTitle: "ኮዱን ይሰብሩ –----",
      sportsTitle: "የስፖርት ፈተና –----",
      reflexTitle: "የሪፍሌክስ መዝናኛ –----",
      myAccount: "የእኔ መለያ",
      logout: "ውጣ",
      languageToggle: "En | አማርኛ",
      heroTitle: "ለኦንላይን ጨዋታዎች የመጨረሻ መድረሻዎ",
      heroDescription: "ከ 100 በላይ የ Android እና HTML አስደሳች እና አስቂኝ ጨዋታዎች በአንድ ቦታ በ Kidopia የጨዋታ አለም ያግኙ።",
      playNow: "አሁኑኑ ይጫወቱ",
      aboutKidopia: "ስለ KIDOPIA ----",
      aboutTitle: "የቀጣይ ደረጃ መዝናኛን ከKIDOPIA ጋር ይለማመዱ - የእርስዎ የመጨረሻው ፕሪሚየም HTML5 ጨዋታ መግቢያ።",
      aboutDescription: "አዝናኝ አስተማሪ እንዲሁም አንድ ደረጃ ከፍ ያለ ከ100 በላይ ጌሞች ከ ኪዶፒያ ቀርቦሎታል፡፡ ጌሞቹን ማውረድ ሳይጠበቅቦት በቀጥታ ከፍጥነት ጋር በስልኮ፡ በላፕቶፖ እና በታብሌቶ ይዝናኑ፡፡",
      privacyPolicy: "የግለሰቦች ፖሊሲ",
      faq: "FAQ", // You can add Amharic translation if needed
      copyright: "© ኢትዮ ቴሌኮም KIDOPIA 2025፣ መብቱ በህግ የተጠበቀ ነው።",
      // Banner
      termsTitle: "ውልና ሁኔታዎች",
      termsDescription: "እንኳን ወደ ድረ-ገጻችን በደህና መጡ! እነዚህ ውልና ሁኔታዎች የድረ-ገጻችንን አጠቃቀም ደንቦችን እና ደንብ ይገልጻሉ።",
      // Sections
      section1: "1. መግቢያ",
      section1Content: "ይህን ድረ-ገጽ በመግባት፣ እነዚህን ውልና ሁኔታዎች በሙሉ እንደተቀበሉ እንደምንያምን ነው። በዚህ ገጽ ላይ የተጠቀሱትን ውልና ሁኔታዎች ሁሉ ካልተቀበሉ ከዚህ ድረ-ገጽ መጠቀም አትቀጥሉ።",

      section2: "2. የንብረት መብቶች",
      section2Content: "እርስዎ የምትያዙትን ይዘት ከሌለ በስተቀር፣ በእነዚህ ውሎች መሠረት፣ Vision Tech. Trading One Member P.L.C እና/ወይም ፈቃደኞቹ በዚህ ድረ-ገጽ ውስጥ የተካተቱትን ሁሉንም የንብረት መብቶች እና ቁሳቁሶች ይያዙ። በዚህ ድረ-ገጽ ውስጥ የተካተቱትን ቁሳቁሶች ለመመልከት ብቻ የተገደበ ፍቃድ ተሰጥቷል።",

      section3: "3. ገደቦች",
      section3Content: "ከሚከተሉት ነገሮች በተለይ እንዲገደቡ ተከልክላል።",
      restriction1: "የድረ-ገጽ ቁሳቁስን በማንኛውም ሌላ ሚዲያ ማተም።",
      restriction2: "የድረ-ገጽ ቁሳቁስን መሸጥ፣ የፍቃድ ስር ማዋል ወይም በሌላ መንገድ ማንገበር።",
      restriction3: "የድረ-ገጽ ቁሳቁስን በህዝብ ፊት መከበር ወይም ማሳየት።",
      restriction4: "ይህን ድረ-ገጽ በማንኛውም መንገድ ለድረ-ገጹ ጉዳት ሊያመጣ በሚችል መልኩ መጠቀም።",
      restriction5: "ይህን ድረ-ገጽ በሕግና በደንብ የሚቃለል መልኩ መጠቀም ወይም በማንኛውም መንገድ ድረ-ገጹን ወይም ሰውን ወይም ንግድ አካልን ጉዳት ሊያደርስ የሚችል መጠቀም።",
      restriction6: "በዚህ ድረ-ገጽ ጋር የተያያዘ የመረጃ መቆፈር፣ ማሰባሰብ፣ መሰረዝ ወይም ማንኛውም ተመሳሳይ እንቅስቃሴ መሳተፍ።",
      restriction7: "ይህን ድረ-ገጽ ማስታወቂያ ወይም ገበያ ለማካሄድ መጠቀም።",
      restriction8: "በዚህ ድረ-ገጽ ውስጥ አንዳንድ አካባቢዎች ከእርስዎ ማግኘት ተከልክለዋል፣ እና Vision Tech. Trading One Member P.L.C በሙሉ ፍላጎቱ ላይ በማንኛውም ጊዜ በዚህ ድረ-ገጽ ማንኛውንም አካባቢ ላይ ከእርስዎ የመድረስ መብትን ተጨማሪ ሊገድብ ይችላል።",

      section4: "4. KIDOPIA",
      section4Content: "\"KIDOPIA\" በዚህ ድረ-ገጽ ላይ የምታሳዩትን የድምፅ፣ ቪዲዮ፣ ጽሑፍ፣ ምስሎች ወይም ሌሎች ቁሳቁሶች ማለት ነው። ይዘትዎን በማሳየት፣ Vision Tech. Trading One Member P.L.C ለመጠቀም፣ ለመባዛት፣ ለማስተካከል፣ ለማታተም፣ ለመተርጎም እና በማንኛውም ሚዲያ ለማስተላለፍ አለመቋረጥ የማይቻል፣ የአለም አቀፍ፣ የማይወሰን ፍቃድ ይሰጣል።",

      section5: "5. ማረጋገጫ የለም",
      section5Content: "ይህ ድረ-ገጽ \"እንደሆነ እንዲሁ\" በሁሉም እንክልናዎች ተሰጥቶ ነው፣ Vision Tech. Trading One Member P.L.C በዚህ ድረ-ገጽ ወይም በዚህ ድረ-ገጽ ውስጥ በተካተቱት ቁሳቁሶች ላይ ማንኛውንም ዓይነት መወከል ወይም ማረጋገጫ አያደርግም።",

      section6: "6. የኃላፊነት ገደብ",
      section6Content: "በማንኛውም ጊዜ Vision Tech. Trading One Member P.L.C እና ሰራተኞቹ ከዚህ ድረ-ገጽ አጠቃቀምዎ ጋር የተያያዘ ወይም የሚመነጨው ማንኛውም ኃላፊነት አይደለባቸውም። ከዚህ ድረ-ገጽ አጠቃቀምዎ ጋር የተያያዘ የተዘዋዋሪ፣ ተከታይ ወይም ልዩ ኃላፊነት አይሰጡም።",

      section7: "7. ክፍያ",
      section7Content: "ከእነዚህ ውሎች የተነሳ የሚበሰሉ ማንኛውንም ኃላፊነት፣ ወጪ፣ ጉዳት፣ ክፍያ እና ጉዳይ Vision Tech. Trading One Member P.L.C ከማንኛውም ተጽእኖ ማስቀነስ ይህን በሙሉ ያስረካችሁ።",

      section8: "8. ማካፈል",
      section8Content: "በማንኛውም ሕግ መሠረት የእነዚህ ውሎች አንዱ ከማይሰራ ከተገኘ፣ ይህ ውል ቀሪውን አንደኛ ያልተጎዳ ሆኖ ይቀጥላል።",

      // Footer
      termsConditions: "ውሎች እና ሁኔታዎች",
      welcome: "እንኳን ወደ Kidopia በደህና መጡ",
      login: "ለመመዝገብ",
      description: "የስልክ ቁጥርዎን እና ፒን ያስገቡ",
      phone_placeholder: "የስልክ ቁጥርዎን ያስገቡ",
      pin_placeholder: "ፒንዎን ያስገቡ",
      invalid_phone: "እባክዎ ትክክለኛ የስልክ ቁጥር ያስገቡ",
      pin_required: "ፒን ያስፈልጋል",
      login_success: "ግባ ተሳክቷል! 🎉 በቅርብ ጊዜ እየተሻገረ ነው...",
      please_register: "እባክዎ ይመዝገቡ ፡፡",
      login_error: "ግባ አልተሳካም። እባክዎ የይለፍ ቃልዎን ያረጋግጡ።",
      consent: "በመቀጠል፤ ዉሎችን ተስማምተዋል",
      terms: "ደንቦች",
      login_btn: "ግባ",
      trial: "ለመጀመሪያ ምዝገባዎ 3 ቀን በነፃ ይጠቀሙ",
      help: "ለበለጠ መረጃ 251 970 305 059",
      daily: "ለዕለታዊ ለመመዝገብ (3) A ወደ 8117 ይላኩ",
      weekly: "ለሳምንታዊ ለመመዝገብ (15) B ወደ 8117 ይላኩ",
      monthly: "ለወርሃዊ ለመመዝገብ (75) C ወደ 8117 ይላኩ",
      logging_in: "በመግባት ላይ...",
      myAccount_header: "የእኔ መለያ",
      phone_number: "ስልክ ቁጥር",
      registration_date: "የተመዘገበበት ቀን",
      status: "ሁኔታ",
      active: "ንቁ",
      inactive: "እንቅስቃሴ የለም",
      subscription_type: "የመመዝገቢያ አይነት",
      back: "ተመለስ",
      unsubscribe: "መመዝገብ ሰርዝ",
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