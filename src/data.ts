import { 
  EducationItem, 
  ExperienceItem, 
  ProjectItem, 
  ResearchItem, 
  SkillCategory, 
  LeadershipItem 
} from "./types";

export const PERSONAL_INFO = {
  name: "Md. Najmul Hasan Shihab",
  title: "Machine Learning Engineer & Mobile Developer",
  subtitles: [
    "Machine Learning Engineer",
    "Flutter/Android Developer",
    "Competitive Programmer",
    "Research Scholar"
  ],
  email: "hasannajmul559@gmail.com",
  phone: "+8801812389380",
  location: "Sitakunda, Chittagong, Bangladesh",
  github: "https://github.com/Najmul-Hasan-Shihab",
  linkedin: "https://linkedin.com", // Professional placeholder
  codeforces: "https://codeforces.com/profile/Najmul-Hasan-Shihab", // CF info from CV
  codeforcesRating: "1439 (Specialist)",
  codechefRating: "1564 (2 Stars)",
  bio: "Highly motivated CSE graduate and researcher specializing in Machine Learning and Mobile App Development. Passionate about designing architectures, analyzing datasets for biomedical advancement, and engineered competitive programming algorithms to solve real-world complexities.",
  images: {
    portrait: "/src/assets/images/Gemini_Generated_Image_r2hk36r2hk36r2hk.png",
    heroBg: "/src/assets/images/hero_illustration_1781515192549.jpg",
    serviceAi: "/src/assets/images/service_ai_card_1781515212438.jpg",
    serviceMobile: "/src/assets/images/service_app_card_1781515230050.jpg",
    serviceCoding: "/src/assets/images/service_prog_card_1781515248274.jpg"
  }
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu1",
    institution: "International Islamic University Chittagong",
    degree: "BSc in Computer Science and Engineering",
    cgpa: "3.68 / 4.00 (Current)",
    location: "Kumira, Chittagong",
    period: "2022 – 2026"
  },
  {
    id: "edu2",
    institution: "Hazera Taju Degree College",
    degree: "Higher Secondary Certificate (HSC)",
    cgpa: "5.00 / 5.00",
    location: "Chandgaon, Chittagong",
    period: "2018 – 2019"
  },
  {
    id: "edu3",
    institution: "Teriail High School",
    degree: "Secondary School Certificate (SSC)",
    cgpa: "4.94 / 5.00",
    location: "Sitakunda, Chittagong",
    period: "2016 – 2017"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp1",
    role: "Teaching Assistant – Artificial Intelligence, Computer Networks, Numerical Methods",
    company: "International Islamic University Chittagong (IIUC)",
    location: "Kumira, Chittagong",
    period: "Ongoing",
    details: [
      "Assisted students with coursework, problem-solving sessions, tutorials, and assignment guidance across Artificial Intelligence, Computer Networks, and Numerical Methods courses.",
      "Supported course delivery by explaining core CSE concepts including machine learning fundamentals, networking protocols, routing mechanisms, and numerical analysis techniques."
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj1",
    title: "Echorithm – AI-Powered News Aggregator",
    tags: ["Artificial Intelligence", "NLP", "Full-Stack"],
    technologies: ["Python", "Django", "React", "MongoDB", "PyTorch", "Transformers"],
    details: [
      "AI-driven news platform featuring NLP summarization, real-time sentiment analysis, and recommendation algorithms to curate custom global content feeds."
    ]
  },
  {
    id: "proj2",
    title: "Chronic Kidney Disease Prediction & Analysis",
    tags: ["Machine Learning", "Healthcare Research"],
    technologies: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "Matplotlib"],
    details: [
      "Clinical predictive research evaluating machine learning models on NHANES records to enable early diagnosis and reliable clinical kidney stage screening."
    ]
  },
  {
    id: "proj3",
    title: "Cooking Time – Recipe Management Platform",
    tags: ["Web App", "Full-Stack"],
    technologies: ["Python", "Django", "React", "MongoDB", "RESTful API"],
    details: [
      "Full-stack web application featuring secure user sign-in, an interactive UI, and high-performance recipe database management."
    ]
  },
  {
    id: "proj4",
    title: "Eventify – Technical Events Hub",
    tags: ["Mobile App", "Community"],
    technologies: ["Flutter", "Firebase", "GetX", "REST API", "MVVM Architecture"],
    details: [
      "Flutter mobile application for discovering and tracking national technical events with clean MVVM architecture and real-time push alerts."
    ]
  },
  {
    id: "proj5",
    title: "BGP Hijack Network Simulation",
    tags: ["Cybersecurity", "Networking"],
    technologies: ["GNS3", "BGP Protocol", "Network Routing"],
    details: [
      "Virtualized GNS3 network topology simulating BGP hijack threat vectors to analyze path manipulations and test secure mitigation configurations."
    ]
  },
  {
    id: "proj6",
    title: "Bumper Kart Game",
    tags: ["Game Development", "Graphics"],
    technologies: ["C++", "OpenGL", "GLUT", "Physics"],
    details: [
      "Multiplayer 2D racing battle game engineered using clean C++ and OpenGL pipelines, featuring split-screen modes and custom collision physics."
    ]
  }
];

export const RESEARCH_DATA: ResearchItem[] = [
  {
    id: "res1",
    title: "Fairness-Aware Calibrated Gradient-Boosted Models for Leakage-Safe Chronic Kidney Disease Screening and Staging in NHANES",
    authors: "Md. Najmul Hasan Shihab, et al.",
    journal: "International Conference on Electrical, Computer and Communication Technologies (ECCT 2026) [In Press]",
    location: "Dhaka International University, Bangladesh",
    period: "May 2026",
    details: [
      "Addressed critical data leakage vulnerabilities in medical machine learning workflows by proposing a secure screening schema.",
      "Implemented fairness-aware and perfectly calibrated gradient-boosting engines (XGBoost, LightGBM, CatBoost) to ensure demographic parity and clinical decision alignment.",
      "Benchmarked clinical dataset behaviors using NHANES survey records, enabling reliable early detection and diagnostic staging of Chronic Kidney Disease."
    ]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: "cat1",
    category: "Competitive Programming",
    items: [
      { name: "Algorithms & Data Structures", level: "Expert", percentage: 95 },
      { name: "C++ Programming", level: "Expert", percentage: 92 },
      { name: "Codeforces Specialist (Rating: 1439)", level: "Proficient", percentage: 88 },
      { name: "CodeChef 2 Stars (Rating: 1564)", level: "Proficient", percentage: 85 }
    ]
  },
  {
    id: "cat2",
    category: "Machine Learning & AI",
    items: [
      { name: "Python Programming", level: "Expert", percentage: 94 },
      { name: "Supervised Learning Models", level: "Proficient", percentage: 90 },
      { name: "NLP (Transformers, PyTorch)", level: "Proficient", percentage: 86 },
      { name: "Data Preprocessing & Analysis", level: "Expert", percentage: 92 }
    ]
  },
  {
    id: "cat3",
    category: "Mobile & Web Development",
    items: [
      { name: "Flutter & Dart (iOS & Android)", level: "Proficient", percentage: 89 },
      { name: "React & TypeScript", level: "Proficient", percentage: 84 },
      { name: "Django (REST APIs)", level: "Proficient", percentage: 87 },
      { name: "MongoDB, SQL & MySQL", level: "Proficient", percentage: 85 }
    ]
  }
];

export const LEADERSHIP_DATA: LeadershipItem[] = [
  {
    id: "lead1",
    role: "Co-founder",
    organization: "Compete With Hikmah",
    period: "Co-founded",
    details: [
      "Co-founded and managed a student-focused EdTech platform promoting academic competitions, structural skill development, hands-on bootcamps, and educational resources.",
      "Built and nurtured an active online student community of 1000+ members through targeted technical educational contents, 1-on-1 mentorship programs, and regular competitive hackathons."
    ]
  },
  {
    id: "lead2",
    role: "Coordinator & Mentor",
    organization: "IIUCCPS",
    period: "Ongoing",
    details: [
      "Coordinated campus-wide competitive programming bootcamps and trained students on fundamental/advanced algorithms, math logic, and discrete data structures.",
      "Supported 100+ active contestants through detailed whiteboard problem discussions, live debugging workshops, and mock ICPC contest assessments."
    ]
  },
  {
    id: "lead3",
    role: "Campus Ambassador",
    organization: "Interactive Cares • Youth School for Social Entrepreneurs (YSSE)",
    period: "Ongoing",
    details: [
      "Represented leading EdTech platforms and socio-entrepreneurship networks inside IIUC via targeted campus campaigns, public workshops, and digital outreach.",
      "Promoted tech-upskilling bootcamps and youth-based product incubators, driving enrollment in technology career programs and social business tracks."
    ]
  },
  {
    id: "lead4",
    role: "Volunteer",
    organization: "Community Relief & Public Support",
    period: "Disaster Relief Operations",
    details: [
      "Assisted in active distribution networks of relief materials and dry food elements to flood-ravaged local Bangladeshi communities.",
      "Coordinated traffic management grids, cleanup setups, and local support teams during crucial periods of emergency national civil coordination."
    ]
  }
];

export const SERVICES_DATA = [
  {
    id: "srv1",
    title: "AI & Machine Learning Engineering",
    description: "Designing end-to-end classification, regression, and Natural Language Processing pipelines using PyTorch and Transformers. Specialized in predictive health staging models with absolute data-leakage immunity and fairness parity.",
    image: PERSONAL_INFO.images.serviceAi,
    techStack: ["Python", "PyTorch", "Transformers", "Scikit-Learn", "LightGBM"]
  },
  {
    id: "srv2",
    title: "Mobile App Architecture (Flutter)",
    description: "Engineering beautiful native Android and iOS mobile applications with Flutter. Adhering to strict MVVM clean-coding structures, reactive state-management (GetX, BLoC), discrete offline caching, and automated Firebase pipelines.",
    image: PERSONAL_INFO.images.serviceMobile,
    techStack: ["Flutter", "Dart", "Firebase", "State Management", "REST APIs"]
  },
  {
    id: "srv3",
    title: "Algorithmic Problem Solving",
    description: "Developing robust software with competitive resource efficiency. Leverages deep expertise in advanced dynamic programming, complex tree/graph networks, and mathematical optimization proven on global Codeforces standards.",
    image: PERSONAL_INFO.images.serviceCoding,
    techStack: ["C++", "STL", "GNS3 Simulations", "Data Structures", "OpenCV/OpenGL"]
  }
];
