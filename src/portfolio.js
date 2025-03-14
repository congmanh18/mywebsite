/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Manh Nguyen",
  title: "Hi all, I'm Manh",
  subTitle: emoji(
     "A passionate Backend Developer with expertise in Golang 🚀, experienced in building high-performance web systems, APIs, and microservices. Skilled in optimizing performance, managing databases, and deploying scalable applications."  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/congmanh18",
  linkedin: "https://www.linkedin.com/in/congmanh18/",
  gmail: "nguyenmanh180102@gmail.com",
  gitlab: "https://gitlab.com/congmanh18",
  facebook: "https://www.facebook.com/congmanh1801",
  instagram: "https://www.instagram.com/manh18ng/",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE BACKEND DEVELOPER BUILDING SCALABLE, SECURE, AND EFFICIENT SYSTEMS",
  skills: [
    emoji("⚡ Develop and maintain efficient server-side systems using modern backend technologies and microservices architectures."),
    emoji("⚡ Build and automate CI/CD pipelines for seamless integration, deployment, and scaling of applications."),
    emoji("⚡ Manage cloud infrastructure, ensuring high availability, security, and smooth scalability for applications."),
    emoji("⚡ Implement monitoring and logging systems to track application performance and troubleshoot issues effectively."),
    emoji("⚡ Collaborate with front-end teams to ensure seamless integration and optimal user experiences."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "Golang", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "PostGreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "GitLab", fontAwesomeClassname: "fab fa-gitlab" },
    { skillName: "CI/CD", fontAwesomeClassname: "fas fa-code" },
    { skillName: "GraphQL", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "Digital Ocean", fontAwesomeClassname: "fab fa-digital-ocean" },
    { skillName: "Redis", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "RabbitMQ", fontAwesomeClassname: "fas fa-exchange-alt" },
    { skillName: "Elasticsearch", fontAwesomeClassname: "fas fa-search" },
    { skillName: "Kafka", fontAwesomeClassname: "fas fa-random" },

  ],
  display: true // Set false to hide this section, defaults to true
};
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Industrial University of Ho Chi Minh City",
      logo: require("./assets/images/iuh.png"),
      subHeader: "Engineering of Computer Engineering Technology",
      duration: "September 2020 - August 2025",
      desc: "Completed a graduation project on the development of a smart waste bin management and analysis system in Ho Chi Minh City, aiming to optimize waste collection and reduce environmental pollution.",
      descBullets: [
        "Developed a smart waste bin system using ultrasonic sensors to monitor fill levels in real-time",
        "Built a web interface for waste collection teams to monitor and plan waste pickup efficiently",
        "Used data analysis to optimize waste collection schedules and allocate resources",
        "Technologies used: IoT, Python, PostGreSQL, React, Docker, hosting VPS"
      ]
    },
    {
      schoolName: "Ly Tu Trong High School",
      logo: require("./assets/images/lytutrong.png"),                       
      subHeader: "High School",
      duration: "September 2017 - May 2020",
      desc: "I was a student at Ly Tu Trong High School, where I studied hard and achieved good results in my studies. My school at that time was one of the best high schools in Binh Dinh province."
    },
    {
      schoolName: "Hoai Son Secondary School",
      logo: require("./assets/images/thcshs.png"),                       
      subHeader: "Secondary School",
      duration: "September 2013 - May 2017",
      desc: ""
    },
    // {
    //   schoolName: "Hoai Son Primary School No. 1",
    //   logo: require("./assets/images/thhs.png"),                       
    //   subHeader: "Primary School",
    //   duration: "September 2008 - May 2013",
    //   desc: ""
    // }
  ]                       
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Golang", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "PostGreSQL",
      progressPercentage: "80%"
    },
    {
      Stack: "Docker",
      progressPercentage: "70%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Developer",
      company: "Techmaster Vietnam",
      companylogo: require("./assets/images/techmaster.png"),
      date: "March 2025 – Present",
      desc: "I am a backend developer at Techmaster Vietnam, where I work on building and maintaining the backend infrastructure for the company's products and services."      
    },
    {
      role: "Backend Developer",
      company: "SG Nhat Minh tranportation service trading company limited",
      companylogo: require("./assets/images/cmnexpress.png"),
        date: "August 2024 – February 2025",
        desc: "I'm a remote developer helped the company to build the backend infrastructure.",
        descBullets: [
          "Team up with the front end team and the guys at SharkyTech to build CMN Express Tech.",
          "Have a healthy study time with the team.",
        ]
    },
    {
      role: "DBA Intern ",
      company: "HPT Vietnam Corporation",
      companylogo: require("./assets/images/hpt.webp"),
      date: "June 2024 – August 2024",
      desc: "DBA intern at HPT Vietnam Corporation.",
      descBullets: [
        "Learn about the Oracle database and the tools to manage the database.",
        "Get to know about Oracle Database architecture",
        "Learn how to use support tools and write reports",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "MY PERSONAL PROJECTS AND SOME STARTUPS THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Saayahealth is a platform for healthcare providers to manage their patients and their health records.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        },
        //  you can add extra buttons here. 
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "XuyenXam",
      projectDesc: "Explore Natural Language Processing with Nextu.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/wse.jpg"),
      projectName: "World Study English",
      projectDesc: "World Study English is a center for learning English, I was develop the website for them.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://world-study-english.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/pethub.png"),
      projectName: "PetHub",
      projectDesc: "A platform for pet lovers to find and share information about pets. Care for your pet with PetHub.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://pethub-market.vercel.app/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pethub.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Where I share my thoughts and experiences about technology and life.",
  display: true, // Cho phép hiển thị section này
  footerLink:
    {
      name: "Visit My Blog Website",
      url: "https://lucas-dev-blog.vercel.app/"
    },
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+84 977 683 533",
  email_address: "nguyenmanh180102@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
