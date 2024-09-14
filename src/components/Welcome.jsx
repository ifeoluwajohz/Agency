import React, {useState, useEffect} from 'react'
import Slider from 'react-slick';

import '../css/index.css'

const quotes = [
  "The best ui/ux designs you can ever get",
  "Digital Marketing That Boost Bussiness",
  "Responsive And Scaleable Web Applications",
  "Search Engine Optimized (seo) Websites",
  "Branding at it's peak",
  "We Turn Innovative Ideas Into Reality"
];


const Welcome = () => {

  const [currentIndex, setCurrentIndex] = useState(0);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,


  };


    const nextQuote = () => {
        setCurrentIndex((currentIndex + 1) % quotes.length);
    };

    const prevQuote = () => {
        setCurrentIndex((currentIndex - 1 + quotes.length) % quotes.length);
    };

  useEffect(() => {
    const interval = setInterval(nextQuote, 7000); // Change quote every 20 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
}, [currentIndex]);

  return (
    <>
    <div className="show text-center px-4 md:px-30 md:text-center py-10 md:p-40 md:py-20 mt-1 md:mt-1">
      <h1 className="mt-1  text-white md:text-6xl font-bold">Developments <span className="text-yellow-400"> On-going</span> </h1>
      <p className="mt-10 text-base text-white">Welcome sir/ma we are happy to inform you that pur agency platform is under development is atque aperiam at sapiente, vitae qui voluptate esse quis facere magnam, nostrum fugiat aliquid laboriosam maxime.  </p>
      <button className="transition-all duration-500 bg-yellow-500 hover:bg-yellow-600 my-6 py-2 px-12 font-semibold rounded-md text-white">Hire Us</button>
    </div>
    <div className="quote p-2 md:p-12 my-1">
      <h3 className=" font-extrabold text-3xl text-white md:text-4xl text-center mt-6 md:mt-2">What We Do Best</h3>
      <div className="quote-1 text-center p-4 text-base md:text-xl text-white mt-2 leading-loose">&#10075; {quotes[currentIndex]} &#10076;</div>
      <div className="flex justify-evenly text-gray-200">
        <button className="font-extrabold text-yellow-400 text-3xl" onClick={prevQuote}>&#8592;</button>
        <button className="font-extrabold text-yellow-400 text-3xl" onClick={nextQuote}>&#8594;</button>
      </div>
    </div>
    </>

  )
}

export default Welcome