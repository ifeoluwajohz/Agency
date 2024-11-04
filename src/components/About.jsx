import React from 'react'
const topImg = 'https://img.freepik.com/free-photo/pretty-african-female-photographer-having-fun-with-designers-programmers-office-indoor-photo-laughing-freelance-specialists-fooling-around-conference-hall_197531-3722.jpg?t=st=1730713808~exp=1730717408~hmac=1d6f15030cb9aaf9c99e8bbb940613ce7cef33a4ff150130b9e09782e7042861&w=740'

import '../css/index.css'
import profiles from '../data/profilesData';
const svgIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-6 pr-2">
      <path d="M90,50 L10,10 L10,90 Z" fill="#c93991" />
  </svg>
);

const About = () => {
  return (
    <>
    <img src={topImg} alt="" className="w-full h-36 object-cover object-center" />
    <div className="py-6 px-4 md:px-20 md:text-left text-center">
      <h1 className="text-4xl lg:text-6xl mt-4 font-light">ABOUT US</h1>
      <p className="lg:text-2xl text-lg my-3 font-extrabold text-pink-600">We help business to grow faster and bigger</p>
      <div className="w-full text-black lg:flex block gap-10">
        <p className="leading-loose font-light">Virall is a results-driven digital agency dedicated to helping businesses thrive in the digital age. Our team of skilled professionals leverages proven strategies to maximize your brand's impact and deliver measurable results.We specialize in a wide range of digital services, including web design and development, digital marketing, branding and identity, social media marketing, content marketing, SEO and SEM, and email marketing.</p>
        <p className="leading-loose font-light">Whether you're a startup or an established enterprise, we have the expertise to help you achieve your digital goals.By combining creativity, innovation, and data-driven insights, we deliver tailored solutions that drive growth and enhance your online presence. Let us help you navigate the complex digital landscape and unlock the full potential of your business.</p>
        
      </div>
      <button className="duration-500 transition-all hover:underline hover:bg-pink-400 bg-pink-600 px-8 hover:px-10 py-2 mt-5 text-white font-bold"><a href="#">Let's Talk</a></button>
      <div className="wwd mt-12">
        <h2 className="text-3xl font-light text-center mb-12">What we do best</h2>
        <div className="flex flex-row flex-wrap justify-start gap-3">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="flex flex-col lg:items-end items-center text-white md:p-4 p-3 border border-gray-300 rounded-lg shadow-md lg:w-4/12 w-full text-center"
              style={profile.style}
              state={{ detail: profile.detail }}
            >
              <img src={profile.iconSrc} alt={profile.title} className="w-12 h-12 object-cover" />
              <h2 className="my-3 text-xl font-bold">{profile.title}</h2>
              <p className="text-sm md:text-right text-center">{profile.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default About