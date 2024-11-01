// src/components/Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/index.css';
import gif from '../assets/icons/arrows.png';
import profiles from '../data/profilesData';

const Services = () => {
    const svgIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-6 pr-2">
            <path d="M90,50 L10,10 L10,90 Z" fill="#c93991" />
        </svg>
    );

    return (
        <>
            <div className="bg-img">
                <h1 className="text-gray-100 text-4xl font-extrabold text-center m-5">OUR SERVICES</h1>
            </div>

            <div className="">
                {profiles.map((profile) => (
                    <Link to={`/profile/${profile.title}`}
                        key={profile.id}
                        className="flex flex-col md:flex-row items-center p-3 border border-gray-300 shadow-lg w-full bg-gradient-to-r text-gray-800 mb-1"
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
                            <Link to={`/profile/${profile.title}`} state={{ detail: profile.detail }} className="flex justify-center items-center mt-4 gap-3" >
                                <img src={gif} className="w-10 text-center transform transition-transform duration-200 hover:-translate-x-3" alt="" />
                            </Link>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Services;
