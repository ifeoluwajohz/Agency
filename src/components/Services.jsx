import React from 'react'
import web from '../assets/icons/web.png'
import design from '../assets/icons/design.png'
import branding from '../assets/icons/design-tool.png'
import advertising from '../assets/icons/advertising.png'

import '../css/index.css'


const Services = () => {
  return (
    <div className="bg-gray-100 p-2 py-12 mt-8 md:p-16">
        <div className="text-center mb-4 mx-6 mt-2 md:mt-8 md:text-left ">
            <p className="text-purple-500 font-semibold">OUR SERVICE</p>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-4 ">What Solutions We Offer You</h1>
        </div>
        <div className="service flex p-4 md:p-0">
            <div className="box hover:bg-white p-6 my-6 md:p-8">
                <img src={web} className="w-8 mb-4" alt="web development services" />
                <h3 className="text-xl font-bold mb-4">Web Development</h3>
                <p>Lorem ipsum dolor sit amet necessitatibus, exercitationem corporis ab, vero harum dolorem cumque pturi ad maxime inventore praes.</p>
            </div>
            <div className="box hover:bg-white p-6 my-6 md:p-8">
                <img src={design} className="w-8 mb-4" alt="web development services" />
                <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
                <p>Lorem ipsum dolor sit amet necessique pturi ad maxime inventore praesentium. Laboriosam nostrum velit commodi.</p>
            </div>
            <div className="box hover:bg-white p-6 my-6 md:p-8">
                <img src={branding} className="w-8 mb-4" alt="web development services" />
                <h3 className="text-xl font-bold mb-4">Branding Service</h3>
                <p>Lorem ip necessitatibus, exercitat pturi ad maxime inventore praesentium. Laboriosam nostrum velit commodi.</p>
            </div>
            <div className="box hover:bg-white p-6 my-6 md:p-8">
                <img src={advertising} className="w-8 mb-4" alt="web development services" />
                <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
                <p>Lorem ipsum dolor sit amet necessitatibus, exercitationem corporis ab, vero harum dolorem cumque pturi ad maxime inventore p.</p>
            </div>
        </div>
    </div>
  )
}

export default Services