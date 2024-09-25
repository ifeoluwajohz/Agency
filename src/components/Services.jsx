import React from 'react'
import web from '../assets/icons/call.png'
import design from '../assets/icons/instagram.png'
import branding from '../assets/icons/facebook.png'
import advertising from '../assets/icons/twitter.png'

import img from '../assets/seo.jpg'
import young from '../assets/code.jpg'

import '../css/index.css'


const Services = () => {
  return (
    <>
    {/* <div className="bg-gray-100 p-2 py-12 mt-8 md:p-16">
        <div className="mb-4 mx-6 mt-2 md:mt-8 text-left ">
            <p className="text-purple-500 font-semibold">OUR SERVICE</p>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-4 ">What Solutions We Offer You</h1>
        </div>
        <div className="service flex p-0">
            <div className="box hover:bg-white p-6 my-3 md:p-8">
                <img src={web} className="w-8 mb-4" alt="web development services" />
                <h3 className="text-xl font-bold mb-4">Web Development</h3>
                <p>Lorem ipsum dolor sit amet necessitatibus, exercitationem corporis ab, vero harum dolorem cumque pturi ad maxime inventore praes.</p>
            </div>
            <div className="box hover:bg-white p-6 my-3 md:p-8">
                <img src={design} className="w-8 mb-4" alt="web development services" />
                <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
                <p>Lorem ipsum dolor sit amet necessique pturi ad maxime inventore praesentium. Laboriosam nostrum velit commodi.</p>
            </div>
            <div className="box hover:bg-white p-6 my-3 md:p-8">
                <img src={branding} className="w-8 mb-4" alt="web development services" />
                <h3 className="text-xl font-bold mb-4">Branding Service</h3>
                <p>Lorem ip necessitatibus, exercitat pturi ad maxime inventore praesentium. Laboriosam nostrum velit commodi.</p>
            </div>
            <div className="box hover:bg-white p-6 my-3 md:p-8">
                <img src={advertising} className="w-8 mb-4" alt="web development services" />
                <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
                <p>Lorem ipsum dolor sit amet necessitatibus, exercitationem corporis ab, vero harum dolorem cumque pturi ad maxime inventore p.</p>
            </div>
        </div>
    </div> */}
    <div className="bg-img">
        <h1 className="text-gray-100 text-4xl md:text-6xl text-extrabold text-center m-10">Our Services</h1>

    </div>
    <div className="services ">
        <div className="digital-marketing my-1 flex flex-col md:flex-row items-center bg-gradient-to-r from-cyan-700 to-pink-700">
            <img src={img} alt="" className="bg-contain h-full md:h-96 w-full md:w-1/2" />
            <div className="details px-3 md:px-6 text-white text-left">
                <p className="mt-8">#1</p>
                <h1 className="text-4xl font-bold mt-1">Digital <span className="text-yellow-500">Marketing</span></h1>
                <p className="my-6 mb-10 leading-7 ">Ignite your brand's digital impact with our dynamic marketing strategies that fuse creativity and precision. By harnessing data-driven insights, we propel businesses to the forefont of the digital landscape.</p>
                <div className="">
                    <div className="flex mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 pr-4">
                            <path d="M90,50 L10,10 L10,90 Z" fill="#eea537"/>
                        </svg>
                        <p>Advertising</p>
                    </div>
                    <div className="flex mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 pr-4">
                            <path d="M90,50 L10,10 L10,90 Z" fill="#eea537"/>
                        </svg>
                        <p>Branding</p>
                    </div>
                    <div className="flex mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 pr-4">
                            <path d="M90,50 L10,10 L10,90 Z" fill="#eea537"/>
                        </svg>
                        <p>Social Media Marketing</p>
                    </div>
                    <div className="flex mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 pr-4">
                            <path d="M90,50 L10,10 L10,90 Z" fill="#eea537"/>
                        </svg>
                        <p>Search Engine Optimazation </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="web-development flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-700 to-green-700">
            <img src={young} alt="" className="bg-contain h-full md:h-96 w-full md:w-1/2" />
            <div className="details px-3 md:px-6 text-white text-left">
                <p className="mt-8">#2</p>
                <h1 className="text-4xl font-bold mt-1">Web Design & Web <span className="text-yellow-500"> Development</span></h1>
                <p className="my-6 mb-10 leading-7 ">Ignite your brand's digital impact with our dynamic marketing strategies that fuse creativity and precision. By harnessing data-driven insights, we propel businesses to the forefont of the digital landscape.</p>
                <div className="items-end">
                    <div className="flex mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 pr-4">
                            <path d="M90,50 L10,10 L10,90 Z" fill="#eea537"/>
                        </svg>
                        <p>Ui/Ux</p>
                    </div>
                    <div className="flex mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 pr-4">
                            <path d="M90,50 L10,10 L10,90 Z" fill="#eea537"/>
                        </svg>
                        <p>Prototyping</p>
                    </div>
                    <div className="flex mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 pr-4">
                            <path d="M90,50 L10,10 L10,90 Z" fill="#eea537"/>
                        </svg>
                        <p>Graphics Designs</p>
                    </div>
                    <div className="flex mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 pr-4">
                            <path d="M90,50 L10,10 L10,90 Z" fill="#eea537"/>
                        </svg>
                        <p>Web Development</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services