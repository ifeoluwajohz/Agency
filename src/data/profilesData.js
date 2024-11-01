// src/data/profilesData.js

import gif from '../assets/icons/arrows.png';
import webDev from '../assets/icons/devops.png';
import uiux from '../assets/icons/3d-print.png';
import gd from '../assets/icons/pantone.png';
import img from '../assets/seo.jpg';
import young from '../assets/code.jpg';

const profiles = [
  {
    id: 1,
    iconSrc: gd,
    imgSrc: young,
    title: "Graphics Design",
    info: "As a Graphics Designer, you will create visually compelling graphics for various media...",
    style: { backgroundColor: '#ffc3c3', color: "#681135" },
    gif: gif,
    detail: {
      image: gd,
      price: "$500 - $2000",
      stack: ["Adobe Photoshop", "Illustrator", "InDesign", "After Effects", "Premiere Pro"],
      tools: ["Wacom Tablet", "Color Calibration Tool"],
      description: "Ignite your brand's digital impact with our dynamic marketing strategies that fuse creativity and precision.",
      links: [
        { label: "Portfolio", url: "https://example.com/graphics-designer" },
        { label: "Contact", url: "https://example.com/contact" }
      ]
    }
  },
  {
    id: 2,
    iconSrc: webDev,
    imgSrc: young,
    title: "Software Development",
    info: "Develop robust software solutions using React, Node.js, and MongoDB.",
    style: { backgroundColor: '#c3d4ff', color: "#074b83" },
    gif: gif,
    detail: {
      image: webDev,
      price: "$1000 - $5000",
      stack: ["React", "Node.js", "MongoDB", "Tailwindcss", "Typescript", "Supabase", "SQL"],
      tools: ["VS Code", "Git", "Postman"],
      description: "As a Software Developer, you will design, develop, and maintain software applications...",
      links: [
        { label: "GitHub", url: "https://github.com" },
        { label: "LinkedIn", url: "https://linkedin.com" }
      ]
    }
  },
  {
    id: 3,
    iconSrc: uiux,
    imgSrc: img,
    title: "Product Design",
    info: "Create engaging and intuitive product experiences.",
    style: { backgroundColor: '#f0c3ff', color: "#370344" },
    gif: gif,
    detail: {
      image: uiux,
      price: "$1500 - $6000",
      stack: ["Figma", "Sketch", "Adobe XD", "InVision", "ProtoPie"],
      tools: ["Prototyping Kit", "User Testing Software"],
      description: "As a Product Designer, you will focus on the user's experience and interface design...",
      links: [
        { label: "Behance", url: "https://behance.net" },
        { label: "Portfolio", url: "https://example.com/product-design" }
      ]
    }
  }
];

export default profiles;
