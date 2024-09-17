import React from 'react'
import twitter from '../assets/icons/twitter.png'
import facebook from '../assets/icons/facebook.png'

import instagram from '../assets/icons/instagram.png'
import send from '../assets/icons/send.png'




import '../css/index.css'

const Footer = () => {
  return (
    <div>
        <div className="footer bg-gray-200 text-gray-600 flex justify-between p-6 md:p-16">
          <div className="logo left px-8">
            <h1 className="text-3xl text-gray-600 mb-8">Logo</h1>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi ipsa accusamus maxime asperiores eligendi dolores facilis excepturi a omnis? Optio neque magni, provident doloribus eligendi, corrupti iure reprehenderit at eius sunt quae ex itaque tempore possimus dicta! Cum, animi?</p>
            <div className="social flex flex-start">
            <img src={facebook} alt="" className="w-10 pr-4" />
              <img src={twitter} alt="" className="w-10 pr-4" />
              <img src={instagram} alt="" className="w-10 pr-4" />
            </div>
          </div>
          <div className="info px-8">
            <h1 className="text-2xl text-gray-600 mb-10">Information</h1>
            <div className="flex pb-2">
              <p className="">+2348026144324</p>
            </div>
            <div className="flex pb-2">
              <p className="">Ifeoluwajohz@gmail.com</p>
            </div>
            <div className="flex pb-2 items-baseline">
              <p className="">No 6, Lorem ipsum dolor mi corrupti velit.</p>
            </div>
          </div>


          <div className="subscribe left px-8">
            <h1 className="text-2xl text-gray-600 mb-8">Subscribe Now</h1>
            <form className="mb-0 flex">
              <input type="email" className="px-4 py-2 focus:outline-gray-300" placeholder='Email Address'/>
              <button className="bg-yellow-500 w-11 items-center text-center"><img src={send} className="w-10 p-3" alt="subscribe-button" /></button>

            </form>
          </div>
        </div>
        <div className="last mb-2 mt-1 p-4 flex text-center flex-col-reverse px-8 md:px-12 bg-gray-200 text-gray-600 md:flex-row  md:justify-between">
          <p className="ml:2 md:ml-10 text-left ">2024 <span className="text-black"> BrandName.</span>All Rights Reserved. </p>
          <div className="lastflex flex text-xs leading-10 items-center flex-wrap md:text-sm ml:2 md:ml-10 mb-8 md:mb-0">
            <p className="pr-4">WHO WE ARE</p>|
            <p className="px-4">OUR WORK</p>|
            <p className="px-4 leading-loose">OUR PARTNERS</p>|
            <p className="px-1 sm:px-4">CAPABILITIES</p>
          </div>
        </div>
    </div>
  )
}

export default Footer