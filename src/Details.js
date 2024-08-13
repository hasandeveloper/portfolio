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
    title: "Project title 3",
    image: projectImage3,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 4",
    image: projectImage4,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 5",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "hasanfarhanascii@gmail.com",
  phone: "+91 9448804242",
};
