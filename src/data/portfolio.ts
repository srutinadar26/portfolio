export const personal = {
  firstName: "SRUTI",
  lastName: "NADAR",
  fullName: "Sruti Nadar",
  statement:
    "Building digital products at the intersection of engineering and design, from interfaces to the data underneath them.",
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
  { name: "Python", icon: "python" },
  { name: "JavaScript", icon: "javascript" },
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Firebase", icon: "firebase" },
  { name: "NumPy", icon: "numpy" },
  { name: "Pandas", icon: "pandas" },
  { name: "Matplotlib", icon: "matplotlib" },
  { name: "Seaborn", icon: "seaborn" },
  { name: "AWS", icon: "aws" },
  { name: "Docker", icon: "docker" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
];

export const skillCategories = [
  {
    label: "FRONTEND",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    label: "BACKEND",
    skills: ["Node.js", "Express"],
  },
  {
    label: "DATABASE",
    skills: ["MongoDB", "PostgreSQL", "Firebase"],
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
    ],
  },
  {
    label: "CLOUD / TOOLS",
    skills: ["AWS", "Git", "GitHub", "Docker"],
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
  ["Python", "NumPy"],
  ["NumPy", "Pandas"],
  ["Pandas", "Matplotlib"],
  ["Pandas", "Seaborn"],
  ["Pandas", "Scikit-learn"],
  ["Python", "TensorFlow"],
  ["Git", "GitHub"],
  ["PostgreSQL", "Node.js"],
  ["Firebase", "React"],
  ["Docker", "Node.js"],
];

export const journey: {
  date: string;
  title: string;
  description: string;
  tag: string;
}[] = [
    {
      date: "2024 to Present, ending 2028",
      title:
        "B.E. Artificial Intelligence & Data Science — SIES Graduate School of Technology",
      description:
        "Building a foundation in software development, artificial intelligence, machine learning, data science, and modern web technologies.",
      tag: "EDUCATION",
    },
    {
      date: "August 2026",
      title: "Smart India Hackathon (SIH), Internal Selection",
      description:
        "Presented UPI Sentinel, an AI-powered UPI fraud prevention platform, as part of a team.",
      tag: "COMPETITION",
    },
    {
      date: "March 2026",
      title: "Automation Bounty, AI Agent Challenge",
      description:
        "Built a Medical History Aggregator and Pre-Visit Brief Generator using n8n.",
      tag: "COMPETITION",
    },
    {
      date: "April 2026",
      title: "Ace of Diamonds, Technovate 2026",
      description:
        "Top 20 among 61 teams with SafePath, a community-driven women's safety solution.",
      tag: "COMPETITION",
    },
    {
      date: "August 2025 to August 2026",
      title:
        "Management Coordinator, ACM Student Chapter, SIES GST",
      description:
        "Coordinated technical events and workshops and hosted PARADOX 2026, an AI-themed hackathon.",
      tag: "LEADERSHIP",
    },
  ];

export const projects: {
  number: string;
  name: string;
  description: string;
  stack: string[];
  kind: "web" | "ai" | "database" | "creative";
  image: string;
  github?: string;
  live?: string;
}[] = [
    {
      number: "01",
      name: "SyncSpace",
      description: "Real-time collaborative workspace.",
      stack: ["REACT", "NODE.JS", "SOCKET.IO", "MONGODB"],
      kind: "web",
      image:
        "https://opengraph.githubassets.com/1/srutinadar26/SyncSpace",
      github: "https://github.com/srutinadar26/SyncSpace",
    },
    {
      number: "02",
      name: "UPI Sentinel",
      description:
        "AI-powered payment scam prevention and fraud intelligence platform.",
      stack: ["PYTHON", "FASTAPI", "REACT", "TENSORFLOW"],
      kind: "ai",
      image:
        "https://opengraph.githubassets.com/1/srutinadar26/UPI-sentinel",
      github: "https://github.com/srutinadar26/UPI-sentinel",
    },
    {
      number: "03",
      name: "MedVerify",
      description:
        "AI-powered medical misinformation detection and verification system.",
      stack: ["PYTHON", "TRANSFORMERS", "REACT", "FLASK"],
      kind: "ai",
      image:
        "https://opengraph.githubassets.com/1/srutinadar26/MedVerify",
      github: "https://github.com/srutinadar26/MedVerify",
    },
    {
      number: "04",
      name: "Harvestify",
      description:
        "AI-powered agriculture platform for crop recommendations and agricultural assistance.",
      stack: ["PYTHON", "SCIKIT-LEARN", "FLASK", "HTML/CSS"],
      kind: "ai",
      image:
        "https://opengraph.githubassets.com/1/srutinadar26/Harvestify",
      github: "https://github.com/srutinadar26/Harvestify",
    },
    {
      number: "05",
      name: "Movie Review System",
      description: "Movie discovery and review platform.",
      stack: ["NODE.JS", "EXPRESS", "MONGODB", "EJS"],
      kind: "web",
      image:
        "https://opengraph.githubassets.com/1/srutinadar26/movie-review-system",
      github:
        "https://github.com/srutinadar26/movie-review-system",
    },
  ];

export const nav = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "JOURNEY", href: "#journey" },
  { label: "PROJECTS", href: "#projects" },
  { label: "RESUME", href: "#resume" },
  { label: "CONTACT", href: "#contact" },
];