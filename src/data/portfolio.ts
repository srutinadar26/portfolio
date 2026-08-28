export const personal = {
  firstName: "SRUTI",
  lastName: "NADAR",
  fullName: "Sruti Nadar",

  statement:
    "Building digital products at the intersection of AI, engineering, and design, from intelligent interfaces to the data underneath them.",

  email: "shruti.nadar26@gmail.com",

  socials: {
    github: "https://github.com/srutinadar26",
    linkedin: "https://www.linkedin.com/in/srutinadar/",
    twitter: "https://x.com/srutinadar26",
  },

  resumeUrl:
    "https://drive.google.com/file/d/1kL_lvQyudHkmEI_66r5IYH2DJTfUvBoU/view?usp=sharing",
};

export const introduction = {
  eyebrow: "01 / INTRODUCTION",

  bio: [
    "I'm Sruti Nadar, an Artificial Intelligence & Data Science Engineer passionate about building AI-powered applications and full-stack products. I enjoy turning real-world problems into practical software using AI, data, and modern web technologies.",
  ],

  focusAreas: [
    "AI / ML",
    "Full-Stack Development",
    "Data Science",
    "Web Development",
  ],
};

export const technologies = [
  {
    name: "Python",
    icon: "python",
  },
  {
    name: "JavaScript",
    icon: "javascript",
  },
  {
    name: "React",
    icon: "react",
  },
  {
    name: "Node.js",
    icon: "nodejs",
  },
  {
    name: "Express",
    icon: "express",
  },
  {
    name: "HTML",
    icon: "html",
  },
  {
    name: "CSS",
    icon: "css",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
  },
  {
    name: "Firebase",
    icon: "firebase",
  },
  {
    name: "NumPy",
    icon: "numpy",
  },
  {
    name: "Pandas",
    icon: "pandas",
  },
  {
    name: "Matplotlib",
    icon: "matplotlib",
  },
  {
    name: "Seaborn",
    icon: "seaborn",
  },
  {
    name: "Scikit-learn",
    icon: "scikitlearn",
  },
  {
    name: "TensorFlow",
    icon: "tensorflow",
  },
  {
    name: "Docker",
    icon: "docker",
  },
  {
    name: "Git",
    icon: "git",
  },
  {
    name: "GitHub",
    icon: "github",
  },
];

export const skillCategories = [
  {
    label: "FRONTEND",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
    ],
  },

  {
    label: "BACKEND",
    skills: [
      "Node.js",
      "Express",
      "FastAPI",
      "Flask",
    ],
  },

  {
    label: "DATABASE",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Firebase",
    ],
  },

  {
    label: "AI / ML / DATA",
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "TensorFlow",
      "Transformers",
    ],
  },

  {
    label: "CLOUD / TOOLS",
    skills: [
      "AWS",
      "Docker",
      "Git",
      "GitHub",
    ],
  },
];

export const skillConnections: [string, string][] = [
  ["React", "JavaScript"],
  ["JavaScript", "HTML"],
  ["JavaScript", "CSS"],
  ["Tailwind CSS", "CSS"],
  ["Node.js", "Express"],
  ["Express", "MongoDB"],
  ["Node.js", "MongoDB"],
  ["PostgreSQL", "Node.js"],
  ["Firebase", "React"],
  ["Python", "NumPy"],
  ["NumPy", "Pandas"],
  ["Pandas", "Matplotlib"],
  ["Pandas", "Seaborn"],
  ["Pandas", "Scikit-learn"],
  ["Python", "TensorFlow"],
  ["Git", "GitHub"],
  ["Docker", "Node.js"],
];

/* =========================================================
   JOURNEY / PROJECT TIMELINE
   ========================================================= */

export interface JourneyItem {
  date: string;
  title: string;
  description: string;
  tag: string;
}

export const journey: JourneyItem[] = [
  {
    date: "2024",

    title:
      "B.E. Artificial Intelligence & Data Science — SIES Graduate School of Technology",

    description:
      "Started my B.E. in Artificial Intelligence & Data Science, building a foundation in software development, artificial intelligence, machine learning, data science, and modern web technologies.",

    tag: "EDUCATION",
  },

  {
    date: "August 2025",

    title:
      "Management Coordinator — ACM Student Chapter, SIES GST",

    description:
      "Joined the ACM Student Chapter as a Management Coordinator, contributing to technical events, workshops, student activities, and community initiatives.",

    tag: "LEADERSHIP",
  },

  {
    date: "March 2026",

    title:
      "Automation Bounty — AI Agent Challenge",

    description:
      "Built a Medical History Aggregator and Pre-Visit Brief Generator using n8n, exploring AI-powered workflow automation and agent-based systems.",

    tag: "COMPETITION",
  },

  {
    date: "April 2026",

    title:
      "Ace of Diamonds — Technovate 2026",

    description:
      "Reached the Top 20 among 61 teams with SafePath, a community-driven women's safety solution.",

    tag: "COMPETITION",
  },

  {
    date: "August 2026",

    title:
      "Smart India Hackathon (SIH) — Internal Selection",

    description:
      "Presented UPI Sentinel, an AI-powered UPI fraud prevention and behavioral security platform, as part of a team during the internal selection process.",

    tag: "COMPETITION",
  },

  {
    date: "August 2025 to August 2026",

    title:
      "Management Coordinator — ACM Student Chapter, SIES GST",

    description:
      "Coordinated technical events and workshops and contributed to organizing and hosting PARADOX 2026, an AI-themed hackathon.",

    tag: "LEADERSHIP",
  },

  {
    date: "2024 to Present · Expected 2028",

    title:
      "B.E. Artificial Intelligence & Data Science — SIES Graduate School of Technology",

    description:
      "Continuing my undergraduate journey while building AI-powered applications, full-stack products, data-driven systems, and research-oriented projects.",

    tag: "EDUCATION",
  },
];

/* =========================================================
   PROJECTS
   ========================================================= */

export const projects = [
  {
    name: "SyncSpace",

    description:
      "Real-time collaborative workspace for teams to communicate, organize, and work together.",

    stack: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Socket.IO", icon: "socketio" },
      { name: "MongoDB", icon: "mongodb" },
    ],

    image: "/images/projects/space.jpg",

    github:
      "https://github.com/srutinadar26/SyncSpace",
  },

  {
    name: "UPI Sentinel",

    description:
      "AI-powered payment scam prevention and fraud intelligence platform designed to detect suspicious UPI transactions and behavioral patterns.",

    stack: [
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "React", icon: "react" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Docker", icon: "docker" },
    ],

    image: "/images/projects/upi.jpg",

    github:
      "https://github.com/srutinadar26/UPI-sentinel",
  },

  {
    name: "MedVerify",

    description:
      "AI-powered medical misinformation detection and verification system that analyzes claims and provides evidence-based verification.",

    stack: [
      { name: "Python", icon: "python" },
      { name: "Transformers", icon: "huggingface" },
      { name: "React", icon: "react" },
      { name: "Flask", icon: "flask" },
    ],

    image: "/images/projects/med.jpg",

    github:
      "https://github.com/srutinadar26/MedVerify",
  },

  {
    name: "Harvestify",

    description:
      "AI-powered agriculture platform providing crop recommendations and intelligent agricultural assistance.",

    stack: [
      { name: "Python", icon: "python" },
      { name: "Scikit-learn", icon: "scikitlearn" },
      { name: "Flask", icon: "flask" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
    ],

    image: "/images/projects/harvestify.jpg",

    github:
      "https://github.com/srutinadar26/Harvestify",
  },

  {
    name: "Movie Review System",

    description:
      "Movie discovery and review platform where users can explore movies, watch trailers, manage reviews and watchlists, and receive personalized recommendations.",

    stack: [
      { name: "React", icon: "react" },
      { name: "Firebase", icon: "firebase" },
      { name: "TMDB API", icon: "tmdb" },
      { name: "Axios", icon: "axios" },
      { name: "JavaScript", icon: "javascript" },
      { name: "CSS", icon: "css" },
    ],

    image: "/images/projects/movie.jpg",

    github:
      "https://github.com/srutinadar26/movie-review-system",
  },
];

/* =========================================================
   NAVIGATION
   ========================================================= */

export const nav = [
  {
    label: "HOME",
    href: "hero",
  },

  {
    label: "ABOUT",
    href: "about",
  },

  {
    label: "SKILLS",
    href: "skills",
  },

  {
    label: "JOURNEY",
    href: "journey",
  },

  {
    label: "PROJECTS",
    href: "projects",
  },

  {
    label: "RESUME",
    href: "resume",
  },

  {
    label: "CONTACT",
    href: "contact",
  },
];