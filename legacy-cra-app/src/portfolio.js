/* Change this file to get your personal Porfolio */

// Website related settings

const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

const seo = {
  title: "Moeez Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Muhammad Moeez Portfolio",
    type: "website",
  },
};

//Home Page
const greeting = {
  title: "Muhammad Moeez  ",
  logo_name: "Muhammad Moeez ",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  githubProfile: "https://github.com/moeezmalik10",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/moeezmalik10",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-moeez-malik/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:malikmoeez152@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/_mr_malik___",
    fontAwesomeIcon: "fa-x-twitter",
    backgroundColor: "#000000",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/mr.malik.333/",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_mrmalik.10/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Deep Learning & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        { skillName: "Tensorflow", fontAwesomeClassname: "logos-tensorflow", style: { backgroundColor: "transparent" } },
        { skillName: "Keras", fontAwesomeClassname: "simple-icons:keras", style: { backgroundColor: "white", color: "#D00000" } },
        { skillName: "PyTorch", fontAwesomeClassname: "logos-pytorch", style: { backgroundColor: "transparent" } },
        { skillName: "Python", fontAwesomeClassname: "ion-logo-python", style: { backgroundColor: "transparent", color: "#3776AB" } },
        { skillName: "Deeplearning", imageSrc: "deeplearning_ai_logo.png" },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Js",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        { skillName: "HTML5", fontAwesomeClassname: "simple-icons:html5", style: { color: "#E34F26" } },
        { skillName: "CSS3", fontAwesomeClassname: "fa-css3", style: { color: "#1572B6" } },
        { skillName: "JavaScript", fontAwesomeClassname: "simple-icons:javascript", style: { backgroundColor: "#000000", color: "#F7DF1E" } },
        { skillName: "ReactJS", fontAwesomeClassname: "simple-icons:react", style: { color: "#61DAFB" } },
        { skillName: "NodeJS", fontAwesomeClassname: "devicon-plain:nodejs-wordmark", style: { color: "#339933" } },
        { skillName: "NPM", fontAwesomeClassname: "simple-icons:npm", style: { color: "#CB3837" } },
        { skillName: "Flutter", fontAwesomeClassname: "simple-icons:flutter", style: { color: "#02569B" } },
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [
    { siteName: "LeetCode", iconifyClassname: "simple-icons:leetcode", style: { color: "#F79F1B" }, profileLink: "https://leetcode.com/u/uPBsdbnJOS/" },
    { siteName: "HackerRank", iconifyClassname: "simple-icons:hackerrank", style: { color: "#2EC866" }, profileLink: "https://www.hackerrank.com/profile/malikmoeez152" },
    { siteName: "Kaggle", iconifyClassname: "simple-icons:kaggle", style: { color: "#20BEFF" }, profileLink: "https://www.kaggle.com/mrmoeez" },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Punjab Colleege",
      subtitle: "Intermediate in Computer Science",
      logo_path: "punjab.png",
      alt_name: "Punjab College",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I have studied basic computer science subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://pgc.edu/campus/gujranwala/",
    },
    {
      title: "University of Gujrat",
      subtitle: "Bachelor of Information Technology",
      logo_path: "uni.jpg",
      alt_name: "UOG",
      duration: "2023 - 2027",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.uog.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [],
};

const experience = {
  experience: [],
};

const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [{}, {}, {}],
};

const contactPageData = {
  contactSection: {},
  blogSection: {},
  addressSection: {},
  phoneSection: {},
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
