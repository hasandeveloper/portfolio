// Enter all your detials in this file

// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import acad from "./assets/techstack/a-cad.png"
import dx from "./assets/techstack/dx.webp"

// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Enter your Personal Details here
export const personalDetails = {
  name: "Syed Ibrahim",
  tagline: "Powering the Future with Precision and Expertise",
  img: profile,
  about: `I am a licensed electrical engineer with a B-Tech in Electrical and Electronics Engineering and a Master's in Power and Energy Systems, graduating with first-class distinction. Over the past five years, I have specialized in securing power sanctions for residential and commercial projects, as well as executing complex installations such as transformers with RMUs, underground cabling, and connecting to government main lines of 11kV and higher voltage systems. I initially obtained a Grade A Supervisor License (No: 1GR126**BNG) along with a Grade A Electrical Contractor License (No: 1CL1291**BNG), enabling me to work on projects up to 33kVA. Based on my experience, I was upgraded to a Super Grade License (No: SGL1760**BNG), granted by the Government of Karnataka, India. This license authorizes me to work on substations and high-voltage projects of any capacity, including 66kV, 132kV, and beyond..`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/syed-ibrahim-0b8a32161/"
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Project Manager",
    Company: `KPN Electrical Enterprises`,
    Location: "Bangalore",
    Type: "Full Time",
    Duration: "Jan 2020 - Feb 2024",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "MTech, Power and Energy System",
    Company: `REVA University Master of Technology`,
    Location: "Bangalore",
    Type: "Full Time",
    Duration: "Jan 2021 - Nov 2022",
  },
  {
    Position: "BTech, Electrical and Electronics Engineering",
    Company: `REVA University Bachelor of Technology`,
    Location: "Bangalore",
    Type: "Full Time",
    Duration: "May 2015 - April 2019",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  acad: acad,
  dx: dx,
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
  email: "Syed4gsi527@gmail.com",
  phone: "+91 97415 53520",
};
