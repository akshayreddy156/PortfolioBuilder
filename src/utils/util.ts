export const details = {
  name: "Akshay Reddy",
  Role: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
  email: "akshayreddy2n@gmail.com",
  phone: "+91 9705511389",
  About:
    "An enthusiastic developer with a passion for building efficient and scalable web applications. Skilled in both frontend and backend technologies, I thrive in collaborative environments and enjoy tackling complex problems.",
  Skills: [
    "Java",
    "Spring Boot",
    "MySQL",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
  ],
  projects: [
    {
      name: "Portfolio Builder",
      description:
        "This is a web application designed by using React. Using Portfolio Builder application you can create your own portfolio by just entering your details in the Util.ts",
      gitLink: "https://github.com/akshayreddy156/Smart-Contact",
      techUsed: ["React", "TypeScript", "MUI"],
    },
    {
      name: "Smart Contact Book",
      description:
        "This is a web application designed by using Spring Boot .Using Smart Contact application you can store your contact details and retrieve them through it",
      gitLink: "https://github.com/akshayreddy156/Smart-Contact",
      techUsed: ["Spring Boot", "Java", "MySQL", "Html", "CSS", "Thymeleaf"],
    },
    {
      name: "Weather Report",
      description:
        "Weather Report is a Java Backend Application where Admin can manage the weather details of different cities. Admin can add, update, delete and view the weather details. Users can view the weather details of different cities.",
      gitLink: "https://github.com/akshayreddy156/WeatherReport",
      techUsed: ["Java", "Spring Boot", "MySql"],
    },
  ],
  Experience: [
    {
      company: "Concentrix Catalyst",
      role: "jr Software Engineer",
      duration: "September 2023 - Present",
      responsibilities:
        "As a Junior Software Engineer, I gained hands-on experience across multiple projects using Java, Spring Boot, and modern web technologies. I focused on fixing security vulnerabilities, assisting with version migrations, and improving overall code quality. I actively contributed to full-stack development tasks and collaborated closely with team members to maintain efficient Git-based workflows.",
    },
  ],
  Education: [
    {
      degree: "B.Tech",
      branch: "Information Technology",
      institution: "Guru Nanak Institutions Technical Campus,Hyderabad",
      duration: "2019 - 2023",
    },
    {
      degree: "Intermediate",
      branch: "MPC",
      institution: "Resonance Junior College,Khammam",
      duration: "2017 - 2019",
    },
    {
      degree: "Standard 10th",
      institution: "Montessori High School,Khammam",
      duration: "2017",
    },
  ],
  Achievements: [
    {
      title: "Hackathon Winner",
      by: "College Event",
      description:
        "Won first place in a college hackathon by developing an innovative web application that streamlined campus event management, showcasing strong problem-solving and teamwork skills.",
      download: "",
    },
  ],
  socialMedia: {
    instagram: "_akshay_reddy_15",
    github: "https://github.com/akshayreddy156",
    linkedIn: "https://www.linkedin.com/in/akshayreddy156",
    twitter: "NAkshay1506",
    gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=${details.email}",
    facebook: "akshay.reddy.9469",
    whatsapp: "919705511389",
  },
  //Create an email.js account from https://dashboard.emailjs.com.
  //1.create an email service , now give all permissions required and then copy he Service_Id
  //2.Now create an email Template and copy the Template_Id
  emailjs: {
    serviceid: "service_bx28rci",
    templateId: "template_ku6ulst",
    publicKey: "0w7Cz2iT-aXnjXVWS",
  },
};
