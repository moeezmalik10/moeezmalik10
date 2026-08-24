import type { Profile } from "@/types";

/**
 * Single source of truth for every fact this site displays or the chatbot
 * answers from. Edit this file, then re-run `npm run seed:embeddings` so the
 * chatbot's knowledge stays in sync.
 *
 * Projects here are a verified fallback (from moeezmalik10's real public
 * repos). `/api/github` refreshes this list live at runtime — see
 * src/lib/integrations/github.ts.
 */
export const profile: Profile = {
  name: "Muhammad Moeez",
  role: "Deep Learning & Full-Stack Developer",
  location: "Gujranwala, Punjab, Pakistan",
  email: "malikmoeez152@gmail.com",
  whatsapp: "923076138900",
  githubUsername: "moeezmalik10",
  mediumUsername: "moeezmalik10",
  linkedinUrl: "https://www.linkedin.com/in/muhammad-moeez-malik/",
  tagline:
    "A Deep Learning & Full-Stack developer who builds end-to-end products — from NumPy-only neural nets to production-ready web apps.",
  bio: [
    "I'm Muhammad Moeez, a developer based in Gujranwala, Pakistan, currently pursuing a Bachelor of Information Technology at the University of Gujrat.",
    "My work sits at the intersection of two disciplines: teaching machines to understand data, and building the interfaces people actually use to interact with it.",
    "On the AI side, I've implemented neural networks from scratch with nothing but NumPy, and trained convolutional models like ResNet-18 for real-world medical imaging problems. On the engineering side, I build responsive front-ends with React, mobile apps with Flutter, and backends with Node and Flask.",
  ],
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
      title: "Deep Learning & AI",
      points: [
        "Building models for deep learning & statistical use cases",
        "Computer vision & NLP project experience",
        "Quantitative modelling for forecasting & time series",
      ],
      stack: [
        { name: "TensorFlow" },
        { name: "Keras" },
        { name: "PyTorch" },
        { name: "Python" },
        { name: "NumPy" },
      ],
    },
    {
      title: "Full-Stack Development",
      points: [
        "Responsive front-ends with React",
        "Mobile apps with Flutter, React Native & Kotlin",
        "Backends in Node, Express & Flask",
      ],
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
      degree: "Bachelor of Information Technology",
      duration: "2023 — 2027",
      description:
        "Coursework spanning Explainable AI, Graph Machine Learning and Computer Vision. Also involved with the university's multimedia department, working on documentary films and interviews.",
    },
    {
      institution: "Punjab College",
      degree: "Intermediate in Computer Science",
      duration: "2021 — 2023",
      description:
        "Core computer science foundations — Data Structures, Algorithms, DBMS, Operating Systems and Computer Architecture — alongside self-directed courses in Deep Learning, Data Science, Cloud Computing and Full-Stack Development.",
    },
  ],
  achievements: [
    {
      title: "Public Repositories",
      value: "9+",
      description: "Shipped and open-sourced across machine learning, computer vision and full-stack web on GitHub.",
    },
    {
      title: "Neural Net From Scratch",
      value: "0 → 1",
      description: "Implemented a multilayer perceptron for face recognition using nothing but NumPy.",
    },
    {
      title: "Live Deployments",
      value: "3",
      description: "The Living Archive, NeoShop and DirectionWise — all built, deployed and publicly reachable.",
    },
    {
      title: "Competitive Platforms",
      value: "3",
      description: "Active problem solver on LeetCode, HackerRank and Kaggle.",
    },
    {
      title: "Documentary Contributor",
      value: "Multimedia",
      description: "Worked with University of Gujrat's multimedia department on documentary films and interviews.",
    },
  ],
  projects: [
    {
      slug: "recognition-system",
      title: "Face Recognition System",
      category: "Machine Learning",
      description:
        "A from-scratch face recognition system built with a NumPy-only multilayer perceptron — no deep learning frameworks, just linear algebra and gradient descent, implemented by hand.",
      tags: ["Python", "NumPy", "Jupyter"],
      githubUrl: "https://github.com/moeezmalik10/recognition-system",
      featured: true,
    },
    {
      slug: "alzheimer-detection",
      title: "Alzheimer's Disease Detection",
      category: "Medical Imaging",
      description:
        "A deep learning pipeline that classifies Alzheimer's disease stages from brain MRI scans using a fine-tuned ResNet-18 convolutional network.",
      tags: ["Python", "ResNet-18", "Computer Vision"],
      githubUrl: "https://github.com/moeezmalik10/Alzheimer-s-Disease-Detection-using-MRI-Images",
      featured: true,
    },
    {
      slug: "the-living-archive",
      title: "The Living Archive",
      category: "Full Stack",
      description:
        "A platform for documenting discoveries and urban exploration — built for explorers to log, tag, and share findings from abandoned places and hidden spots.",
      tags: ["TypeScript", "Web App"],
      githubUrl: "https://github.com/moeezmalik10/the-living-archive",
      liveUrl: "https://the-living-archive-neon.vercel.app",
      featured: true,
    },
    {
      slug: "spinnspice",
      title: "SpinNSpice",
      category: "Management System",
      description: "A restaurant management system for handling orders, menus, and day-to-day operations end to end.",
      tags: ["C#", ".NET"],
      githubUrl: "https://github.com/moeezmalik10/SpinNSpice",
      featured: false,
    },
    {
      slug: "directionwise",
      title: "DirectionWise",
      category: "AI · EdTech",
      description: "A career-counselling tool that helps students explore paths and make informed decisions about their future.",
      tags: ["Python", "Streamlit"],
      githubUrl: "https://github.com/moeezmalik10/directionwise",
      liveUrl: "https://directionwise-jx2y43b9mxn9rtbnhgmqcw.streamlit.app/",
      featured: true,
    },
    {
      slug: "neoshop",
      title: "NeoShop",
      category: "Frontend",
      description: "A demo e-commerce storefront showcasing product browsing, cart interactions, and a clean, modern shopping UI.",
      tags: ["JavaScript", "E-Commerce"],
      githubUrl: "https://github.com/moeezmalik10/NeoShop",
      liveUrl: "https://neo-shop-eta.vercel.app",
      featured: false,
    },
  ],
};
