import React, { useState } from 'react';
import icon1 from '../assets/responsive.png';
import icon2 from '../assets/arrow.png';

import '../css/index.css'


const Brief = () => {
  const [isBrand, setIsBrand] = useState(true);
  const [isSmm, setIsSmm] = useState(true);
  const [isToggled, setIsToggled] = useState(true);
  const [amount, setAmount] = useState(80000); // Initial amount in Naira
  const [dollarAmount, setDollarAmount] = useState(1600); // Initial amount in Dollars (based on exchange rate)

  const handleAmountChange = (event) => {
    const newAmount = parseInt(event.target.value);
    setAmount(newAmount);
    setDollarAmount(newAmount / 1600); // Assuming the exchange rate is 465 Naira per Dollar
  };

  // const toggleBrand = () => {
  //   setIsBrand(!isBrand);
  //   if (isSmm) {
  //     setIsSmm(false);
  //   }
  // };

  // const toggleSmm = () => {
  //   setIsSmm(!isSmm);
  //   if (isBrand) {
  //     setIsBrand(false);
  //   }
  // };

  const toggleSmm= () => {
    setIsToggled(!isToggled);
    setIsSmm(!isSmm);
    // setIsSmm(!isSmm);
  };

  const toggleBrand = () => {
    setIsToggled(!isToggled);
    setIsBrand(!isBrand);
  }

  return (
    <>

{isToggled && (
        // <button
        //   className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300" onClick={handleToggle}> Click to Toggle </button>

         <div className="bg-gray-200 text-pink-500 text-center p-2">
        <h1 className="text-2xl underline">Select a package.</h1>
        <div className="flex mt-4 justify-evenly">
          <div onClick={toggleBrand} className="flex flex-col-reverse hover:underline">
            <div className="flex flex-col items-center">
              <img src={icon2} className="w-5/12 p-2" alt="" />
              <p className="">Branding</p>
            </div>
            <input type="checkbox" name="" id="" className="" />
          </div>
          <div onClick={toggleSmm} className="flex flex-col-reverse hover:underline">
            <div className="flex flex-col items-center">
              <img src={icon1} className="w-5/12 p-2" alt="" />
              <p className="">Social Media Marketing</p>
            </div>
            <input type="checkbox" name="" id="" className="" />
          </div>
        </div>
      </div> 
      )}
      {/* <div className="bg-gray-200 text-pink-500 text-center p-2">
        <h1 className="text-2xl underline">Select a package.</h1>
        <div className="flex mt-4 justify-evenly">
          <div onClick={handleToggle} className="flex flex-col-reverse hover:underline">
            <div className="flex flex-col items-center">
              <img src={icon2} className="w-5/12 p-2" alt="" />
              <p className="">Branding</p>
            </div>
            <input type="checkbox" name="" id="" className="" />
          </div>
          <div onClick={handleToggle} className="flex flex-col-reverse hover:underline">
            <div className="flex flex-col items-center">
              <img src={icon1} className="w-5/12 p-2" alt="" />
              <p className="">Social Media Marketing</p>
            </div>
            <input type="checkbox" name="" id="" className="" />
          </div>
        </div>
      </div> */}

      {/* {isBrand && (
        <div className="bg-gray-200 text-center text-pink-500 p-2">
          <h1 className="text-xl">Select a Section.</h1>
          <div className="flex justify-evenly">
            <div className="flex flex-col-reverse hover:underline w-3/12" >
              <div className="flex flex-col items-center">
                <img src={icon1} className="w-3/12 p-2" alt="" />
                <p className="">Logo Creation</p>
              </div>
              <input type="checkbox" name="" id="" className="" />
            </div>
            <div className="flex flex-col-reverse hover:underline w-3/12">
              <div className="flex flex-col items-center">
                <img src={icon1} className="w-3/12 p-2" alt="" />
                <p className="">Flyer Designs</p>
              </div>
              <input type="checkbox" name="" id="" className="" />
            </div>
          </div>
        </div>
      )}

      {isSmm && (
        <div className="bg-gray-200 text-center text-pink-500 p-2">
          <h1 className="text-xl">Select a Section.</h1>
          <div className="flex items-center">
            <div className="flex flex-col-reverse hover:underline">
              <div className="flex flex-col items-center">
                <img src={icon1} className="w-3/12 p-2" alt="" />
                <p className="yellow-700">Google Analytics</p>
              </div>
              <input type="checkbox" name="" id="" className="" />
            </div>
            <div className="flex flex-col-reverse hover:underline p-2">
              <div className="flex flex-col items-center">
                <img src={icon1} className="w-3/12 p-2" alt="" />
                <p className="yellow-700 text-base md:text-lg">Facebook Ads</p>
              </div>
              <input type="checkbox" name="" id="" className="" />
            </div>
          </div>
            <div className="flex flex-col items-center justify-center">
              <label htmlFor="amount" className="text-lg font-semibold mb-2">Amount:</label>
              <input
                type="range"
                id="amount"
                min="50000"
                max="1200000"
                step="10000"
                value={amount}
                onChange={handleAmountChange}
                className="w-3/6 h-2 rounded-lg appearance-none bg-purple-700 text-green-300"
              />
        
              <div className="flex mt-4">
                <output id="amountOutput" className="text-lg font-semibold mr-2">N{amount}</output>
                <output id="amountOutputDollars" className="text-lg font-semibold">${dollarAmount.toFixed(2)}</output>
              </div>
            </div>    
            <form className="mt-10" action="" method="post">
              <h1 className="text-3xl text-slate-500 font-medium mb-4">Tell us about your project</h1>
              <input type="text" className="px-4 w-9/12 md:w-4/12  py-2 my-2 focus:outline-gray-300" placeholder='Your Full Name...' /><br/>
              <input type="email" className="px-4 w-9/12 md:w-4/12  py-2 focus:outline-gray-300" name="email" placeholder='Your Email Address' id="" /><br />
              <textarea name="" className="px-4 w-9/12 md:w-4/12 py-2 h-32 my-2 focus:outline-gray-300" placeholder='Tell us about your project' id=""></textarea>
            </form>  
            <button className="bg-pink-700 font-semibold hover:bg-pink-800 px-8 py-2 text-white rounded-md" type="submit">Submit</button>
        </div>
        
      )} */}

{!isBrand  && (
        <div className="bg-gray-200 text-center text-pink-500 p-2">
          <button
            className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors duration-300"
            onClick={toggleBrand}
          >
            Go Back
          </button>
        <h1 className="text-xl">Select a Section.</h1>
        <div className="flex justify-evenly">
          <div className="flex flex-col-reverse hover:underline w-3/12" >
            <div className="flex flex-col items-center">
              <img src={icon1} className="w-3/12 p-2" alt="" />
              <p className="">HTML 1</p>
            </div>
            <input type="checkbox" name="" id="" className="" />
          </div>
          <div className="flex flex-col-reverse hover:underline w-3/12">
            <div className="flex flex-col items-center">
              <img src={icon1} className="w-3/12 p-2" alt="" />
              <p className="">HTML 2</p>
            </div>
            <input type="checkbox" name="" id="" className="" />
          </div>
        </div>
      </div>
          
      )}


{!isSmm  && (
        <div className="bg-gray-200 text-center text-pink-500 p-2">
          <button
            className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors duration-300"
            onClick={toggleSmm}
          >
            Go Back
          </button>
        <h1 className="text-xl">Select a Section.</h1>
        <div className="flex justify-evenly">
          <div className="flex flex-col-reverse hover:underline w-3/12" >
            <div className="flex flex-col items-center">
              <img src={icon1} className="w-3/12 p-2" alt="" />
              <p className="">Logo Creation</p>
            </div>
            <input type="checkbox" name="" id="" className="" />
          </div>
          <div className="flex flex-col-reverse hover:underline w-3/12">
            <div className="flex flex-col items-center">
              <img src={icon1} className="w-3/12 p-2" alt="" />
              <p className="">Flyer Designs</p>
            </div>
            <input type="checkbox" name="" id="" className="" />
          </div>
        </div>
      </div>
          
      )}
    </>
  );
};

export default Brief;