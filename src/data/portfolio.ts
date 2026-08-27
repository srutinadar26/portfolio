// Central data file. Edit this file to update site content —
// components read from here so copy and visuals stay in sync.

export const personal = {
  firstName: "SRUTI",
  lastName: "NADAR",
  fullName: "Sruti Nadar",
  role: "SOFTWARE • WEB • AI/ML",
  statement:
    "Building digital products at the intersection of engineering and design — from interfaces to the data underneath them.",
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

// Technologies for the floating balls visualization
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
  { name: "Scikit-learn", icon: "scikitlearn" },
  { name: "TensorFlow", icon: "tensorflow" },
  { name: "Transformers", icon: "transformers" },
  { name: "FastAPI", icon: "fastapi" },
  { name: "Flask", icon: "flask" },
  { name: "Docker", icon: "docker" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Socket.IO", icon: "socketio" },
];

// Keep skillCategories for the existing Skills section structure
export const skillCategories = [
  {
    label: "FRONTEND",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    label: "BACKEND",
    skills: ["Node.js", "Express", "FastAPI", "Flask"],
  },
  {
    label: "DATABASE",
    skills: ["MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    label: "AI / ML / DATA",
    skills: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Transformers"],
  },
  {
    label: "TOOLS",
    skills: ["Git", "GitHub", "Docker", "Socket.IO"],
  },
];

// Simple connection graph for the tech constellation visualization.
export const skillConnections: [string, string][] = [
  ["React", "JavaScript"],
  ["JavaScript", "HTML"],
  ["JavaScript", "CSS"],
  ["Node.js", "Express"],
  ["Express", "MongoDB"],
  ["Node.js", "MongoDB"],
  ["Python", "NumPy"],
  ["NumPy", "Pandas"],
  ["Pandas", "Scikit-learn"],
  ["Python", "TensorFlow"],
  ["TensorFlow", "Transformers"],
  ["Python", "FastAPI"],
  ["Python", "Flask"],
  ["Git", "GitHub"],
  ["PostgreSQL", "FastAPI"],
  ["Firebase", "React"],
  ["Tailwind CSS", "CSS"],
  ["Docker", "Node.js"],
  ["Socket.IO", "Node.js"],
];

// Fill in real milestones — education, hackathons, projects, research.
export const journey: {
  date: string;
  title: string;
  description: string;
  tag: string;
}[] = [
  {
    date: "IN PROGRESS",
    title: "Add your education milestone",
    description:
      "Replace this entry in src/data/portfolio.ts with real degree, coursework, or program details.",
    tag: "EDUCATION",
  },
  {
    date: "IN PROGRESS",
    title: "Add a project or hackathon milestone",
    description:
      "Replace this entry with a real hackathon, research project, or technical milestone.",
    tag: "MILESTONE",
  },
];

export const projects: {
  number: string;
  name: string;
  description: string;
  stack: string[];
  kind: "web" | "ai" | "database" | "creative";
  github?: string;
  live?: string;
}[] = [
  {
    number: "01",
    name: "SyncSpace",
    description: "Real-time collaborative workspace.",
    stack: ["REACT", "NODE.JS", "SOCKET.IO", "MONGODB"],
    kind: "web",
    github: "https://github.com/srutinadar26/SyncSpace",
  },
  {
    number: "02",
    name: "UPI Sentinel",
    description:
      "AI-powered payment scam prevention and fraud intelligence platform.",
    stack: ["PYTHON", "FASTAPI", "REACT", "TENSORFLOW"],
    kind: "ai",
    github: "https://github.com/srutinadar26/UPI-sentinel",
  },
  {
    number: "03",
    name: "MedVerify",
    description:
      "AI-powered medical misinformation detection and verification system.",
    stack: ["PYTHON", "TRANSFORMERS", "REACT", "FLASK"],
    kind: "ai",
    github: "https://github.com/srutinadar26/MedVerify",
  },
  {
    number: "04",
    name: "Harvestify",
    description:
      "AI-powered agriculture platform for crop recommendations and agricultural assistance.",
    stack: ["PYTHON", "SCIKIT-LEARN", "FLASK", "HTML/CSS"],
    kind: "ai",
    github: "https://github.com/srutinadar26/Harvestify",
  },
  {
    number: "05",
    name: "Movie Review System",
    description: "Movie discovery and review platform.",
    stack: ["NODE.JS", "EXPRESS", "MONGODB", "EJS"],
    kind: "web",
    github: "https://github.com/srutinadar26/movie-review-system",
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
