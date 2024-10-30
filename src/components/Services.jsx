import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import img from '../assets/seo.jpg'
import young from '../assets/code.jpg'

import icon from '../assets/icons/facebook.png'
import icon2 from '../assets/icons/call.png'
import icon3 from '../assets/icons/twitter.png'

import Brief from './Briefdigital.jsx'



import '../css/index.css'

const Services = () => {
    const [isDigital, isSetDigital] = useState(true)

    const toggleMenu = () => {
        isSetDigital(!isDigital);
      };

  return (
    <>

    <div className="bg-img">
        <h1 className="text-gray-100 text-5xl font-extrabold text-center m-5">OUR SERVICES</h1>
    </div>
    <div className="services ">
        <div className="digital-marketing my-1 flex flex-col md:flex-row items-center bg-gradient-to-r from-cyan-700 to-green-700">
            <img src={img} alt="" className="bg-contain h-full md:h-96 w-full md:w-1/2" />
            <div className="details px-3 md:px-6 text-white text-left">
                <h1 className="text-4xl font-bold mt-5">Graphics & <span className="text-green-500">Designs</span></h1>
                <p className="my-6 mb-10 leading-7 ">Ignite your brand's digital impact with our dynamic marketing strategies that fuse creativity and precision. By harnessing data-driven insights, we propel businesses to the forefont of the digital landscape.</p>
                <div className="packages">
                <div className="features">
                    <div className="flex mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 pr-4">
                            <path d="M90,50 L10,10 L10,90 Z" fill="#c93991"/>
                        </svg>
                        <p>Graphics Designs</p>
                    </div>
                    <div className="flex mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 pr-4">
                            <path d="M90,50 L10,10 L10,90 Z" fill="#c93991"/>
                        </svg>

                        <p>Branding</p>
                    </div>
                    <div className="flex mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 pr-4">
                            <path d="M90,50 L10,10 L10,90 Z" fill="#c93991"/>
                        </svg>
                        <p>Ui/Ux design</p>
                    </div>
                    <div className="flex mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 pr-4">
                            <path d="M90,50 L10,10 L10,90 Z" fill="#c93991"/>
                        </svg>
                        <p>Prototyping</p>
                    </div>
                </div>
                <div className="mb-1 text-center">
                    <p onClick={toggleMenu} className="bg-white p-2 text-pink-500 font-bold hover:bg-pink-700 hover:text-white transition-all duration-800">{isDigital ? 'View Package' : 'Unview Package'}</p>
                </div>
                </div>
            </div>
        </div>
        {isDigital ? '' : 
            <Brief />
          }
        <div className="web-development flex flex-col md:flex-row items-center bg-gradient-to-r from-gray-900 to-yellow-700">
            <img src={young} alt="" className="bg-contain h-full md:h-96 w-full md:w-1/2" />
            <div className="details px-3 md:px-6 text-white text-left">
                <h1 className="text-4xl font-bold mt-5">Web <span className="text-yellow-500"> Development</span></h1>
                <p className="my-6 mb-10 leading-7 ">Ignite your brand's digital impact with our dynamic marketing strategies that fuse creativity and precision. By harnessing data-driven insights, we propel businesses to the forefont of the digital landscape.</p>
                <div className="packages">
                <div className="features">
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
                        <p>App Development</p>
                    </div>
                    <div className="flex mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 pr-4">
                            <path d="M90,50 L10,10 L10,90 Z" fill="#eea537"/>
                        </svg>
                        <p>Web Development & Application</p>
                    </div>
                </div>
                <div className="mb-1 text-center">
                    <Link to="/previous-project">
                    <p className="bg-white p-2 text-yellow-500 font-bold hover:bg-yellow-600 hover:text-white transition-all duration-800">View Package</p>

                    </Link>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services