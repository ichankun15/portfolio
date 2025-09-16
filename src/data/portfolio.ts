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

export const portfolioData: PortfolioData = {
  name: "Ichan Villafuerte",
  title: "Full Stack Developer",
  email: "ichan.villafuerte@portfolio.dev",
  phone: "+1 (555) 123-4567",
  location: "Ortigas, Pasig City",
  website: "https://ichanvillafuerte.dev",
  github: "https://github.com/ichanvillafuerte",
  linkedin: "https://linkedin.com/in/ichanvillafuerte",
  bio: "Passionate full-stack developer with 2 years of experience building scalable web applications. I love creating beautiful, intuitive user interfaces and robust backend systems. Always excited to learn new technologies and solve complex problems.",
  
  projects: [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Stripe API", "Redis"],
      github: "https://github.com/ichanvillafuerte/ecommerce-platform",
      demo: "https://ecommerce-demo.ichanvillafuerte.dev"
    },
    {
      id: "task-manager",
      title: "Collaborative Task Manager",
      description: "Real-time collaborative task management application with drag-and-drop functionality, team workspaces, and live notifications.",
      tech: ["React", "Socket.io", "MongoDB", "Express", "Material-UI", "JWT"],
      github: "https://github.com/ichanvillafuerte/task-manager",
      demo: "https://tasks.ichanvillafuerte.dev"
    },
    {
      id: "weather-app",
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts using modern design principles.",
      tech: ["React", "TypeScript", "OpenWeather API", "Mapbox", "Tailwind CSS"],
      github: "https://github.com/ichanvillafuerte/weather-app",
      demo: "https://weather.ichanvillafuerte.dev"
    }
  ],

  experience: [
    {
      id: "senior-dev",
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: [
        "Lead development of microservices architecture serving 100k+ users",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with design team to create responsive user interfaces"
      ],
      tech: ["React", "Node.js", "AWS", "Docker", "MongoDB", "TypeScript"]
    },
    {
      id: "fullstack-dev",
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: [
        "Built and maintained web applications using React and Express",
        "Integrated third-party APIs and payment systems",
        "Optimized database queries improving performance by 40%",
        "Participated in agile development processes and sprint planning"
      ],
      tech: ["React", "Express", "PostgreSQL", "Git", "Jest", "Heroku"]
    },
    {
      id: "frontend-dev",
      title: "Frontend Developer",
      company: "DigitalAgency",
      period: "2019 - 2020",
      description: [
        "Developed responsive websites for diverse client portfolio",
        "Converted design mockups into pixel-perfect implementations",
        "Optimized site performance and accessibility standards",
        "Collaborated with designers and backend developers"
      ],
      tech: ["JavaScript", "HTML5", "CSS3", "SASS", "jQuery", "WordPress"]
    }
  ],

  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vue.js"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
    },
    {
      category: "DevOps & Tools",
      items: ["AWS", "Docker", "Kubernetes", "Git", "Jenkins", "Linux", "Nginx", "Terraform"]
    },
    {
      category: "Design",
      items: ["Figma", "Adobe XD", "Photoshop", "UI/UX Design", "Responsive Design", "Accessibility"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "La Consolacion University Philippines",
      period: "2019 - 2023",
      gpa: "1.25/1.5"
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "General Assembly",
      period: "2023"
    }
  ]
};