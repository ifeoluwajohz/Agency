// src/data/profilesData.js

import gif from '../assets/icons/arrows.png';
import webDevIcon from '../assets/icons/devops.png';
import uiux from '../assets/icons/3d-print.png';
const webDevImg ='https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const graphics = 'https://img.freepik.com/free-vector/designer-tools-idea-concept_98292-4652.jpg?t=st=1730518958~exp=1730522558~hmac=d49a443f54519ee698e493c58e33311607421e5c6abc9f287ebea2c066f0e4bb&w=740'
const seo = 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const gd = 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?t=st=1730518390~exp=1730521990~hmac=58c816df9b67ce78b7ba485cd31f8518b6cf02f37e189e7857e08e14c1d60ed6&w=740'

const profiles = [
  {
    id: 1,
    iconSrc: gd,
    imgSrc: graphics,
    title: "Graphics Design",
    info: "As a Graphics Designer, you will create visually compelling graphics for various media...",
    style: { backgroundColor: '#ffc3c3', color: "#681135" },
    gif: gif,
    detail: {
      image: graphics,
      title: "Graphics Design",
      price: "$500 - $2000",
      stack: ["Adobe Photoshop", "Illustrator", "InDesign", "After Effects", "Premiere Pro"],
      tools: ["Wacom Tablet", "Color Calibration Tool"],
      description: "Our Graphics Design service goes beyond simply creating appealing visuals. As experts in visual communication, we craft compelling imagery that encapsulates a brand’s identity, conveying messages clearly and attractively across multiple platforms. From branding to advertising materials, each project begins with understanding the client’s objectives and their target audience. By using a diverse range of tools and software, such as Adobe Photoshop for photo editing, Illustrator for vector graphics, and After Effects for dynamic visual effects, we ensure each element is crafted with precision and creativity. The design process involves ideation, sketching, and feedback loops with clients to guarantee that the final output aligns with the brand’s values. Whether it's for social media graphics, print materials, or large-scale campaigns, our goal is to enhance brand recognition and audience engagement. Beyond creating standalone pieces, our designers focus on consistency across campaigns, fostering a cohesive and memorable brand experience.",
      links: [
        { label: "Portfolio", url: "https://example.com/graphics-designer" },
        { label: "Contact", url: "https://example.com/contact" }
      ]
    }
  },
  {
    id: 2,
    iconSrc: webDevIcon,
    imgSrc: webDevImg,
    title: "Software Development",
    info: "Develop robust software solutions using React, Node.js, and MongoDB.",
    style: { backgroundColor: '#c3d4ff', color: "#074b83" },
    gif: gif,
    detail: {
      image: webDevImg,
      title: "Software Development",
      price: "$1000 - $5000",
      stack: ["React", "Node.js", "MongoDB", "Tailwindcss", "Typescript", "Supabase", "SQL"],
      tools: ["VS Code", "Git", "Postman"],
      description: "Our Software Development service specializes in creating high-quality web and mobile applications that are scalable, user-friendly, and highly performant. With a technology stack that includes React for robust front-end interfaces, Node.js and Express for efficient back-end operations, and MongoDB for flexible data handling, we cater to businesses of all sizes. Every project begins with a discovery phase where we gather requirements and conduct research to understand the specific challenges and goals of the client. After crafting detailed user stories and wireframes, our developers focus on building a responsive design and implementing features based on best coding practices and modern design patterns. By integrating services like Supabase for authentication and Tailwind CSS for streamlined styling, we accelerate the development process while ensuring high-quality results. We follow an Agile methodology to continuously improve and align with evolving client needs, maintaining transparent communication throughout the project lifecycle. The ultimate goal is to create digital products that enhance efficiency, facilitate user engagement, and contribute to the business’s success.",
      links: [
        { label: "GitHub", url: "https://github.com" },
        { label: "LinkedIn", url: "https://linkedin.com" }
      ]
    }
  },
  {
    id: 3,
    iconSrc: uiux,
    imgSrc: seo,
    title: "Product Design",
    info: "Create engaging and intuitive product experiences.",
    style: { backgroundColor: '#f0c3ff', color: "#370344" },
    gif: gif,
    detail: {
      image: seo,
      title: "Product Design",
      price: "$1500 - $6000",
      stack: ["Figma", "Sketch", "Adobe XD", "InVision", "ProtoPie"],
      tools: ["Prototyping Kit", "User Testing Software"],
      description: "Our Product Design services aim to create user-centered, aesthetically pleasing interfaces that enhance user satisfaction and ease of use. As product designers, we combine research-based insights with creative design strategies to build products that meet user needs and exceed business goals. Each design process begins with in-depth user research, exploring behavior patterns, needs, and preferences. Tools like Figma and Adobe XD are used to create wireframes and prototypes, allowing us to test and validate ideas before proceeding to high-fidelity design. Our team collaborates closely with developers to ensure that the design translates seamlessly into the final product, considering usability, accessibility, and performance. From mobile apps to enterprise software, our designs aim to streamline workflows and create engaging experiences that keep users returning. In addition to visual aesthetics, we prioritize intuitive navigation and accessible design, making sure that users can accomplish their tasks with minimal friction. Our designs not only enhance product usability but also add significant value to the brand image by reflecting professionalism and innovation.",
      links: [
        { label: "Behance", url: "https://behance.net" },
        { label: "Portfolio", url: "https://example.com/product-design" }
      ]
    }
  }
];

export default profiles;
