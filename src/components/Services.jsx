import React from 'react';
import { Link } from 'react-router-dom';
import '../css/index.css';
import gif from '../assets/icons/arrows.png';
import webDev from '../assets/icons/devops.png';
import uiux from '../assets/icons/3d-print.png';
import gd from '../assets/icons/pantone.png';
import img from '../assets/seo.jpg';
import young from '../assets/code.jpg';

const Services = () => {
    const svgIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-6 pr-2">
            <path d="M90,50 L10,10 L10,90 Z" fill="#c93991" />
        </svg>
    );

    const profiles = [
        {
            id: 1,
            imgSrc: young,
            title: "Graphics Design",
            info: "Ignite your brand's digital impact with our dynamic marketing strategies that fuse creativity and precision.",
            style: { color: "#681135" },
            gif: gif,
            detail: {
                image: gd,
                price: "$500 - $2000",
                stack: ["Adobe Photoshop", "Illustrator", "InDesign", "After Effects", "Premiere Pro"],
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
            imgSrc: young,
            title: "Software Development",
            info: "Develop robust software solutions using React, Node.js, and MongoDB.",
            style: { color: "#074b83" },
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
            imgSrc: img,
            title: "Product Design",
            info: "Create engaging and intuitive product experiences.",
            style: { color: "#000003" },
            gif: gif,
            detail: {
                image: uiux,
                price: "$1500 - $6000",
                stack: ["Figma", "Sketch", "Adobe XD", "InVision", "ProtoPie"],
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
        <>
            <div className="bg-img">
                <h1 className="text-gray-100 text-4xl font-extrabold text-center m-5">OUR SERVICES</h1>
            </div>

            <div className="">
                {profiles.map((profile) => (
                    <Link to={`/profile/${profile.title}`}
                        key={profile.id}
                        className="flex flex-col md:flex-row items-center p-3 border align-middle border-gray-300 shadow-lg w-full bg-gradient-to-r text-white mb-1"
                        style={profile.style}
                        state={{ detail: profile.detail }}
                    >
                        <img src={profile.imgSrc} alt={profile.title} className="h-full w-full md:h-96 md:w-1/2 object-cover mb-4 md:mb-0" />
                        <div className="flex flex-col justify-between md:w-1/2 space-y-6 md:mx-6">
                            <h1 className="md:text-4xl text-2xl font-extrabold md:mt-2">{profile.title.toUpperCase()}</h1>
                            <p className="text-lg font-light leading-7">{profile.info}</p>
                            <div className="packages">
                                <div className="features space-y-4">
                                    {profile.detail.stack.slice(0, 4).map((feature, index) => (
                                        <div className="flex items-center" key={index}>
                                            <span>{svgIcon}</span>
                                            <p className="text-sm">{feature}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Link to={`/profile/${profile.title}`} state={{ detail: profile.detail }} className="bg-gray-200 p-2 text-center items-center">
                                <img src={gif} className="w-8 transition-transform md:my-3 text-center duration-200 hover:-translate-x-2" alt="" />
                            </Link>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Services;
