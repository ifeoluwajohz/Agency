import React from 'react';
import {Link} from 'react-router-dom'
import webDev from '../assets/icons/devops.png';
import uiux from '../assets/icons/3d-print.png';
import gd from '../assets/icons/pantone.png';


const HomeSub = () => {
  // JSON-like data defined within the component
  const profiles = [
    {
      imgSrc: uiux,
      title: "Graphics Designer",
      link:'#',
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium id maiores nihil aspernatur, veritatis tempora numquam laboriosam consequatur commodi eveniet repellat porro deserunt quisquam dolorem a, aliquam hic. Praesentium, repellat."
    },
    {
      imgSrc: webDev,
      title: "Software Development",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium id maiores nihil aspernatur, veritatis tempora numquam laboriosam consequatur commodi eveniet repellat porro deserunt quisquam dolorem a, aliquam hic. Praesentium, repellat."
    },
    {
        imgSrc: gd,
        title: "Product Designer",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium id maiores nihil aspernatur, veritatis tempora numquam laboriosam consequatur commodi eveniet repellat porro deserunt quisquam dolorem a, aliquam hic. Praesentium, repellat."
    },
  ];

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 p-2 md:mx-6 mx-3">
      {profiles.map((profile, index) => (
        <div key={index} className="flex flex-col items-center p-6 border border-gray-300 rounded-lg shadow-md md:w-5/12 w-full text-center">
          <img src={profile.imgSrc} alt="Profile" className="w-16 h-16 object-cover" />
          <h2 className="my-4 text-xl font-bold">{profile.title}</h2>
          <p className="text-gray-500 text-sm">{profile.info}</p>
          <Link className="mt-8 py-1 px-8 bg-gray-500 text-white rounded-md">More</Link>
        </div>
      ))}
    </div>
  );
};

export default HomeSub;
