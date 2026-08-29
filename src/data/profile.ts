import type { Profile } from "@/types";

/**
 * Single source of truth for every fact this site displays or the chatbot
 * answers from. Text a visitor actually reads is stored per-locale
 * (`{ en, ur, ru }` — English, Urdu script, Roman Urdu); links, dates, tech
 * names and other language-agnostic facts stay as plain strings.
 *
 * Edit this file, then re-run `npm run seed:embeddings` so the chatbot's
 * knowledge stays in sync (the chatbot's retrieval corpus is built from the
 * `en` strings — see src/lib/ai/knowledge.ts — and the model translates its
 * reply to match whatever language the visitor is writing in).
 *
 * Projects here are a verified fallback (from moeezmalik10's real public
 * repos). `/api/github` refreshes this list live at runtime — see
 * src/lib/integrations/github.ts.
 */
export const profile: Profile = {
  name: "Muhammad Moeez",
  role: {
    en: "Deep Learning & Full-Stack Developer",
    ur: "ڈیپ لرننگ اور فل سٹیک ڈویلپر",
    ru: "Deep Learning aur Full-Stack Developer",
  },
  location: "Gujranwala, Punjab, Pakistan",
  email: "malikmoeez152@gmail.com",
  whatsapp: "923076138900",
  githubUsername: "moeezmalik10",
  linkedinUrl: "https://www.linkedin.com/in/muhammad-moeez-malik/",
  tagline: {
    en: "A Deep Learning & Full-Stack developer who builds end-to-end products — from NumPy-only neural nets to production-ready web apps.",
    ur: "ایک ڈیپ لرننگ اور فل سٹیک ڈویلپر جو مکمل پراڈکٹس تیار کرتا ہے — صرف NumPy سے بنے نیورل نیٹس سے لے کر پروڈکشن کے لیے تیار ویب ایپس تک۔",
    ru: "Ek Deep Learning aur Full-Stack developer jo end-to-end products banata hai — sirf NumPy se banay neural nets se le kar production-ready web apps tak.",
  },
  bio: {
    en: [
      "I'm Muhammad Moeez, a developer based in Gujranwala, Pakistan, currently pursuing a Bachelor of Information Technology at the University of Gujrat.",
      "My work sits at the intersection of two disciplines: teaching machines to understand data, and building the interfaces people actually use to interact with it.",
      "On the AI side, I've implemented neural networks from scratch with nothing but NumPy, and trained convolutional models like ResNet-18 for real-world medical imaging problems. On the engineering side, I build responsive front-ends with React, mobile apps with Flutter, and backends with Node and Flask.",
    ],
    ur: [
      "میں محمد معیض ہوں، گوجرانوالہ، پاکستان سے تعلق رکھنے والا ایک ڈویلپر، جو اس وقت یونیورسٹی آف گجرات سے بیچلر آف انفارمیشن ٹیکنالوجی کر رہا ہوں۔",
      "میرا کام دو شعبوں کے سنگم پر ہے: مشینوں کو ڈیٹا سمجھنا سکھانا، اور وہ انٹرفیس بنانا جو لوگ اصل میں استعمال کرتے ہیں۔",
      "AI کے حوالے سے، میں نے صرف NumPy کے ذریعے نیورل نیٹ ورکس شروع سے بنائے ہیں، اور ResNet-18 جیسے convolutional ماڈلز کو حقیقی میڈیکل امیجنگ مسائل کے لیے تربیت دی ہے۔ انجینئرنگ کے حوالے سے، میں React سے ریسپانسو فرنٹ اینڈز، Flutter سے موبائل ایپس، اور Node اور Flask سے بیک اینڈز بناتا ہوں۔",
    ],
    ru: [
      "Main Muhammad Moeez hoon, Gujranwala, Pakistan se taluq rakhne wala ek developer, jo is waqt University of Gujrat se Bachelor of Information Technology kar raha hoon.",
      "Mera kaam do disciplines ke intersection par hai: machines ko data samajhna sikhana, aur wo interfaces banana jo log asal mein istemal karte hain.",
      "AI ki taraf se, maine sirf NumPy ke zariye neural networks scratch se banaye hain, aur ResNet-18 jaisay convolutional models ko real-world medical imaging problems ke liye train kiya hai. Engineering ki taraf se, main React se responsive front-ends, Flutter se mobile apps, aur Node aur Flask se backends banata hoon.",
    ],
  },
  socials: [
    { name: "GitHub", url: "https://github.com/moeezmalik10", colorHex: "#181717" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-moeez-malik/", colorHex: "#0077B5" },
    { name: "WhatsApp", url: "https://wa.me/923076138900", colorHex: "#25D366" },
    { name: "X-Twitter", url: "https://twitter.com/_mr_malik___", colorHex: "#000000" },
    { name: "Facebook", url: "https://www.facebook.com/mr.malik.333/", colorHex: "#1877F2" },
    { name: "Instagram", url: "https://www.instagram.com/_mrmalik.10/", colorHex: "#E4405F" },
  ],
  skills: [
    {
      title: { en: "Deep Learning & AI", ur: "ڈیپ لرننگ اور اے آئی", ru: "Deep Learning aur AI" },
      points: {
        en: [
          "Building models for deep learning & statistical use cases",
          "Computer vision & NLP project experience",
          "Quantitative modelling for forecasting & time series",
        ],
        ur: [
          "ڈیپ لرننگ اور شماریاتی استعمال کے لیے ماڈلز بنانا",
          "کمپیوٹر ویژن اور این ایل پی پراجیکٹس کا تجربہ",
          "پیش گوئی اور ٹائم سیریز کے لیے مقداری ماڈلنگ",
        ],
        ru: [
          "Deep learning aur statistical use cases ke liye models banana",
          "Computer vision aur NLP projects ka tajurba",
          "Forecasting aur time series ke liye quantitative modelling",
        ],
      },
      stack: [
        { name: "TensorFlow" },
        { name: "Keras" },
        { name: "PyTorch" },
        { name: "Python" },
        { name: "NumPy" },
      ],
    },
    {
      title: { en: "Full-Stack Development", ur: "فل سٹیک ڈویلپمنٹ", ru: "Full-Stack Development" },
      points: {
        en: [
          "Responsive front-ends with React",
          "Mobile apps with Flutter, React Native & Kotlin",
          "Backends in Node, Express & Flask",
        ],
        ur: [
          "React کے ساتھ ریسپانسو فرنٹ اینڈز",
          "Flutter، React Native اور Kotlin کے ساتھ موبائل ایپس",
          "Node، Express اور Flask میں بیک اینڈز",
        ],
        ru: [
          "React ke sath responsive front-ends",
          "Flutter, React Native aur Kotlin ke sath mobile apps",
          "Node, Express aur Flask mein backends",
        ],
      },
      stack: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript" },
        { name: "React" },
        { name: "Node.js" },
        { name: "Flutter" },
      ],
    },
  ],
  competitiveProfiles: [
    { name: "LeetCode", url: "https://leetcode.com/u/uPBsdbnJOS/" },
    { name: "HackerRank", url: "https://www.hackerrank.com/profile/malikmoeez152" },
    { name: "Kaggle", url: "https://www.kaggle.com/mrmoeez" },
  ],
  education: [
    {
      institution: "University of Gujrat",
      degree: {
        en: "Bachelor of Information Technology",
        ur: "بیچلر آف انفارمیشن ٹیکنالوجی",
        ru: "Bachelor of Information Technology",
      },
      duration: "2023 — 2027",
      description: {
        en: "Coursework spanning Explainable AI, Graph Machine Learning and Computer Vision. Also involved with the university's multimedia department, working on documentary films and interviews.",
        ur: "نصاب میں Explainable AI، Graph Machine Learning اور Computer Vision شامل ہیں۔ اس کے علاوہ یونیورسٹی کے ملٹی میڈیا ڈیپارٹمنٹ سے بھی وابستہ رہا، جہاں دستاویزی فلموں اور انٹرویوز پر کام کیا۔",
        ru: "Coursework mein Explainable AI, Graph Machine Learning aur Computer Vision shamil hain. Iske ilawa university ke multimedia department se bhi wabasta raha, jahan documentary films aur interviews par kaam kiya.",
      },
    },
    {
      institution: "Punjab College",
      degree: {
        en: "Intermediate in Computer Science",
        ur: "انٹرمیڈیٹ اِن کمپیوٹر سائنس",
        ru: "Intermediate in Computer Science",
      },
      duration: "2021 — 2023",
      description: {
        en: "Core computer science foundations — Data Structures, Algorithms, DBMS, Operating Systems and Computer Architecture — alongside self-directed courses in Deep Learning, Data Science, Cloud Computing and Full-Stack Development.",
        ur: "کمپیوٹر سائنس کی بنیادی تعلیم — ڈیٹا سٹرکچرز، الگورتھمز، DBMS، آپریٹنگ سسٹمز اور کمپیوٹر آرکیٹیکچر — کے ساتھ ساتھ Deep Learning، Data Science، Cloud Computing اور Full-Stack Development کے خود سے کیے گئے کورسز۔",
        ru: "Computer science ki bunyadi taleem — Data Structures, Algorithms, DBMS, Operating Systems aur Computer Architecture — ke sath sath Deep Learning, Data Science, Cloud Computing aur Full-Stack Development ke khud se kiye gaye courses.",
      },
    },
  ],
  achievements: [
    {
      title: { en: "Public Repositories", ur: "پبلک ریپوزیٹریز", ru: "Public Repositories" },
      value: "9+",
      description: {
        en: "Shipped and open-sourced across machine learning, computer vision and full-stack web on GitHub.",
        ur: "GitHub پر مشین لرننگ، کمپیوٹر ویژن اور فل سٹیک ویب پر مشتمل پراجیکٹس شپ اور اوپن سورس کیے۔",
        ru: "GitHub par machine learning, computer vision aur full-stack web par mushtamil projects ship aur open-source kiye.",
      },
    },
    {
      title: { en: "Neural Net From Scratch", ur: "شروع سے نیورل نیٹ", ru: "Neural Net From Scratch" },
      value: "0 → 1",
      description: {
        en: "Implemented a multilayer perceptron for face recognition using nothing but NumPy.",
        ur: "صرف NumPy استعمال کرتے ہوئے چہرہ شناخت کے لیے ایک multilayer perceptron تیار کیا۔",
        ru: "Sirf NumPy istemal karte huay face recognition ke liye ek multilayer perceptron banaya.",
      },
    },
    {
      title: { en: "Live Deployments", ur: "لائیو ڈیپلائمنٹس", ru: "Live Deployments" },
      value: "3",
      description: {
        en: "The Living Archive, NeoShop and DirectionWise — all built, deployed and publicly reachable.",
        ur: "The Living Archive، NeoShop اور DirectionWise — سب بنائے، ڈیپلائے کیے اور عوامی سطح پر قابلِ رسائی ہیں۔",
        ru: "The Living Archive, NeoShop aur DirectionWise — sab banaye, deploy kiye aur publicly accessible hain.",
      },
    },
    {
      title: { en: "Competitive Platforms", ur: "مسابقتی پلیٹ فارمز", ru: "Competitive Platforms" },
      value: "3",
      description: {
        en: "Active problem solver on LeetCode, HackerRank and Kaggle.",
        ur: "LeetCode، HackerRank اور Kaggle پر متحرک پرابلم سالور۔",
        ru: "LeetCode, HackerRank aur Kaggle par active problem solver.",
      },
    },
    {
      title: { en: "Documentary Contributor", ur: "ڈاکیومنٹری میں تعاون", ru: "Documentary Contributor" },
      value: "Multimedia",
      description: {
        en: "Worked with University of Gujrat's multimedia department on documentary films and interviews.",
        ur: "یونیورسٹی آف گجرات کے ملٹی میڈیا ڈیپارٹمنٹ کے ساتھ دستاویزی فلموں اور انٹرویوز پر کام کیا۔",
        ru: "University of Gujrat ke multimedia department ke sath documentary films aur interviews par kaam kiya.",
      },
    },
  ],
  projects: [
    {
      slug: "recognition-system",
      title: "Face Recognition System",
      category: { en: "Machine Learning", ur: "مشین لرننگ", ru: "Machine Learning" },
      description: {
        en: "A from-scratch face recognition system built with a NumPy-only multilayer perceptron — no deep learning frameworks, just linear algebra and gradient descent, implemented by hand.",
        ur: "ایک ایسا face recognition سسٹم جو مکمل طور پر NumPy سے بنے multilayer perceptron پر مبنی ہے — کوئی deep learning framework استعمال نہیں کیا گیا، صرف linear algebra اور gradient descent ہاتھ سے لکھے گئے۔",
        ru: "Ek aisa face recognition system jo mukammal tor par NumPy se banay multilayer perceptron par mabni hai — koi deep learning framework istemal nahi kiya gaya, sirf linear algebra aur gradient descent haath se likhe gaye.",
      },
      tags: ["Python", "NumPy", "Jupyter"],
      githubUrl: "https://github.com/moeezmalik10/recognition-system",
      featured: true,
    },
    {
      slug: "alzheimer-detection",
      title: "Alzheimer's Disease Detection",
      category: { en: "Medical Imaging", ur: "میڈیکل امیجنگ", ru: "Medical Imaging" },
      description: {
        en: "A deep learning pipeline that classifies Alzheimer's disease stages from brain MRI scans using a fine-tuned ResNet-18 convolutional network.",
        ur: "ایک deep learning pipeline جو fine-tuned ResNet-18 convolutional نیٹ ورک کے ذریعے دماغی MRI اسکینز سے الزائمر کے مرض کے مراحل کی درجہ بندی کرتا ہے۔",
        ru: "Ek deep learning pipeline jo fine-tuned ResNet-18 convolutional network ke zariye brain MRI scans se Alzheimer's disease ke stages classify karta hai.",
      },
      tags: ["Python", "ResNet-18", "Computer Vision"],
      githubUrl: "https://github.com/moeezmalik10/Alzheimer-s-Disease-Detection-using-MRI-Images",
      featured: true,
    },
    {
      slug: "the-living-archive",
      title: "The Living Archive",
      category: { en: "Full Stack", ur: "فل سٹیک", ru: "Full Stack" },
      description: {
        en: "A platform for documenting discoveries and urban exploration — built for explorers to log, tag, and share findings from abandoned places and hidden spots.",
        ur: "دریافتوں اور urban exploration کو دستاویزی شکل دینے کے لیے ایک پلیٹ فارم — جہاں ایکسپلورر متروکہ مقامات اور پوشیدہ جگہوں سے اپنی دریافتیں لاگ، ٹیگ اور شیئر کر سکتے ہیں۔",
        ru: "Dariyaftoon aur urban exploration ko documentary shakal dene ke liye ek platform — jahan explorers matrooka muqamat aur poshida jagahon se apni dariyaftain log, tag aur share kar sakte hain.",
      },
      tags: ["TypeScript", "Web App"],
      githubUrl: "https://github.com/moeezmalik10/the-living-archive",
      liveUrl: "https://the-living-archive-neon.vercel.app",
      featured: true,
    },
    {
      slug: "spinnspice",
      title: "SpinNSpice",
      category: { en: "Management System", ur: "مینجمنٹ سسٹم", ru: "Management System" },
      description: {
        en: "A restaurant management system for handling orders, menus, and day-to-day operations end to end.",
        ur: "ایک ریسٹورنٹ مینجمنٹ سسٹم جو آرڈرز، مینیوز اور روزمرہ کے آپریشنز کو مکمل طور پر سنبھالتا ہے۔",
        ru: "Ek restaurant management system jo orders, menus aur roz mara ke operations ko mukammal tor par sambhalta hai.",
      },
      tags: ["C#", ".NET"],
      githubUrl: "https://github.com/moeezmalik10/SpinNSpice",
      featured: false,
    },
    {
      slug: "directionwise",
      title: "DirectionWise",
      category: { en: "AI · EdTech", ur: "اے آئی · ایڈٹیک", ru: "AI · EdTech" },
      description: {
        en: "A career-counselling tool that helps students explore paths and make informed decisions about their future.",
        ur: "ایک career counselling ٹول جو طلبہ کو مختلف راستے سمجھنے اور اپنے مستقبل کے بارے میں باخبر فیصلے کرنے میں مدد دیتا ہے۔",
        ru: "Ek career counselling tool jo talaba ko mukhtalif raste samajhne aur apne mustaqbil ke baray mein bakhabar faislay karne mein madad deta hai.",
      },
      tags: ["Python", "Streamlit"],
      githubUrl: "https://github.com/moeezmalik10/directionwise",
      liveUrl: "https://directionwise-jx2y43b9mxn9rtbnhgmqcw.streamlit.app/",
      featured: true,
    },
    {
      slug: "neoshop",
      title: "NeoShop",
      category: { en: "Frontend", ur: "فرنٹ اینڈ", ru: "Frontend" },
      description: {
        en: "A demo e-commerce storefront showcasing product browsing, cart interactions, and a clean, modern shopping UI.",
        ur: "ایک ڈیمو e-commerce سٹور فرنٹ جو پراڈکٹ براؤزنگ، کارٹ کے تعامل اور ایک صاف ستھرے، جدید شاپنگ UI کو ظاہر کرتا ہے۔",
        ru: "Ek demo e-commerce storefront jo product browsing, cart interactions aur ek saaf sutharay, jadeed shopping UI ko zahir karta hai.",
      },
      tags: ["JavaScript", "E-Commerce"],
      githubUrl: "https://github.com/moeezmalik10/NeoShop",
      liveUrl: "https://neo-shop-eta.vercel.app",
      featured: false,
    },
  ],

  /**
   * Projects in progress or planned but not shipped yet. Add more following
   * this shape (status is free text like "In Progress" / "Planned" / "Research"):
   *
   * {
   *   slug: "my-next-thing",
   *   title: "My Next Thing",
   *   status: { en: "In Progress", ur: "زیرِ تکمیل", ru: "Zair-e-Takmeel" },
   *   eta: "Q1 2027", // optional
   *   description: {
   *     en: "One or two sentences on what it does and why.",
   *     ur: "اردو میں ایک یا دو جملے۔",
   *     ru: "Roman Urdu mein ek ya do jumlay.",
   *   },
   *   tags: ["Python", "PyTorch"],
   * },
   */
  upcomingProjects: [
    {
      slug: "nuzm-tech-website",
      title: "NUZM Tech — Full-Stack Website",
      status: { en: "In Progress", ur: "زیرِ تکمیل", ru: "Zair-e-Takmeel" },
      description: {
        en: "A full-stack website build for NUZM Tech, covering the complete product from front-end to backend infrastructure.",
        ur: "NUZM Tech کے لیے ایک مکمل فل سٹیک ویب سائٹ، فرنٹ اینڈ سے لے کر بیک اینڈ انفراسٹرکچر تک۔",
        ru: "NUZM Tech ke liye ek mukammal full-stack website, front-end se le kar backend infrastructure tak.",
      },
      tags: ["Full Stack", "Web Development"],
    },
    {
      slug: "ai-humanizer",
      title: "AI Humanizer",
      status: { en: "In Progress", ur: "زیرِ تکمیل", ru: "Zair-e-Takmeel" },
      description: {
        en: "A tool that rewrites AI-generated text to read more naturally and human, for writers who want their AI-assisted drafts to sound authentically their own.",
        ur: "ایک ٹول جو AI سے تیار کردہ متن کو زیادہ فطری اور انسانی انداز میں لکھتا ہے، تاکہ AI کی مدد سے لکھا گیا مواد حقیقی طور پر اپنا محسوس ہو۔",
        ru: "Ek tool jo AI se tayyar karda text ko zyada fitri aur insani andaz mein likhta hai, taake AI ki madad se likha gaya mawad haqeeqi tor par apna mehsoos ho.",
      },
      tags: ["AI", "NLP"],
    },
    {
      slug: "mental-health-student-life-review",
      title: "The Interplay between Mental Health and Student Life in Higher Education: An Examination of Contributing Factors and Resilience Strategies",
      status: { en: "Writing", ur: "تحریر جاری ہے", ru: "Tehreer Jari Hai" },
      description: {
        en: "A review paper examining how mental health and student life interact in higher education — the factors that put students at risk, and the resilience strategies that help them cope.",
        ur: "ایک review paper جو یہ جانچتا ہے کہ اعلیٰ تعلیم میں ذہنی صحت اور طلبہ کی زندگی کیسے آپس میں جڑی ہوئی ہیں — وہ عوامل جو طلبہ کو خطرے میں ڈالتے ہیں، اور وہ حکمتِ عملیاں جو انہیں مقابلہ کرنے میں مدد دیتی ہیں۔",
        ru: "Ek review paper jo yeh janchta hai ke aali taleem mein zehni sehat aur talaba ki zindagi kaise aapas mein judi hui hain — wo awamil jo talaba ko khatray mein dalte hain, aur wo hikmat-e-amliyan jo unhein muqabla karne mein madad deti hain.",
      },
      tags: ["Review Paper", "Mental Health", "Higher Education"],
    },
    {
      slug: "automata-computer-game-paper",
      title: "Designing a Computer Game Using the Theory of Automata",
      status: { en: "Research", ur: "تحقیق جاری ہے", ru: "Tahqeeq Jari Hai" },
      description: {
        en: "A research paper exploring how finite automata and formal language theory can be used to design and drive the logic of a computer game.",
        ur: "ایک تحقیقی مقالہ جو یہ دریافت کرتا ہے کہ finite automata اور formal language theory کو کمپیوٹر گیم کے ڈیزائن اور منطق کے لیے کیسے استعمال کیا جا سکتا ہے۔",
        ru: "Ek tehqeeqi maqala jo yeh daryaft karta hai ke finite automata aur formal language theory ko computer game ke design aur mantiq ke liye kaise istemal kiya ja sakta hai.",
      },
      tags: ["Automata Theory", "Game Development", "Research Paper"],
    },
    {
      slug: "alzheimer-gradcam-paper",
      title: "Alzheimer's Disease Stage Classification and Detection Using ResNet-18 with Grad-CAM: A Quantitatively Validated Explainability Approach",
      status: { en: "Research", ur: "تحقیق جاری ہے", ru: "Tahqeeq Jari Hai" },
      description: {
        en: "A research paper extending the Alzheimer's detection work with Grad-CAM-based explainability, quantitatively validating that the ResNet-18 model's attention aligns with clinically relevant regions.",
        ur: "ایک تحقیقی مقالہ جو الزائمر کی تشخیص کے کام کو Grad-CAM پر مبنی explainability کے ساتھ آگے بڑھاتا ہے، اور مقداری طور پر ثابت کرتا ہے کہ ResNet-18 ماڈل کی توجہ طبی طور پر اہم حصوں سے ہم آہنگ ہے۔",
        ru: "Ek tehqeeqi maqala jo Alzheimer's ki tashkhees ke kaam ko Grad-CAM par mabni explainability ke sath aagay barhata hai, aur miqdari tor par sabit karta hai ke ResNet-18 model ki tawajjo tibbi tor par aham hisson se hum-aahang hai.",
      },
      tags: ["ResNet-18", "Grad-CAM", "Explainable AI", "Research Paper"],
    },
    {
      slug: "jarvis-ai-system",
      title: "Jarvis — Mobile & Laptop Automated AI System",
      status: { en: "In Progress", ur: "زیرِ تکمیل", ru: "Zair-e-Takmeel" },
      description: {
        en: "A voice-driven AI automation system for both mobile and laptop, aimed at handling everyday tasks hands-free — inspired by the classic sci-fi assistant.",
        ur: "ایک آواز پر مبنی AI automation سسٹم جو موبائل اور لیپ ٹاپ دونوں پر روزمرہ کے کام بغیر ہاتھ لگائے سنبھالتا ہے۔",
        ru: "Ek awaaz par mabni AI automation system jo mobile aur laptop dono par roz mara ke kaam baghair haath lagaye sambhalta hai.",
      },
      tags: ["AI", "Automation"],
    },
  ],

  /**
   * Add certificates here once you send the folder. Shape:
   * {
   *   slug: "course-name",
   *   title: "Course / Certificate Name",
   *   issuer: "Coursera" | "IBM" | etc,
   *   status: "completed" | "in-progress",
   *   date: "2026", // optional
   *   credentialUrl: "https://...", // optional
   *   imageUrl: "/certificates/whatever.png", // optional, once images are added
   * },
   */
  certificates: [],

  /**
   * Add competitions here once you send the folder. Shape:
   * {
   *   slug: "competition-name",
   *   name: "Competition Name",
   *   organizer: "Organizer Name", // optional
   *   status: { en: "Applied", ur: "درخواست دی گئی", ru: "Darkhwast Di Gayi" },
   *   date: "2026", // optional
   *   description: { en: "...", ur: "...", ru: "..." },
   *   url: "https://...", // optional
   * },
   */
  competitions: [],
};
