const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Certifications",
    link: "#certifications",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Clients" },
  { value: 6, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Solutions Architect",
    modelPath: "/models/aws_logo.glb",
    scale: 0.4,
    position: [0, -1.8, 0],
    rotation: [0, -Math.PI / 4, 0],
  },
];


const expCards = [
  {
    review: "Timothy's work at Ecobodaa has been pivotal in advancing our electric mobility solutions. His expertise in embedded systems and hardware troubleshooting added tremendous value to the engineering team.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Junior Product Engineer",
    date: "May 2023 – Present",
    responsibilities: [
      "Tested and programmed embedded firmware for Bike IoT Modules and Battery Management Systems.",
      "Designed PCBs using EagleCAD and mechanical components using Inventor and SolidWorks.",
      "Handled database admin tasks with MySQL and supported hardware troubleshooting and deployment."
    ],
  },
  {
    review: "Timothy showed strong mechanical aptitude at EABL, contributing to system maintenance and breakdown resolution. His data-driven approach helped improve equipment uptime.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Mechanical Engineering Intern",
    date: "March 2022 – June 2022",
    responsibilities: [
      "Maintained conveyor systems, motors, gearboxes, and cooling systems.",
      "Performed preventive maintenance and assisted in major mechanical breakdowns.",
      "Collected and analyzed utility consumption data to optimize operations."
    ],
  },
  {
    review: "At KCAA, Timothy played a vital role in maintaining mission-critical systems. His support during the ATC system upgrade reflected his adaptability and technical know-how.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Mechatronics Engineering Intern",
    date: "March 2021 – May 2021",
    responsibilities: [
      "Maintained airspace surveillance and communications infrastructure.",
      "Supported upgrades to Air Traffic Control systems including Indra ATC automation."
    ],
  }
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Tim. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Tim was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Tim was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Tim's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Tim is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Tim was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Tim’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Tim was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    imgUrl: "https://github.com/akhlys007/"
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    imgUrl: "https://www.linkedin.com/in/timothy-chelelgo-49872222b/"
  },
];
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      imgPath: "/images/aws-certified-solutions-architect-associate.png",
      link: "https://www.credly.com/badges/86cef29c-bd75-43de-bd6c-2a1be40d4abf/public_url",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      imgPath: "/images/aws-certified-cloud-practitioner.png",
      link: "https://www.credly.com/badges/64fa87e7-1ade-4ff0-9a3f-fc6f8b6c5d0d/public_url",
    },
    {
      name: "Google Cybersecurity Professional",
      imgPath: "/images/google-cybersecurity-professional-certificate-v2.png",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/Q3TYQFYR6WC7",
    },
];

export {
  abilities, certifications, counterItems, expCards,
  expLogos, logoIconsList, navLinks, socialImgs,
  techStackIcons,
  techStackImgs, testimonials, words
};

