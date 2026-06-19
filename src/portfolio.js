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
  username: "Eesha Priya",
  title: "Hi all, I'm Eesha Priya Uppumaguluru",
  subTitle: emoji(
    "Computer Science Engineering student passionate about Full Stack Development, Artificial Intelligence, and Software Engineering. Experienced in developing web applications, working with technologies, and building solutions that solve real-world challenges"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/eeshapriya023",
  linkedin: "https://www.linkedin.com/in/eesha-priya-uppumaguluru-61978328a",
  gmail: "23211a0580@bvrit.ac.in",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE COMPUTER SCIENCE ENGINEERING STUDENT SKILLED IN JAVA,DATA STRUCTURES & ALGORITHMS, WITH HANDS-ON EXPERIENCE IN BUILDING WEB APPLICATIONS, CONTRIBUTING THROUGH TECHNICAL PROJECTS AND RESEARCH PUBLICATION",
  skills: [
    emoji(
      "⚡ Build AI-powered scalable intelligent applications"
    ),
    emoji("⚡ Work with Java, Python, SQL, and problem-solving"),
    emoji(
      "⚡ Explore research-driven and real-world technology solutions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
    },
    {
      skillName: "Python",
    },
    {
      skillName: "C",
    },
    {
      skillName: "HTML",
    },
    {
      skillName: "CSS",
    },
    {
      skillName: "Javascript",
    },
    {
      skillName: "SQL",
    },
    {
      skillName: "OOPs",
    },
    {
      skillName: "DSA",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "B V Raju Institute of Technology",
      logo: require("./assets/images/bvrit.jpeg"),
      subHeader: "B.Tech-Computer Science and Engineering",
      duration: "2023 - 2027",
      desc: "Currently pursuing B.Tech in Computer Science and Engineering with a CGPA of 8.9, focusing on Data Structures & Algorithms and Web Development through technical projects and research publications.",
      descBullets: [
        "Active contribution through projects, hackathons, certifications, and research initiatives",
        "Experience in building web applications, AI-based solutions and problem solving"
      ]
    },
    {
      schoolName: "Narayana Junior College",
      logo: require("./assets/images/viva school.jpeg"),
      subHeader: "Intermediate-MPC",
      duration: "2021 - 2023",
      desc: "96 percent"
    },
    {
      schoolName: "Viva School",
      logo: require("./assets/images/narayana.jpeg"),
      subHeader:"Secondary School",
      duration: "2020 - 2021",
      desc: "86.16 percent"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming (Java, Python, C)", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend Development (HTML, CSS, JavaScript)",
      progressPercentage: "75%"
    },
    {
      Stack: "Artificial Intelligence & Machine Learning",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "70%"
    },
    {
      Stack: "Computer Networks & Operating Systems",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Intern",
      company: "Mirai School of Technology",
      companylogo: require("./assets/images/mirai.jpeg"),
      date: "July 2025 - August 2025",
      desc: "Completed a 6-week AI internship focused on real-time project development, AI tool exposure, and practical problem-solving through guided sessions and collaborative learning",
      descBullets: [
        "Engaged in developing practical AI-driven solutions as part of the internship program.",
        "Strengthened practical skills in end-to-end AI workflows, from data preprocessing to deployment."
      ]
    },
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
  title: "Big Projects",
  subtitle: "SOME OF THE PROJECTS I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/trade.jpeg"),
      projectName: "BookXchange: An AI Driven Book Trade Hub",
      projectDesc: "A smart community-driven platform for book sharing and trading, powered by AI-based personalized recommendations and dynamic pricing. Built with a Hybrid BERT + SVD Recommendation System and a Fair Pricing Algorithm.",
    },
    {
      image: require("./assets/images/queue.jpeg"),
      projectName: "NexTurn: Real-Time Queue Management Platform",
      projectDesc: "Designed a real-time queue management platform for hospitals, banks, and service centers to reduce waiting time and manual handling. Implemented a Priority Queue (Min-Heap) scheduling algorithm to serve users based on priority and arrival time.",
    },
    {
      image: require("./assets/images/agri.png"),
      projectName: "AgriFair: ML Based Farmer–Buyer Platform",
      projectDesc: "Built an XGBoost-powered platform to predict fair crop prices using weather, demand–supply, and historical data, while enabling direct farmer–buyer negotiations to reduce middlemen exploitation using, React, Tailwind CSS, and Supabase. "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "RESEARCH CONTRIBUTIONS, CERTIFICATIONS, AND ACADEMIC ACHIEVEMENTS",

  achievementsCards: [
    {
      title: "Paper Title: BookXchange: An AI-Driven Book Trade Hub",
      subtitle:
        "Published research paper in the International Conference on Circuit, Power and Computing Technologies (ICCPCT-2025).The paper proposes a hybrid recommendation system with dynamic pricing for digital book trading platforms.",
      image: require("./assets/images/pub.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Publication",
          url: "https://ieeexplore.ieee.org/document/11176598"
        },
      ]
    },
    {
      title: "Salesforce Certified Agentforce Specialist",
      subtitle:
        "Professional certification in Salesforce Agentforce technologies (Dec 2025).",
      image: require("./assets/images/sales.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
      ]
    },

    {
      title: "SQL and Relational Databases 101",
      subtitle: "Completed certification by IBM Developer Skills Network focused on SQL fundamentals and relational databases (May 2025).",
      image: require("./assets/images/sql.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
      ]
    },
    {
      title: "Frontend with JavaScript",
      subtitle: "Completed certification by TASK focused on frontend development concepts using JavaScript (Feb 2025).",
      image: require("./assets/images/task.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
      ]
    },
    {
      title: "TechA Web Development Using HTML and CSS by Infosys Springboard",
      subtitle: "Learned HTML and CSS fundamentals for designing responsive and user-friendly web pages.Built structured and visually appealing website layouts.",
      image: require("./assets/images/web.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
      ]
    },
    {
      title: "Deloitte Australia Data Analytics Job Simulation by Forage",
      subtitle: "Completed certification by IBM Developer Skills Network focused on SQL fundamentals and relational databases (May 2025).",
      image: require("./assets/images/del.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
      ]
    },
    {
      title: "CPA: Programming Essentials in C++- CISCO",
      subtitle: "Gained knowledge of basics of c++ programming, along with object-oriented programming concepts using C++.",
      image: require("./assets/images/cc.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
      ]
    },
    {
      title: "CLA: Programming Essentials in C - CISCO",
      subtitle: "Learned core C programming concepts, including functions, arrays, pointers, and problem-solving.Developed and debugged programs using structured programming techniques.",
      image: require("./assets/images/c.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
      ]
    },
    {
      title: "Business Plan Competition-2025",
      subtitle: "Secured 1st place in Business Plan Competition 2025 for presenting “Grovii – Farming That Fits on a Shelf,” a smart indoor farming concept, and received a cash prize of rupees 3000.",
      image: require("./assets/images/bus.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
      ]
    },
    {
      title: "Hackfiniti: Hackathon Certification",
      subtitle: "Advanced to Round 2 in Yukthi Hackathon and Hackfinity 2025, showcasing coding and problem-solving skills.",
      image: require("./assets/images/hacki.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
      ]
    },


  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Leadership & Activities",
  subtitle:
    "roles and responsibilities",

  displayMediumBlogs: "false",

  blogs: [
    {
      title: "Event Management Chairperson – Data Science & Visionary Hub",
      description:
        "Coordinated technical events, workshops, and speaker sessions, hosted events, led end-to-end event logistics including promotions, registrations and execution to drive student engagement",
    }
  ],

  display: true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
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
    "Feel free to connect for internships, collaborations, or opportunities.",
  number: "+91-7386436916",
  email_address: "23211a0580@bvrit.ac.in"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false// Set true to display this section, defaults to false
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
