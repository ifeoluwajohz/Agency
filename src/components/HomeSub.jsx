import React from 'react';
import { Link } from 'react-router-dom';
import gif from '../assets/icons/arrows.png';
import profiles from '../data/profilesData';


const HomeSub = () => {
  
  return (
    <>
    <h1 className="text-3xl text-center text-gray-700 mt-8 mb-6 underline font-bold">OUR SERVICES</h1>
    <div className="flex flex-row flex-wrap justify-center md:gap-10 gap-5 p-2 md:mx-6 mx-3">
      {profiles.map((profile) => (
        <Link to={`/profile/${profile.title}`}
          key={profile.id}
          className="flex flex-col items-center text-white md:p-6 p-3 border border-gray-300 rounded-lg shadow-md md:w-5/12 w-full text-center"
          style={profile.style}
          state={{ detail: profile.detail }}
        >
          <img src={profile.iconSrc} alt={profile.title} className="w-16 h-16 object-cover" />
          <h2 className="my-4 text-xl font-bold">{profile.title}</h2>
          <p className="text-sm text-center items-center">{profile.info}</p>
          <Link to={`/profile/${profile.title}`} state={{ detail: profile.detail }} className="flex items-center mt-4 gap-3" >
            <img src={gif} className="w-10 text-center transform transition-transform duration-200 hover:-translate-x-3" alt="" />
          </Link>

        </Link>
      ))}
    </div>
    </>
  );
};

export default HomeSub;
