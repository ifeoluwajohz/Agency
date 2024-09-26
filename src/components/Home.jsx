import React from 'react';
import Welcome from './Welcome';
import ice from '../assets/young.jpg';

import '../css/index.css'

const Home = () => {
  return (
    <>
    
    <div className="text-center mt-2 px-0  md:px-10">
      <div className="welcomes py-16 px-4 md:px-16 my-5">
        <p className=" text-gray-100 text-3xl md:text-5xl font-bold leading-snug md:leading-snug">A Full Service <span className="text-yellow-600"> Integrated</span> Consulting Company where Technology meets Marketing.</p>
        <p className="text-base lg:text-lg text-gray-100 my-6 leading-7 lg:leading-9">We build webapps that are optimized for both search engines and users. Our team provides comprehensive design, development, and maintenance solutions.</p>
        <button className="px-16 py-2 mt-2 w-full lg:w-auto text-gray-200 bg-yellow-600 font-bold hover:bg-yellow-700 bg-text-gray-100 transition-all duration-500">Let's Talk</button>
      </div>
      {/* <div className="flex flex-col-reverse lg:flex-row mb-12 items-stretch">
        <div className="pr-0 lg:pr-4 lg:px-0 mb-8 lg:mb-0 lg:w-1/2">
          <h1 className=" heading text-3xl lg:text-5xl text-gray-700 font-bold mb-10 tracking-wide lg:tracking-widest">
            Build your <span className="text-yellow-600">online</span> presence
          </h1>
          <p className="text-base lg:text-lg text-gray-600 leading-7 lg:leading-9">
            We build webapps that are optimized for both search engines and users. Our team provides comprehensive design, development, and maintenance solutions.
          </p>
          <button className="px-24 py-2 mt-10 w-full lg:w-auto text-gray-900 bg-yellow-600 font-bold ">
            Hire us
          </button>
        </div>
        <div className="lg:w-1/2">
          <img src={ice} alt="Young person" className="w-full h-auto lg:h-96 object-cover" />
        </div>
      </div> */}
      <Welcome />
    </div>
    </>
  );
};

export default Home;