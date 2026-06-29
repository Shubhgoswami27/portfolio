export const portfolioData = {
  profile: {
    name: "Shubh Giri Goswami",
    titles: [
      "Software Engineer",
      "Java Developer",
      "Machine Learning Enthusiast",
      "AI Developer"
    ],
    tagline: "Transforming Ideas into Intelligent Software Solutions.",
    bio: "I am a B.Tech student in Artificial Intelligence and Machine Learning with a passion for software development and machine learning. I enjoy building real-world projects using Java, Machine Learning, and Python. My goal is to become a skilled Software Engineer and contribute to innovative technology solutions.",
    email: "shubhgirigoswami@gmail.com",
    phone: "+91 98765 43210", // Placeholder
    location: "Indore, Madhya Pradesh, India",
    github: "https://github.com/shubhgirigoswami",
    linkedin: "https://linkedin.com/in/shubh-giri-goswami",
    resumeUrl: "#", // Can trigger page print or mock download
  },
  about: {
    introduction: "I am an Artificial Intelligence & Machine Learning student passionate about software engineering, intelligent systems, and building solutions that bridge the gap between complex algorithms and practical utility.",
    careerObjective: "Seeking opportunities to leverage programming, machine learning, and problem-solving skills to build innovative and impactful software solutions in a dynamic engineering team.",
    interests: [
      "Artificial Intelligence",
      "Machine Learning",
      "Software Development",
      "Data Analysis",
      "Problem Solving",
      "Open Source Learning"
    ],
    goals: [
      "Become a Software Engineer",
      "Master Machine Learning & Deep Learning",
      "Build Impactful AI-Driven Solutions",
      "Contribute to Innovative Technology Products"
    ]
  },
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", level: 85, icon: "SiJava" },
        { name: "Python", level: 80, icon: "SiPython" },
        { name: "C++", level: 70, icon: "SiCplusplus" }
      ]
    },
    {
      category: "Machine Learning & Data Science",
      items: [
        { name: "Machine Learning", level: 78, icon: "GiBrain" },
        { name: "NumPy", level: 85, icon: "SiNumpy" },
        { name: "Pandas", level: 82, icon: "SiPandas" },
        { name: "Matplotlib", level: 80, icon: "SiMatplotlib" },
        { name: "Scikit-Learn", level: 75, icon: "SiScikitlearn" }
      ]
    },
    {
      category: "Tools & Collaboration",
      items: [
        { name: "Git", level: 85, icon: "SiGit" },
        { name: "GitHub", level: 88, icon: "SiGithub" }
      ]
    }
  ],
  services: [
    {
      title: "Java Development",
      description: "Building efficient, multithreaded, and scalable Java applications with high code quality and robust architectures.",
      icon: "FaJava"
    },
    {
      title: "Machine Learning Solutions",
      description: "Developing predictive, predictive analytics, and classification models tailored for dataset insights and forecasting.",
      icon: "FaBrain"
    },
    {
      title: "Data Analysis",
      description: "Extracting actionable insights from structured data using Python libraries, visual analytics, and clean statistical methods.",
      icon: "FaChartBar"
    },
    {
      title: "AI Model Development",
      description: "Designing, training, tuning, and optimizing machine learning workflows using state-of-the-art algorithms and frameworks.",
      icon: "FaCpu"
    }
  ],
  projects: [
    {
      id: 1,
      title: "Hospital Management System",
      description: "A comprehensive software solution designed to manage hospital operations including patient records, appointments, doctor schedules, and administrative billing workflows.",
      technologies: ["Java", "SQL", "JDBC"],
      githubUrl: "https://github.com/shubhgirigoswami/hospital-management-system",
      demoUrl: "#",
      imageName: "hospital_management.webp",
      category: "java"
    },
    {
      id: 2,
      title: "Diabetes Prediction System",
      description: "A machine learning project that predicts diabetes risk with high accuracy using healthcare datasets, exploratory data analysis (EDA), and predictive analytics models.",
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn"],
      githubUrl: "https://github.com/shubhgirigoswami/diabetes-prediction",
      demoUrl: "#",
      imageName: "diabetes_prediction.webp",
      category: "ml"
    },
    {
      id: 3,
      title: "Code Review System",
      description: "A software tool focused on reviewing and analyzing source code quality, detecting code smells, and suggesting fixes to improve maintainability, speed, and safety.",
      technologies: ["Java", "Git", "GitHub"],
      githubUrl: "https://github.com/shubhgirigoswami/code-review-system",
      demoUrl: "#",
      imageName: "code_reviewer.webp",
      category: "java"
    },
    {
      id: 4,
      title: "Jan Mitra",
      description: "A citizen-focused digital platform designed to simplify access to public information, grievances registration, and government welfare scheme eligibility calculation.",
      technologies: ["Python", "Machine Learning", "Streamlit"],
      githubUrl: "https://github.com/shubhgirigoswami/jan-mitra",
      demoUrl: "#",
      imageName: "jan_mitra.webp",
      category: "ml"
    }
  ],
  education: [
    {
      grade: "Graduation (B.Tech)",
      specialization: "B.Tech in Artificial Intelligence & Machine Learning",
      institution: "Acropolis Institute of Technology and Research, Indore",
      duration: "2024 – 2028",
      scoreType: "CGPA",
      score: "7.4",
      description: "Acquiring in-depth training in programming paradigms, data structures, algorithms, probability & statistics, and specialized courses in artificial intelligence, neural networks, and model architectures."
    },
    {
      grade: "Class 12 (Senior Secondary)",
      specialization: "Science (PCM)",
      institution: "St. Joseph Senior Secondary School, Narsinghgarh",
      duration: "Completed 2024",
      scoreType: "Percentage",
      score: "70%",
      description: "Focused on core sciences (Physics, Chemistry, Mathematics) and computer science basics."
    },
    {
      grade: "Class 10 (Secondary School)",
      specialization: "General CBSE Curriculum",
      institution: "St. Joseph Senior Secondary School, Narsinghgarh",
      duration: "Completed 2022",
      scoreType: "Percentage",
      score: "73%",
      description: "Developed strong foundational skills in mathematics, sciences, social studies, and languages."
    }
  ],
  certificates: [
    {
      name: "Machine Learning Bootcamp",
      organization: "Acropolis Institute of Technology and Research",
      date: "2025",
      description: "Completed hands-on intensive training covering supervised learning, dataset preprocessing, model evaluation, and Scikit-learn implementations.",
      credentialUrl: "#"
    }
  ],
  experience: [
    {
      type: "workshop",
      title: "Machine Learning Bootcamp Participant",
      organization: "Acropolis Institute of Technology and Research",
      duration: "2025",
      learnings: [
        "Supervised Learning algorithms (Linear Regression, Decision Trees, SVM)",
        "Model Evaluation techniques (Confusion Matrix, Precision-Recall, ROC-AUC curves)",
        "Scikit-learn workflow and pipeline building",
        "Machine Learning Fundamentals and Exploratory Data Analysis (EDA)"
      ]
    },
    {
      type: "research",
      title: "Lead Developer / Researcher",
      organization: "Diabetes Prediction Research Project",
      duration: "2025",
      learnings: [
        "Developed predictive models using Python, Pandas, NumPy, and Scikit-learn to classify diabetes risk.",
        "Analyzed healthcare datasets to identify significant predictive features (insulin, glucose, BMI).",
        "Applied data imputation techniques to clean missing healthcare records.",
        "Created dynamic visualizations showcasing feature correlation and classification boundaries."
      ]
    }
  ]
};
