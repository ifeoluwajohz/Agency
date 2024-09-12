import React from 'react'
import front from '../assets/key.jpg'
import send from '../assets/arrow2.png'
import arrow from '../assets/arrow.png'

import '../css/index.css'


const Welcome = () => {
  return (
    <>
    <div className="show text-center px-4 md:px-40 md:text-center py-10 md:p-40 md:py-20 mt-1 md:mt-1">
      <h1 className="mt-2 text-8xl text-white font-bold">Marketing</h1>
      <p className="mt-10  text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, quo! Laborum aspernatur ex debitis atque aperiam at sapiente, vitae qui voluptate esse quis facere magnam, nostrum fugiat aliquid laboriosam maxime.  </p>
      <button className="bg-red-600 hover:bg-red-800 mt-10 md:mt-12 py-2 px-6 font-semibold rounded-md text-white">Get Started</button>
    </div>
      <div className="showcase mt-4 mx-0 p-6 md:px-20 md:mx-2">
        <div className="text-left pr-2">
          <h1 className="text-gray-800 text-6xl leading-tight font-normal mb-6"><img src={send} className="w-8 ml-4 " alt="" />Advance strategy to transform your <span className="">business</span></h1>
          <p className="text-xl  mt-8 leading-loose ">We are Agency . A Creative Desig Social Marketing Helping you maximize operations management with digitization. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, ab!</p>

          <div className="pt-6">
            <button className="hover:bg-white items-center bg-gray-700 underline flex text-sm md:text-xl mb-6 text-white delay-100 hover:text-gray-700 py-2 px-4 font-bold">JOIN OUR WAITLIST<img src={arrow} alt="" className="w-8 ml-4 " /></button>

          </div>
        </div>
        <img 
            className="img pl-0 w-16 md:w-8" 
            src={front} 
            alt="Responsive"
        />
    </div>

    {/* <div className="links">
      <h1>Follow us :</h1>
    </div> */}
    </>

  )
}

export default Welcome