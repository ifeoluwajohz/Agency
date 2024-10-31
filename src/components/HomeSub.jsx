import React from 'react';
import { Link } from 'react-router-dom';
import webDev from '../assets/icons/devops.png';
import uiux from '../assets/icons/3d-print.png';
import gd from '../assets/icons/pantone.png';
import gif from '../assets/icons/arrows.png';

const HomeSub = () => {
  const profiles = [
    {
      id: 1,
      imgSrc: gd,
      title: "Graphics Designer",
      info: "Create stunning visuals and engaging designs.",
      style: { backgroundColor: '#ffc3c3', color: "#681135" },
      gif: gif,
      detail: {
        image: gd,
        price: "$500 - $2000",
        stack: ["Adobe Photoshop", "Illustrator", "InDesign"],
        tools: ["Wacom Tablet", "Color Calibration Tool"],
        description: "As a Graphics Designer, you will create visually compelling graphics for various media. Your creativity will bring ideas to life, crafting designs that capture the essence of brands and tell compelling stories. From digital marketing materials to print designs, your work will play a vital role in enhancing brand identity.",
        links: [
          { label: "Portfolio", url: "https://example.com/graphics-designer" },
          { label: "Contact", url: "https://example.com/contact" }
        ]
      }
    },
    {
      id: 2,
      imgSrc: webDev,
      title: "Software Development",
      info: "Build scalable and efficient web applications.",
      style: { backgroundColor: '#c3d4ff', color: "#074b83" },
      gif: gif,
      detail: {
        image: webDev,
        price: "$1000 - $5000",
        stack: ["React", "Node.js", "MongoDB", "Tailwindcss", "Typescript", "Supabase", "SQL"],
        tools: ["VS Code", "Git", "Postman"],
        description: "As a Software Developer, you will design, develop, and maintain software applications. Your expertise will drive the creation of robust web applications, ensuring seamless functionality and user experience. You’ll collaborate with cross-functional teams to transform ideas into innovative solutions that meet client needs.",
        links: [
          { label: "GitHub", url: "https://github.com" },
          { label: "LinkedIn", url: "https://linkedin.com" }
        ]
      }
    },
    {
      id: 3,
      imgSrc: uiux,
      title: "Product Design",
      info: "Craft intuitive and engaging user experiences.",
      style: { backgroundColor: '#f0c3ff', color: "#370344" },
      gif: gif,
      detail: {
        image: uiux,
        price: "$1500 - $6000",
        stack: ["Figma", "Sketch", "Adobe XD"],
        tools: ["Prototyping Kit", "User Testing Software"],
        description: "As a Product Designer, you will focus on the user's experience and interface design. Your role will involve researching user needs, creating wireframes, and testing prototypes to ensure that the final product not only meets user expectations but also delivers a delightful experience. You'll collaborate closely with developers to bring designs to life.",
        links: [
          { label: "Behance", url: "https://behance.net" },
          { label: "Portfolio", url: "https://example.com/product-design" }
        ]
      }
    }
  ];
  
  

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 p-2 md:mx-6 mx-3">
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className="flex flex-col items-center text-white p-6 border border-gray-300 rounded-lg shadow-md md:w-5/12 w-full text-center"
          style={profile.style}
        >
          <img src={profile.imgSrc} alt={profile.title} className="w-16 h-16 object-cover" />
          <h2 className="my-4 text-xl font-bold">{profile.title}</h2>
          <p className="text-sm">{profile.desciption}</p>
          <Link
            to={`/profile/${profile.title}`}
            state={{ detail: profile.detail }}
            className="flex items-center mt-4 gap-3"
          >
            <img
              src={gif}
              className="w-10 text-center transform transition-transform duration-200 hover:-translate-x-3"
              alt=""
            />
          </Link>

        </div>
      ))}
    </div>
  );
};

export default HomeSub;
