import React, { useState, useEffect } from 'react';
import img1 from '../assets/img.jpg';
import img2 from '../assets/key.jpg';
import img3 from '../assets/desk2.jpg';
import img4 from '../assets/code.jpg';
import img5 from '../assets/yellow.jpg';
import img6 from '../assets/climax.jpg';




import '../css/index.css';

const quotes = [
  "The best ui/ux designs you can ever get",
  "Digital Marketing That Boost Bussiness",
  "Responsive And Scaleable Web Applications",
  "Search Engine Optimized (seo) Websites",
  "Branding at it's peak",
  "We Turn Innovative Ideas Into Reality"
];

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6
];

const Welcome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(images[0]);

  const nextQuote = () => {
    setCurrentIndex((currentIndex + 1) % quotes.length);
    setCurrentImage(images[(currentIndex + 1) % quotes.length]);
  };

  const prevQuote = () => {
    setCurrentIndex((currentIndex - 1 + quotes.length) % quotes.length);
    setCurrentImage(images[(currentIndex - 1 + quotes.length) % quotes.length]);
  };

  useEffect(() => {
    const interval = setInterval(nextQuote, 7000); // Change quote and image every 20 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className="show text-center px-4 md:px-30 md:text-center py-10 md:p-20 md:py-20">
        <h1 className="mt-1  text-white md:text-6xl font-bold">Developments <span className="text-yellow-400"> On-going</span> </h1>
        <p className="mt-10 text-base text-white">Welcome sir/ma we are happy to inform you that pur agency platform is under development is atque aperiam at sapiente, vitae qui voluptate esse quis facere magnam, nostrum fugiat aliquid laboriosam maxime.  </p>
        <button className="transition-all duration-500 bg-yellow-500 hover:bg-yellow-600 my-6 py-2 px-12 font-semibold rounded-md text-white">Hire Us</button>
      </div>
      <div className="quote p-2 md:p-12 my-1" style={{ backgroundImage: `url(${currentImage})` }}>
        <h3 className=" font-extrabold text-3xl text-white md:text-4xl text-center mt-6 md:mt-2">What We Do Best</h3>
        <div className="quote-1 text-center p-4 text-base md:text-xl text-white mt-2 leading-loose">&#10075; {quotes[currentIndex]} &#10076;</div>
        <div className="flex justify-evenly text-gray-200">
        <button className="font-extrabold text-yellow-400 text-3xl" onClick={prevQuote}>&#8592;</button>
        <button className="font-extrabold text-yellow-400 text-3xl" onClick={nextQuote}>&#8594;</button>
        </div>
      </div>
    </>
  );
};

export default Welcome;




// import React, { useState, useEffect } from 'react';
// import img1 from '../assets/img.jpg';
// import img2 from '../assets/scatter.jpg'
// import img3 from '../assets/desk2.jpg'


// import '../css/index.css';

// const quotes = [
//   "The best ui/ux designs you can ever get",
//   "Digital Marketing That Boost Bussiness",
//   "Responsive And Scaleable Web Applications",
//   "Search Engine Optimized (seo) Websites",
//   "Branding at it's peak",
//   "We Turn Innovative Ideas Into Reality"
// ];

// const images = [
//   img1,
//   img2,
//   img3,
//   img1,
//   img2
// ];

// const Welcome = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [currentImage, setCurrentImage] = useState(images[0]);

//   const nextQuote = () => {
//     setCurrentIndex((currentIndex + 1) % quotes.length);
//     setCurrentImage(images[(currentIndex + 1) % quotes.length]);
//   };

//   const prevQuote = () => {
//     setCurrentIndex((currentIndex - 1 + quotes.length) % quotes.length);
//     setCurrentImage(images[(currentIndex - 1 + quotes.length) % quotes.length]);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextQuote, 7000); // Change quote and image every 20 seconds
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <>
//       <div className="show text-center px-4 md:px-30 md:text-center py-10 md:p-20 md:py-20">
//         <h1 className="mt-1  text-white md:text-6xl font-bold">Developments <span className="text-yellow-400"> On-going</span> </h1>
//         <p className="mt-10 text-base text-white">Welcome sir/ma we are happy to inform you that pur agency platform is under development is atque aperiam at sapiente, vitae qui voluptate esse quis facere magnam, nostrum fugiat aliquid laboriosam maxime.  </p>
//         <button className="transition-all duration-500 bg-yellow-500 hover:bg-yellow-600 my-6 py-2 px-12 font-semibold rounded-md text-white">Hire Us</button>
//       </div>
//       <div className="quote p-2 md:p-12 my-1">
//         <h3 className=" font-extrabold text-3xl text-white md:text-4xl text-center mt-6 md:mt-2">What We Do Best</h3>
//         <div className="quote-1 text-center p-4 text-base md:text-xl text-white mt-2 leading-loose">&#10075; {quotes[currentIndex]} &#10076;</div>
//         <img src={currentImage} alt="Quote Image" className="image-container" />
//         <div className="flex justify-evenly text-gray-200">
//           <button className="font-extrabold text-yellow-400 text-3xl" onClick={prevQuote}>&#8592;</button>
//           <button className="font-extrabold text-yellow-400 text-3xl" onClick={nextQuote}>&#8594;</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Welcome;