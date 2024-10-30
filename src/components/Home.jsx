import React from 'react';
// import logo from '../assets/arrow2.png';
import logo from '../assets/arrow.png';
import '../css/index.css'

const Home = () => {
  return (
    <>
    <div className="my-20 md:px-12 px-2 text-center">
        <div className="flex flex-col items-center">
            <h1 className="lg:text-5xl text-4xl font-normal">MAKE GREAT COMMUNICATION WITH YOUR TEAM</h1>
            <p className="md:my-10 my-7 md:mx-20 mx-3 md:text-lg text-base">We build webapps that are optimized for both search engines and users. Our team provides comprehensive design, development, and maintenance solutions...</p>
            <div className="flex gap-5 text-sm mt-2 md:justify-start justify-center">
                <button className="bg-black text-white py-2 px-8">About us</button>
                <div className="flex items-center hover:underline">
                    <img className="w-5 h-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGUlEQVR4nO2ZuUpDQRSGP+NSqKC4VCpY+gJulU8hiva+gpJKUIy9ShQ7S0UtXBp7tRMl9m6VW6mJhVcGTkACQma9g9wPDgRumMkHc2f+OYGMjIwMTRqBcSAP7AO3wDvwJaU+l+SZ+s4YkCMiBoBV4AlINOsRKAD9aQr0AltAxUCgttQYRaAntMQM8OZAoLZegekQAs3AtgeB2tqUubzQCpwGkEikTmROpzQHlkikzoAWlyIhltNfpTYBJ8ymKJFITdlKdAMvEYi82W7NWxFIJFIbNid2xfAs+PYgUjZNAKuGE3YAw8C5B5mCrkROcpDJZFUagEngzqHIk4TTuhm3mKyWNmAJ+HAkM6IjkncoUmUQ2HUgsqAjcuBBpMoocGkx/p6OSMmjCLLO54Bng/FvdERsIroO7cCibK31jq8O6LqxuSyZMKSxS5ZjF6n3qlyOcWl1ysHrbWmV/svLfuBRZAK4CrX95j2IqMC34yBQzuuIjDmOKMvAp6VAIqUCqVZofIgwNN6bdCcLFjFeBbsLhwKJ1AoG9BueJ+8eBBLZovswpOjpR5nUGhZ0RdJ8eHXRF56OQGQSR2ymKLGOQ1SkOExB4hhowjGt0lgOJXHko4n9u5ldDLScmgjAlKfd7Nnli63TF97QvEv8VWU5J7pIkT6JMybZ7EFih/GJ7YOcZKwFuTPcyE2zIqU+X8uzeUmxUf09nZGRQfz8ACGaYcKeMXOQAAAAAElFTkSuQmCC"/>
                    <button className="px-2 ">Let Talk</button>
                </div>
            </div> 
        </div>
    </div>
    <div className="trusted md:mx-28 mx-4 md:text-left text-center mb-12">
      <p className="text-xl mb-6 font-bold underline">Trusted by top brands</p>
      <div className="flex gap-10 md:justify-start justify-center">
        <p className="text-xl text-blue-300">Econnsrent</p>
        <p className="text-xl text-pink-600">Tradedreamsa</p>
        <img className="w-8" src={logo} alt="" />
        <img className="w-8" src={logo} alt="" />
      </div>
    </div>
    <div className="text-center mt-2 px-0  md:px-10">
      <div className="welcomes py-16 px-4 md:px-16 my-5">
        <p className=" text-gray-100 text-3xl md:text-5xl font-bold leading-snug md:leading-snug">A Full Service <span className="text-yellow-600"> Integrated</span> Consulting Company where Technology meets Marketing.</p>
        <p className="text-base lg:text-lg text-gray-100 my-6 leading-7 lg:leading-9">We build webapps that are optimized for both search engines and users. Our team provides comprehensive design, development, and maintenance solutions.</p>
        <button className="px-16 py-2 mt-2 w-full lg:w-auto text-gray-200 bg-yellow-600 font-bold hover:bg-yellow-700 bg-text-gray-100 transition-all duration-500">Let's Talk</button>
      </div>
      
    </div>
    </>
  );
};

export default Home;

