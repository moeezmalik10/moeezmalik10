import type { Locale } from "@/types";

export interface Dictionary {
  nav: {
    about: string;
    skills: string;
    projects: string;
    upcoming: string;
    certificates: string;
    competitions: string;
    education: string;
    achievements: string;
    contact: string;
    talk: string;
  };
  hero: {
    badge: string;
    ctaProjects: string;
    ctaGithub: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    focusLabel: string;
    focusValue: string;
    basedInLabel: string;
  };
  skills: {
    eyebrow: string;
    heading: string;
    competitiveTitle: string;
    competitiveDesc: string;
  };
  projects: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    githubLabel: string;
    liveLabel: string;
  };
  liveFeed: {
    githubEyebrow: string;
    githubHeading: string;
    githubEmpty: string;
  };
  upcomingProjects: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    etaLabel: string;
    emptyTitle: string;
    emptyDescription: string;
  };
  certificates: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    completedTitle: string;
    inProgressTitle: string;
    emptyTitle: string;
    emptyDescription: string;
    issuedLabel: string;
  };
  competitions: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    emptyTitle: string;
    emptyDescription: string;
  };
  education: {
    eyebrow: string;
    heading: string;
  };
  achievements: {
    eyebrow: string;
    heading: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    subheading: string;
    formNote: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    resendNote: string;
    whatsappButton: string;
  };
  footer: {
    rights: string;
    backToTop: string;
  };
  chatbot: {
    title: string;
    subtitle: string;
    welcome: string;
    placeholder: string;
    closeLabel: string;
  };
  langSwitcher: {
    label: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      upcoming: "Upcoming",
      certificates: "Certificates",
      competitions: "Competitions",
      education: "Education",
      achievements: "Achievements",
      contact: "Contact",
      talk: "Let's talk",
    },
    hero: {
      badge: "AVAILABLE FOR OPPORTUNITIES",
      ctaProjects: "View Projects",
      ctaGithub: "GitHub",
    },
    about: {
      eyebrow: "01 · ABOUT",
      heading: "Building things that think and things that ship.",
      focusLabel: "Focus",
      focusValue: "Deep Learning, Computer Vision & Full-Stack Web/Mobile",
      basedInLabel: "Based in",
    },
    skills: {
      eyebrow: "02 · SKILLS",
      heading: "What I work with",
      competitiveTitle: "Sharpening the edge",
      competitiveDesc: "Solving problems consistently on competitive platforms",
    },
    projects: {
      eyebrow: "03 · PROJECTS",
      heading: "Selected work",
      subtitle: "A mix of deep learning experiments and full-stack products. Live activity from GitHub is further down the page.",
      githubLabel: "GitHub",
      liveLabel: "Live Demo",
    },
    liveFeed: {
      githubEyebrow: "LIVE · GITHUB",
      githubHeading: "Latest activity",
      githubEmpty: "Couldn't reach the GitHub API right now — try again shortly.",
    },
    upcomingProjects: {
      eyebrow: "04 · UPCOMING",
      heading: "What's next",
      subtitle: "Work in progress or on deck — updated as it happens.",
      etaLabel: "ETA",
      emptyTitle: "Nothing queued up publicly yet",
      emptyDescription: "New builds land here the moment they're underway. Check back soon, or ask Byte what's in the works.",
    },
    certificates: {
      eyebrow: "05 · CERTIFICATES",
      heading: "Certifications",
      subtitle: "Courses and certifications, completed and in progress.",
      completedTitle: "Completed",
      inProgressTitle: "In Progress",
      emptyTitle: "Certificates coming soon",
      emptyDescription: "This section is ready to go — certificates will be added here shortly.",
      issuedLabel: "Issued by",
    },
    competitions: {
      eyebrow: "06 · COMPETITIONS",
      heading: "Competitions",
      subtitle: "Competitions and hackathons applied to or entered.",
      emptyTitle: "Nothing listed yet",
      emptyDescription: "Competition entries will be added here shortly.",
    },
    education: {
      eyebrow: "07 · EDUCATION",
      heading: "Academic path",
    },
    achievements: {
      eyebrow: "08 · ACHIEVEMENTS",
      heading: "Milestones so far",
    },
    contact: {
      eyebrow: "09 · CONTACT",
      heading: "Let's build something worth shipping.",
      subheading: "Open to internships, collaborations and interesting problems in AI or full-stack engineering.",
      formNote: "OR SEND A MESSAGE DIRECTLY",
      nameLabel: "YOUR NAME",
      namePlaceholder: "Jane Doe",
      emailLabel: "YOUR EMAIL",
      emailPlaceholder: "jane@example.com",
      messageLabel: "MESSAGE",
      messagePlaceholder: "What would you like to build together?",
      sendButton: "Send message",
      sending: "Sending…",
      resendNote: "Sent via Resend from a Server Action — no client-side API key exposure.",
      whatsappButton: "Chat on WhatsApp",
    },
    footer: {
      rights: "All rights reserved.",
      backToTop: "Back to top ↑",
    },
    chatbot: {
      title: "Byte",
      subtitle: "AI assistant · RAG over Moeez's profile",
      welcome: "Hi, I'm Byte 👋 Ask me anything about Moeez — skills, projects, education, achievements, or suggest a project idea and I'll tell you how his stack fits.",
      placeholder: "Ask about Moeez...",
      closeLabel: "Close chat",
    },
    langSwitcher: { label: "Language" },
  },

  ur: {
    nav: {
      about: "تعارف",
      skills: "مہارتیں",
      projects: "پراجیکٹس",
      upcoming: "آئندہ",
      certificates: "اسناد",
      competitions: "مقابلے",
      education: "تعلیم",
      achievements: "کامیابیاں",
      contact: "رابطہ",
      talk: "بات کریں",
    },
    hero: {
      badge: "نئے مواقع کے لیے دستیاب",
      ctaProjects: "پراجیکٹس دیکھیں",
      ctaGithub: "گٹ ہب",
    },
    about: {
      eyebrow: "۰۱ · تعارف",
      heading: "ایسی چیزیں بناتا ہوں جو سوچتی ہیں، اور ایسی چیزیں جو مکمل ہو کر پہنچتی ہیں۔",
      focusLabel: "توجہ کا مرکز",
      focusValue: "ڈیپ لرننگ، کمپیوٹر ویژن اور فل سٹیک ویب/موبائل",
      basedInLabel: "رہائش",
    },
    skills: {
      eyebrow: "۰۲ · مہارتیں",
      heading: "میں کن چیزوں پر کام کرتا ہوں",
      competitiveTitle: "مہارت کو نکھارنا",
      competitiveDesc: "مسابقتی پلیٹ فارمز پر مسلسل مسائل حل کرنا",
    },
    projects: {
      eyebrow: "۰۳ · پراجیکٹس",
      heading: "منتخب کام",
      subtitle: "ڈیپ لرننگ کے تجربات اور فل سٹیک پراڈکٹس کا ملاپ۔ GitHub کی لائیو سرگرمی صفحے کے نیچے موجود ہے۔",
      githubLabel: "گٹ ہب",
      liveLabel: "لائیو ڈیمو",
    },
    liveFeed: {
      githubEyebrow: "لائیو · گٹ ہب",
      githubHeading: "تازہ ترین سرگرمی",
      githubEmpty: "اس وقت GitHub API تک رسائی ممکن نہیں — کچھ دیر بعد دوبارہ کوشش کریں۔",
    },
    upcomingProjects: {
      eyebrow: "۰۴ · آئندہ",
      heading: "آگے کیا ہے",
      subtitle: "زیرِ تکمیل یا منصوبہ بند کام — جیسے جیسے شروع ہوگا، یہاں اپڈیٹ ہوگا۔",
      etaLabel: "متوقع وقت",
      emptyTitle: "ابھی عوامی طور پر کچھ بھی زیرِ تکمیل نہیں",
      emptyDescription: "نئے پراجیکٹس شروع ہوتے ہی یہاں شامل کیے جائیں گے۔ کچھ دیر بعد دوبارہ دیکھیں، یا بائٹ سے پوچھیں کہ اس وقت کیا ہو رہا ہے۔",
    },
    certificates: {
      eyebrow: "۰۵ · اسناد",
      heading: "سرٹیفیکیشنز",
      subtitle: "مکمل اور زیرِ تکمیل کورسز اور سرٹیفیکیشنز۔",
      completedTitle: "مکمل شدہ",
      inProgressTitle: "زیرِ تکمیل",
      emptyTitle: "سرٹیفیکیٹس جلد شامل کیے جائیں گے",
      emptyDescription: "یہ سیکشن تیار ہے — سرٹیفیکیٹس جلد یہاں شامل کیے جائیں گے۔",
      issuedLabel: "جاری کنندہ",
    },
    competitions: {
      eyebrow: "۰۶ · مقابلے",
      heading: "مقابلے",
      subtitle: "وہ مقابلے اور ہیکاتھونز جن میں شرکت کی گئی یا اپلائی کیا گیا۔",
      emptyTitle: "ابھی کچھ بھی درج نہیں",
      emptyDescription: "مقابلوں کی تفصیلات جلد یہاں شامل کی جائیں گی۔",
    },
    education: {
      eyebrow: "۰۷ · تعلیم",
      heading: "تعلیمی سفر",
    },
    achievements: {
      eyebrow: "۰۸ · کامیابیاں",
      heading: "اب تک کے سنگ میل",
    },
    contact: {
      eyebrow: "۰۹ · رابطہ",
      heading: "آئیں کچھ ایسا بنائیں جو شپ کرنے کے قابل ہو۔",
      subheading: "انٹرن شپس، تعاون اور AI یا فل سٹیک انجینئرنگ کے دلچسپ مسائل کے لیے دستیاب ہوں۔",
      formNote: "یا براہِ راست پیغام بھیجیں",
      nameLabel: "آپ کا نام",
      namePlaceholder: "جین ڈو",
      emailLabel: "آپ کا ای میل",
      emailPlaceholder: "jane@example.com",
      messageLabel: "پیغام",
      messagePlaceholder: "آپ مل کر کیا بنانا چاہیں گے؟",
      sendButton: "پیغام بھیجیں",
      sending: "بھیجا جا رہا ہے…",
      resendNote: "Server Action کے ذریعے Resend سے بھیجا گیا — کوئی کلائنٹ سائیڈ API key ظاہر نہیں ہوتی۔",
      whatsappButton: "واٹس ایپ پر بات کریں",
    },
    footer: {
      rights: "جملہ حقوق محفوظ ہیں۔",
      backToTop: "اوپر جائیں ↑",
    },
    chatbot: {
      title: "بائٹ",
      subtitle: "AI اسسٹنٹ · معیض کی پروفائل پر مبنی",
      welcome: "السلام علیکم، میں بائٹ ہوں 👋 معیض کے بارے میں کچھ بھی پوچھیں — مہارتیں، پراجیکٹس، تعلیم، کامیابیاں، یا کوئی پراجیکٹ آئیڈیا بتائیں اور میں بتاؤں گا کہ اُن کی مہارتیں اس پر کیسے فٹ بیٹھتی ہیں۔",
      placeholder: "معیض کے بارے میں پوچھیں...",
      closeLabel: "چیٹ بند کریں",
    },
    langSwitcher: { label: "زبان" },
  },

  ru: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      upcoming: "Aainda",
      certificates: "Certificates",
      competitions: "Competitions",
      education: "Taleem",
      achievements: "Kamyabiyan",
      contact: "Rabta",
      talk: "Baat karein",
    },
    hero: {
      badge: "NAYE MAWAQAY KE LIYE DASTYAB",
      ctaProjects: "Projects Dekhein",
      ctaGithub: "GitHub",
    },
    about: {
      eyebrow: "01 · ABOUT",
      heading: "Aisi cheezein banata hoon jo sochti hain, aur aisi cheezein jo mukammal ho kar pohanchti hain.",
      focusLabel: "Focus",
      focusValue: "Deep Learning, Computer Vision aur Full-Stack Web/Mobile",
      basedInLabel: "Rehaish",
    },
    skills: {
      eyebrow: "02 · SKILLS",
      heading: "Main kin cheezon par kaam karta hoon",
      competitiveTitle: "Mahaarat ko nikharna",
      competitiveDesc: "Competitive platforms par musalsal masail hal karna",
    },
    projects: {
      eyebrow: "03 · PROJECTS",
      heading: "Muntakhab kaam",
      subtitle: "Deep learning experiments aur full-stack products ka milaap. GitHub ki live activity page ke neeche maujood hai.",
      githubLabel: "GitHub",
      liveLabel: "Live Demo",
    },
    liveFeed: {
      githubEyebrow: "LIVE · GITHUB",
      githubHeading: "Taza tareen activity",
      githubEmpty: "Is waqt GitHub API tak rasai mumkin nahi — thori dair baad dobara koshish karein.",
    },
    upcomingProjects: {
      eyebrow: "04 · UPCOMING",
      heading: "Aagay kya hai",
      subtitle: "Zair-e-takmeel ya planned kaam — jaisay jaisay shuru hoga, yahan update hoga.",
      etaLabel: "ETA",
      emptyTitle: "Abhi publicly kuch bhi zair-e-takmeel nahi",
      emptyDescription: "Naye projects shuru hotay hi yahan shamil kiye jayenge. Thori dair baad dobara dekhein, ya Byte se poochein ke is waqt kya ho raha hai.",
    },
    certificates: {
      eyebrow: "05 · CERTIFICATES",
      heading: "Certifications",
      subtitle: "Mukammal aur zair-e-takmeel courses aur certifications.",
      completedTitle: "Mukammal",
      inProgressTitle: "Zair-e-Takmeel",
      emptyTitle: "Certificates jald shamil kiye jayenge",
      emptyDescription: "Yeh section tayyar hai — certificates jald yahan shamil kiye jayenge.",
      issuedLabel: "Jari kunanda",
    },
    competitions: {
      eyebrow: "06 · COMPETITIONS",
      heading: "Competitions",
      subtitle: "Wo competitions aur hackathons jin mein shirkat ki gayi ya apply kiya gaya.",
      emptyTitle: "Abhi kuch bhi darj nahi",
      emptyDescription: "Competitions ki tafseelat jald yahan shamil ki jayengi.",
    },
    education: {
      eyebrow: "07 · EDUCATION",
      heading: "Taleemi safar",
    },
    achievements: {
      eyebrow: "08 · ACHIEVEMENTS",
      heading: "Ab tak ke sang-e-meel",
    },
    contact: {
      eyebrow: "09 · CONTACT",
      heading: "Aayein kuch aisa banayein jo ship karne ke qabil ho.",
      subheading: "Internships, collaborations aur AI ya full-stack engineering ke dilchasp masail ke liye dastyab hoon.",
      formNote: "YA SEEDHA MESSAGE BHEJEIN",
      nameLabel: "AAP KA NAAM",
      namePlaceholder: "Jane Doe",
      emailLabel: "AAP KA EMAIL",
      emailPlaceholder: "jane@example.com",
      messageLabel: "MESSAGE",
      messagePlaceholder: "Aap mil kar kya banana chahenge?",
      sendButton: "Message bhejein",
      sending: "Bheja ja raha hai…",
      resendNote: "Server Action ke zariye Resend se bheja gaya — koi client-side API key zahir nahi hoti.",
      whatsappButton: "WhatsApp par baat karein",
    },
    footer: {
      rights: "Jumla huqooq mehfooz hain.",
      backToTop: "Upar jayein ↑",
    },
    chatbot: {
      title: "Byte",
      subtitle: "AI assistant · Moeez ki profile par mabni",
      welcome: "Salam, main Byte hoon 👋 Moeez ke baray mein kuch bhi poochein — skills, projects, taleem, kamyabiyan, ya koi project idea batayein aur main bataunga ke unki skills is par kaisay fit baithti hain.",
      placeholder: "Moeez ke baray mein poochein...",
      closeLabel: "Chat band karein",
    },
    langSwitcher: { label: "Zabaan" },
  },
};
