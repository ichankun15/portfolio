export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;
  bio: string;
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
  education: {
    degree: string;
    school: string;
    period: string;
    gpa?: string;
  }[];
}

// export const portfolioData: PortfolioData = {
//   name: "Ichan Villafuerte",
//   title: "Full Stack Developer",
//   email: "ichan.villafuerte@portfolio.dev",
//   phone: "+1 (555) 123-4567",
//   location: "Ortigas, Pasig City",
//   website: "https://ichanvillafuerte.dev",
//   github: "https://github.com/ichanvillafuerte",
//   linkedin: "https://linkedin.com/in/ichanvillafuerte",
//   bio: "Passionate full-stack developer with 2 years of experience building scalable web applications. I love creating beautiful, intuitive user interfaces and robust backend systems. Always excited to learn new technologies and solve complex problems.",
  
//   projects: [
//     {
//       id: "ecommerce-platform",
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce platform with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
//       tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Stripe API", "Redis"],
//       github: "https://github.com/ichanvillafuerte/ecommerce-platform",
//       demo: "https://ecommerce-demo.ichanvillafuerte.dev"
//     },
//     {
//       id: "task-manager",
//       title: "Collaborative Task Manager",
//       description: "Real-time collaborative task management application with drag-and-drop functionality, team workspaces, and live notifications.",
//       tech: ["React", "Socket.io", "MongoDB", "Express", "Material-UI", "JWT"],
//       github: "https://github.com/ichanvillafuerte/task-manager",
//       demo: "https://tasks.ichanvillafuerte.dev"
//     },
//     {
//       id: "weather-app",
//       title: "Weather Forecast App",
//       description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts using modern design principles.",
//       tech: ["React", "TypeScript", "OpenWeather API", "Mapbox", "Tailwind CSS"],
//       github: "https://github.com/ichanvillafuerte/weather-app",
//       demo: "https://weather.ichanvillafuerte.dev"
//     }
//   ],

//   experience: [
//     {
//       id: "senior-dev",
//       title: "Senior Full Stack Developer",
//       company: "TechCorp Solutions",
//       period: "2022 - Present",
//       description: [
//         "Lead development of microservices architecture serving 100k+ users",
//         "Mentored junior developers and conducted code reviews",
//         "Implemented CI/CD pipelines reducing deployment time by 60%",
//         "Collaborated with design team to create responsive user interfaces"
//       ],
//       tech: ["React", "Node.js", "AWS", "Docker", "MongoDB", "TypeScript"]
//     },
//     {
//       id: "fullstack-dev",
//       title: "Full Stack Developer",
//       company: "StartupXYZ",
//       period: "2020 - 2022",
//       description: [
//         "Built and maintained web applications using React and Express",
//         "Integrated third-party APIs and payment systems",
//         "Optimized database queries improving performance by 40%",
//         "Participated in agile development processes and sprint planning"
//       ],
//       tech: ["React", "Express", "PostgreSQL", "Git", "Jest", "Heroku"]
//     },
//     {
//       id: "frontend-dev",
//       title: "Frontend Developer",
//       company: "DigitalAgency",
//       period: "2019 - 2020",
//       description: [
//         "Developed responsive websites for diverse client portfolio",
//         "Converted design mockups into pixel-perfect implementations",
//         "Optimized site performance and accessibility standards",
//         "Collaborated with designers and backend developers"
//       ],
//       tech: ["JavaScript", "HTML5", "CSS3", "SASS", "jQuery", "WordPress"]
//     }
//   ],

//   skills: [
//     {
//       category: "Frontend",
//       items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vue.js"]
//     },
//     {
//       category: "Backend",
//       items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
//     },
//     {
//       category: "DevOps & Tools",
//       items: ["AWS", "Docker", "Kubernetes", "Git", "Jenkins", "Linux", "Nginx", "Terraform"]
//     },
//     {
//       category: "Design",
//       items: ["Figma", "Adobe XD", "Photoshop", "UI/UX Design", "Responsive Design", "Accessibility"]
//     }
//   ],

//   education: [
//     {
//       degree: "Bachelor of Science in Computer Engineering",
//       school: "La Consolacion University Philippines",
//       period: "2019 - 2023",
//       gpa: "1.25/1.5"
//     },
//     {
//       degree: "Full Stack Web Development Bootcamp",
//       school: "General Assembly",
//       period: "2023"
//     }
//   ]
// };

export const portfolioData: PortfolioData = {
  name: "Ichan Villafuerte",
  title: "Software Engineer | Full Stack Developer",
  email: "1christian.villafuerte@gmail.com",
  phone: "0906 645 4881",
  location: "Santo Niño, Plaridel, Bulacan 3004",
  website: "https://ichanvillafuerte.dev", // keep if you have/plan one
  github: "https://github.com/ichanvillafuerte", // update if you use another GitHub
  linkedin: "https://linkedin.com/in/ichanvillafuerte",
  bio: "Software Engineer with hands-on experience in full-stack development (Java, Python, React, Spring Boot, Django, FastAPI). Skilled in building scalable web apps, designing RESTful APIs, and deploying cloud-based solutions on AWS. Strong foundation in SDLC, Agile, and QA, with recent experience in AI/ML and Generative AI projects.",

  projects: [
    {
      id: "color-season-analyzer",
      title: "AI-Powered Color Season Analyzer",
      description: "Machine learning app that analyzes facial features to suggest personal color palettes. Trained models with Scikit-learn, TensorFlow, and Keras; implemented Mediapipe for feature extraction and built the UI with Flutter and Firebase.",
      tech: ["TensorFlow", "Keras", "Scikit-learn", "Mediapipe", "Flutter", "Firebase", "Google Colab"]
    },
    {
      id: "generative-ai-test-automation",
      title: "Generative AI Test Automation Tool",
      description: "Tool that generates test scenarios, test cases, and Robot Framework scripts using Generative AI. Backend built with FastAPI and AWS services, frontend with React.",
      tech: ["FastAPI", "React", "AWS", "Serverless Framework", "Robot Framework"]
    },
    {
      id: "messaging-app",
      title: "Java Messaging App",
      description: "Java-based messaging application supporting both TCP and UDP protocols, with multithreading and socket programming for real-time communication.",
      tech: ["Java", "Socket Programming", "Multithreading"]
    },
    {
      id: "software-monitoring-tool",
      title: "Software Monitoring Tool",
      description: "Enterprise tool for monitoring software with CSV-driven database automation, ETL/data migration scripts, and updated UI components. Built under Agile Scrum methodology.",
      tech: ["Python", "Django", "PostgreSQL", "Docker", "HTML", "CSS", "JavaScript", "Git", "OpenProject"]
    },
    {
      id: "elearning-platform",
      title: "E-Learning Web Application",
      description: "Full-stack e-learning app with course management, progress tracking, content delivery, and certificate issuance. Built during training covering full SDLC.",
      tech: ["React", "Spring Boot", "MySQL", "Bootstrap", "Postman", "GitHub"]
    }
  ],

  experience: [
    {
      id: "software-engineer-1",
      title: "Software Engineer I",
      company: "Tsukiden Global Solutions Inc.",
      period: "April 2024 – Present",
      description: [
        "Developed internal applications using Java Spring Boot or Python (Django/FastAPI) and React, integrating with MySQL/PostgreSQL databases.",
        "Designed and implemented RESTful APIs for scalable backend services.",
        "Explored serverless deployments on AWS Lambda with DynamoDB.",
        "Built AI/ML apps (Color Season Analyzer with TensorFlow, Mediapipe, Flutter).",
        "Developed Generative AI-powered test automation tool with FastAPI, AWS, and React.",
        "Conducted QA training with Selenium and automation scripts."
      ],
      tech: ["Java", "Spring Boot", "FastAPI", "Django", "React", "MySQL", "PostgreSQL", "AWS", "TensorFlow", "Keras", "Mediapipe", "Flutter", "Firebase"]
    },
    {
      id: "software-monitoring-tool",
      title: "Software Developer (Client Project: Software Monitoring Tool)",
      company: "Tsukiden Global Solutions Inc.",
      period: "2024",
      description: [
        "Enhanced backend functionality with CSV-driven automation and ETL scripts.",
        "Implemented UI component updates per client requirements.",
        "Wrote integration test specs and maintained user guide.",
        "Worked in Agile Scrum environment with OpenProject and GitLab."
      ],
      tech: ["Python", "Django", "PostgreSQL", "Docker", "GitLab", "OpenProject", "HTML", "CSS", "JavaScript"]
    },
    {
      id: "travel-booking-app",
      title: "QA Engineer (Client Project: Travel Booking App)",
      company: "Tsukiden Global Solutions Inc.",
      period: "2024",
      description: [
        "Created test cases for manual UI and functional testing of a cross-platform travel app.",
        "Performed backend test data management and validation.",
        "Reported bugs using Jira and documented processes in Confluence and Redmine."
      ],
      tech: ["Jira", "Confluence", "Redmine", "Excel", "FastStone"]
    },
    {
      id: "design-trainee",
      title: "Design Engineer Trainee",
      company: "Tsukiden Global Solutions Inc.",
      period: "October 2023 – April 2024",
      description: [
        "Completed in-house training on C Analysis/Inspection and Software Testing.",
        "Developed a full-stack e-learning application as a training project.",
        "Engaged in requirements analysis and system design tasks."
      ],
      tech: ["React", "Spring Boot", "MySQL", "Bootstrap", "GitHub", "Postman", "Jira"]
    },
    {
      id: "intern-agora",
      title: "Dev & Tech Associate (Intern)",
      company: "AGORA PH",
      period: "June 2022 – August 2022",
      description: [
        "Created and executed UAT test cases for web and mobile e-commerce platforms.",
        "Designed mockup UI/UX for the e-commerce app using Figma."
      ],
      tech: ["Figma", "UAT Testing", "Manual QA"]
    }
  ],

  skills: [
    {
      category: "Programming Languages",
      items: ["C", "JavaScript", "Java", "Python"]
    },
    {
      category: "Web & Frameworks",
      items: ["React", "Spring Boot", "Spring Microservices", "Django", "FastAPI", "Bootstrap", "REST API"]
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "DynamoDB"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (Lambda, API Gateway, Cognito, S3, CloudWatch, Bedrock, SQS)", "Docker", "Serverless Framework", "WSL", "Firebase", "Google Colab"]
    },
    {
      category: "Testing & QA",
      items: ["Selenium", "Robot Framework", "Manual Testing", "Requirement Analysis", "Test Case Creation", "Bug Reporting", "Jira", "Confluence"]
    },
    {
      category: "Version Control",
      items: ["Git", "GitHub", "GitLab", "Tortoise SVN"]
    },
    {
      category: "Design & Tools",
      items: ["Figma", "Postman", "Swagger", "MySQL Workbench", "pgAdmin", "Bubble.io", "SMTP", "Redmine", "FastStone", "OpenProject"]
    },
    {
      category: "AI/ML",
      items: ["TensorFlow", "Keras", "Mediapipe", "Scikit-Learn"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "La Consolacion University Philippines",
      period: "2019 - 2023",
      gpa: "1.5 (Dean's Lister, 2nd & 3rd year)"
    },
    {
      degree: "Senior High School, STEM Strand",
      school: "La Consolacion University Philippines",
      period: "2017 - 2019",
      gpa: "94 (With Honors)"
    },
    {
      degree: "Junior High School",
      school: "Dr. Felipe De Jesus National High School",
      period: "2013 - 2017",
      gpa: "94 (With Honors)"
    }
  ]
};
