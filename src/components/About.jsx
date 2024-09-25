import React from 'react'

import '../css/index.css'

const About = () => {
  return (
    <div className="about py-20 px-4 mb-8 md:px-20">
      <div className="lg:w-8/12 w-full">
        <h1 className="text-5xl lg:text-8xl text-gray-100 font-bold mb-6">ABOUT US</h1>
        <p className="text-gray-100 text-base md:text-lg leading-8 md:leading-loose my-10">Unlock your brand's potential with Webcoupers' integrated marketing solutions, designed to deliver measurable returns and drive sustainable growth.</p>
        <p className="text-gray-100 text-base md:text-lg leading-8 md:leading-loose">We are a dynamic technology and marketing company that thrives on transforming ideas into reality and driving unparalleled success for our clients. With a passion for pushing boundaries and a commitment to excellence, we have established ourselves as a trusted partner in the ever-evolving world of technology and marketing.</p>
        <p className="text-lg text-blue-800 font-semibold mt-10">Do you have a project that needs pro-expertise?</p>
        <button className="duration-500 transition-all hover:underline hover:bg-blue-900 bg-blue-950 px-6 py-2 mt-5 text-white font-bold"><a href="#">Let's Talk</a></button>
      </div>
    </div>
  )
}

export default About