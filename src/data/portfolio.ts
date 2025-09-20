import bugReportIcon from "../assets/icons/bugreport-icon.png";
import faststoneIcon from "../assets/icons/faststone-icon.png";
import redmineIcon from "../assets/icons/redmine-icon.png";
import reqAnalysisIcon from "../assets/icons/requirement-analysis-icon.png";
import serverlessIcon from "../assets/icons/serverless-icon.svg";
import testCaseIcon from "../assets/icons/test-cases-creation-icon.png";

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
  workSetup: string;
  workType?: string;
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface Skill {
  category: string;
  items: SkillItem[];
  categoryIcon: string;
  gradient: string;
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
  tagline: string;
  years_exp: string;
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
  name: "iChan",
  title: "Software Engineer | Full Stack Developer",
  email: "1christian.villafuerte@gmail.com",
  phone: "09066454881",
  location: "Santo Niño, Plaridel, Bulacan 3004",
  website: "https://ichanvillafuerte.dev",
  github: "https://github.com/ichankun15",
  linkedin: "https://www.linkedin.com/in/christian-villafuerte-573106282/",
  bio: "Software Engineer with hands-on experience in full-stack development (Java, Python, React, Spring Boot, Django, FastAPI). Skilled in building scalable web apps, designing RESTful APIs, and deploying cloud-based solutions on AWS. Strong foundation in SDLC, Agile, and QA, with recent experience in AI/ML and Generative AI projects.",
  tagline: "When I'm not coding, I enjoy exploring new technologies, playing online games, and hitting the basketball court.",
  years_exp: "2 years",

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
    // {
    //   id: "software-monitoring-tool",
    //   title: "Software Monitoring Tool",
    //   description: "Enterprise tool for monitoring software with CSV-driven database automation, ETL/data migration scripts, and updated UI components. Built under Agile Scrum methodology.",
    //   tech: ["Python", "Django", "PostgreSQL", "Docker", "HTML", "CSS", "JavaScript", "Git", "OpenProject"]
    // },
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
      period: "April 2024 – September 2025",
      description: [
        "Promoted from Design Engineer Trainee to Software Engineer I after successful completion of training program.",
        "Developed internal applications using Java Spring Boot or Python (Django/FastAPI) and React, integrating with MySQL and PostgreSQL databases to build scalable, RESTful backend services.",
        "Completed internal training on Spring Boot and Microservices architecture, focusing on scalable backend systems.",
        "Built a Java-based messaging app supporting both TCP/UDP protocols, showcasing skills in multithreading and socket programming.",
        "Created a no-code office room booking system using Bubble.io, streamlining workspace scheduling with an intuitive UI.",
        "Explored serverless deployments with Serverless Framework on AWS Lambda, optimizing cost and scalability; experimented with DynamoDB for NoSQL design.",
        "Undertook AI/Machine Learning training, developing a Color Season Analyzer app by training models with Scikit-learn, TensorFlow and Keras; applied Mediapipe for facial feature extraction, leveraging Google Colab for experimentation, and building the UI with Flutter and Firebase.",
        "Engaged in Generative AI training, utilizing AWS services and FastAPI to build a test automation tool that generates test scenarios, test cases, and Robot Framework scripts; developed the web UI with React.",
        "Conducted practice automation scripts using Selenium during QA training.",
        "PROJECT: Software Monitoring Tool (Dev Role) - Worked within an Agile Scrum development environment, actively participating in sprint planning, stand-ups, and sprint reviews. Contributed to feature development including CSV-driven database automation (updates/deletions), bulk data manipulation, and ETL/data migration scripts to enhance backend functionality. Implemented UI component updates based on requirement needs and maintained the user guide. Created Integration Test Specs (ITS) / IT POVs to support integration and regression testing. Handled GitLab tasks such as creating branches, submitting merge requests (MRs), and merging source code for new feature implementations. Utilized Docker, SMTP, and Linux environments (via WSL) for backend testing and server environment access.",
        "PROJECT: Travel Booking App (QA Role) - Created Test Patterns, Matrices, and Test Cases for manual UI and functional testing of a cross-platform travel app. Performed backend test data management and validation. Investigated and reported bugs using Jira. Documented testing processes, results, and bug reports in Confluence and Redmine for team collaboration and knowledge sharing."
      ],
      tech: ["Java", "Spring Boot", "FastAPI", "Django", "React", "MySQL", "PostgreSQL", "AWS", "Serverless Framework", "DynamoDB", "TensorFlow", "Keras", "Scikit-learn", "Mediapipe", "Google Colab", "Flutter", "Firebase", "Bubble.io", "Robot Framework", "Selenium", "Postman", "Python", "Docker", "GitLab", "OpenProject", "HTML", "CSS", "JavaScript", "SMTP", "Linux", "WSL", "Jira", "Confluence", "Redmine", "Excel", "FastStone"],
      workSetup: "Hybrid",
      workType: "Full-Time"
    },
    {
      id: "design-trainee",
      title: "Design Engineer Trainee",
      company: "Tsukiden Global Solutions Inc.",
      period: "October 2023 – April 2024",
      description: [
        "Completed comprehensive in-house training on C Analysis/Inspection and Software Testing.",
        "Developed a full-stack e-learning application as a capstone training project, covering the complete SDLC.",
        "Engaged in requirements analysis and system design tasks.",
        "Successfully completed training program, leading to promotion to Software Engineer I position."
      ],
      tech: ["React", "Spring Boot", "MySQL", "Bootstrap", "GitHub", "Postman", "Jira"],
      workSetup: "Onsite",
      workType: "Full-time"
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
      tech: ["Figma", "UAT Testing", "Manual QA"],
      workSetup: "Remote",
      workType: "Internship"
    }
  ],
  // use devicon, svgrepo, freepik for icons
  skills: [
    {
      category: "Programming Languages",
      categoryIcon: "Code",
      gradient: "from-blue-500 to-purple-600",
      items: [
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
      ]
    },
    {
      category: "Web & Frameworks",
      categoryIcon: "Code",
      gradient: "from-green-500 to-teal-600",
      items: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Spring Microservices", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "REST API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
      ]
    },
    {
      category: "Databases",
      categoryIcon: "Database",
      gradient: "from-yellow-500 to-orange-600",
      items: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "DynamoDB - AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" }
      ]
    },
    {
      category: "Cloud Platforms",
      categoryIcon: "Cloud",
      gradient: "from-purple-500 to-pink-600",
      items: [
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Serverless Framework", icon: serverlessIcon },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Google Colab", icon: "https://colab.research.google.com/img/colab_favicon_256px.png" }
      ]
    },
    {
      category: "Testing & QA",
      categoryIcon: "TestTube",
      gradient: "from-red-500 to-rose-600",
      items: [
        { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
        { name: "Robot Framework", icon: "https://robotframework.org/img/RF.svg" },
        { name: "Manual Testing", icon: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png" },
        { name: "Requirement Analysis", icon: reqAnalysisIcon },
        { name: "Test Case Creation", icon: testCaseIcon },
        { name: "Bug Reporting", icon: bugReportIcon },
        { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
        { name: "Confluence", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" }
      ]
    },
    {
      category: "Version Control",
      categoryIcon: "GitBranch",
      gradient: "from-indigo-500 to-blue-600",
      items: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
        { name: "Tortoise SVN", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/subversion/subversion-original.svg" }
      ]
    },
    {
      category: "Design & Tools",
      categoryIcon: "Wrench",
      gradient: "from-teal-500 to-cyan-600",
      items: [
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "Swagger", icon: "https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" },
        { name: "MySQL Workbench", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "pgAdmin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Bubble.io", icon: "https://cdn.worldvectorlogo.com/logos/bubble-io.svg" },
        { name: "Redmine", icon: redmineIcon },
        { name: "FastStone", icon: faststoneIcon },
        { name: "OpenProject", icon: "https://www.openproject.org/assets/images/press/openproject-icon-original-color-850606ea.svg" }
      ]
    },
    {
      category: "AI/ML & Libraries",
      categoryIcon: "Brain",
      gradient: "from-orange-500 to-amber-600",
      items: [
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Keras", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
        { name: "Mediapipe", icon: "https://mediapipe.dev/images/mediapipe_small.png" },
        { name: "Scikit-Learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" }
      ]
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