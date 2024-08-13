// Enter all your detials in this file

// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import ruby from "./assets/techstack/ruby.png";
import rails from "./assets/techstack/rails.png";
import postgresql from "./assets/techstack/postgresql.png";
import redis from "./assets/techstack/redis.png";
import typescript from "./assets/techstack/typescript.png";
import docker from "./assets/techstack/docker.png";
import kubernetes from "./assets/techstack/kubernets.png";
import gitlab from "./assets/techstack/gitlab.png";
import jenkins from "./assets/techstack/jenkins.png";
import aws from "./assets/techstack/aws.png";
import nginx from "./assets/techstack/nginx.png";

// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Enter your Personal Details here
export const personalDetails = {
  name: "Hasan Ali CN",
  tagline: "I build things for web",
  img: profile,
  about: `Full Stack Developer with expertise in Javascript technologies and Ruby on Rails, having 6.6 years of experience in
web application development.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/hasandeveloper",
  github: "https://github.com/hasandeveloper"
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Senior Software Engineer",
    Company: `Watermark India PVT LTD`,
    Location: "Punjab",
    Type: "Full Time",
    Duration: "July 2024 - Present",
  },
  {
    Position: "Engineering Lead",
    Company: `Persistent Systems PVT LTD`,
    Location: "Pune",
    Type: "Full Time",
    Duration: "July 2023 - July 2024",
  },
  {
    Position: "Software Engineer III",
    Company: `Oracle Cerner India PVT LTD`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Jan 2022 - July 2023",
  },
  {
    Position: "Software Engineer",
    Company: `Saranyu Technologies PVT LTD`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "May 2021 - Jan 2022",
  },
  {
    Position: "Software Engineer",
    Company: `Kloc Technologies PVT LTD`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "March 2018 - May 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Ruby on Rails Full Stack Trainee/Internship",
    Company: "DCT Academy",
    Location: "Bangalore",
    Type: "Full Time",
    Duration: "Oct 2017 - March 2018",
  },
  {
    Position: "Bachelor of Computer Applications",
    Company: `SRS Degree College`,
    Location: "Chitradurga",
    Type: "Full Time",
    Duration: "July 2014 - July 2017",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  bootstrap: bootstrap,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  ruby: ruby,
  rails: rails,
  postgresql: postgresql,
  redis: redis,
  typescript: typescript,
  docker: docker,
  kubernetes: kubernetes,
  gitlab: gitlab,
  jenkins: jenkins,
  aws: aws,
  nginx: nginx,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Zendesk support",
    image: projectImage1,
    description: `I involved working on the frontend using ReactJS enhancing features for various modules
of Zendesk's Admin Centre Framework (ACF), each of which is maintained in separate repositories. Specifically, I have worked on the Custom Tickets Statuses (CTS) module. This module is integrated into the ACF via a React Iframe. also Contributed to Zendesk (Classic) Backend Ruby on Rails, one of the world's largest repositories on GitHub, by enhancing the Service Level Agreement (SLA) feature. My work primarily focused on developing auditing logs functionality for displaying condition definitions and transforming IDs into more human-readable values by having Arturo flagging. Successfully deployed these improvements to production.`,
    techstack: "ReactJS, TypeScript, Ruby on Rails",
    previewLink: "https://www.zendesk.com/in/",
    // githubLink: "https://github.com/zendesk/classi",
  },
  {
    title: "HealtheRegistries Population Health Records",
    image: projectImage2,
    description: `Spearheaded the deprecation of numerous proprietary Cerner gems and facilitated their
integration with various microservices, enhancing the application features, Addressed CVE vulnerabilities and resolved issues within the application and its dependent
Java and Ruby components, Proactively involved in debugging and problem resolution for persistent production
incidents across both Java and Ruby stacks, Participated in quarterly rotations as a Production Support Engineer, handling application support and operations.`,
    techstack: "Ruby on Rails, Ruby, Java, splunk, NewRelic",
    previewLink: "https://vimeo.com/682679104",
    // githubLink: "https://github.com",
  },
  {
    title: "Shemaroo me",
    image: projectImage3,
    description: `Engineered a 'Customer Care' web application from scratch using Ruby on Rails backend and ReactJS for Frontend, provisioned on EC2 and deployed via Docker. The application polls data from the main app shemaroo me via endpoints using cron jobs, specifically focusing on failed payment data related to subscriptions Developed a distributed Payments module Service for the OTT platform using Rails 6. The module was provisioned on a private subnet and deployed using Docker for seamless integration and operational efficiency and seamless integration with shemaroo me web app.`,
    techstack: "HTML/CSS, JavaScript, ReactJS, Ruby on Rails",
    previewLink: "https://www.shemaroome.com/",
    // githubLink: "https://github.com",
  },
  {
    title: "Low Inventory Notification (Shopify Public App)",
    image: projectImage4,
    description: `I built this Shopify Public application as an invidividual contributor from scratch and published in shopify app store `,
    techstack: "HTML/CSS, JavaScript, Bootstrap, Ruby on Rails",
    previewLink: "https://apps.shopify.com/low-inventory-notifications",
    // githubLink: "https://github.com",
  },
  {
    title: "Shipment",
    image: projectImage5,
    description: `Engineered a Ruby on Rails backend and ReactJS for Frontend Shopify application
facilitating order synchronization using webhooks, thereby achieving successful order
fulfilling and shipping from multiple warehouses.`,
    techstack: "HTML/CSS, JavaScript, ReactJS, Bootstrap, Ruby on Rails",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com",
  },
  {
    title: "Clinsyte",
    image: projectImage6,
    description: `Streamlined the Clinsyte healthcare project that transitioned from Rails 4 to Rails 6, refining
legacy test cases and fixing bugs.
• Transitioned the Clinsyte project presentation layer from Rails ERB views to ReactJS
Frontend, spearheading end-to-end feature development and deployment via Docker to
AWS EC2.`,
    techstack: "Ruby on Rails, ReactJS, HTML/CSS, JavaScript",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "hasanfarhanascii@gmail.com",
  phone: "+91 9448804242",
};
