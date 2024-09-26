import React from 'react'
import icon1 from '../assets/responsive.png'
import icon2 from '../assets/seo.jpg'


const Brief = () => {
  return (
    <div className="bg-gray-100 flex p-5">
      <div className="flex flex-col-reverse">
        <div className="flex flex-col items-center">
          <img src={icon1} className="w-4/12 p-2" alt="" />
          <p className="yellow-700">Social Media Marketing</p>
        </div>
        <input type="checkbox" name="" id="" className="" />
      </div>
      <div className="flex flex-col-reverse">
        <div className="flex flex-col items-center">
          <img src={icon1} className="w-4/12 p-2" alt="" />
          <p className="yellow-700">Social Media Marketing</p>
        </div>
        <input type="checkbox" name="" id="" className="" />
      </div>
    </div>
  )
}

export default Brief