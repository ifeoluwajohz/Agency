import React from 'react';
// import logo from '../assets/arrow2.png';
import logo from '../assets/arrow.png';
import '../css/index.css'
import HomeSub from '../components/HomeSub'

const Home = () => {
  return (
    <>
    <div className="my-20 md:px-12 px-2 text-center">
      <div className="flex flex-col items-center">
        <h1 className="lg:text-5xl text-4xl md:px-10 px-2 font-normal">MAKE GREAT COMMUNICATION WITH YOUR TEAM</h1>
        <p className="md:my-10 my-7 md:mx-20 mx-1 md:text-lg text-base">We build <span className="text-green-400">webapps</span> that are optimized for both search engines and users. Our team provides comprehensive design, development, and maintenance solutions...</p>
        <div className="flex gap-5 text-sm mt-2 md:justify-start justify-center">
          <button className="bg-black text-white py-2 px-8">About us</button>
          <div className="flex items-center hover:underline">
            <img className="w-5 h-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGUlEQVR4nO2ZuUpDQRSGP+NSqKC4VCpY+gJulU8hiva+gpJKUIy9ShQ7S0UtXBp7tRMl9m6VW6mJhVcGTkACQma9g9wPDgRumMkHc2f+OYGMjIwMTRqBcSAP7AO3wDvwJaU+l+SZ+s4YkCMiBoBV4AlINOsRKAD9aQr0AltAxUCgttQYRaAntMQM8OZAoLZegekQAs3AtgeB2tqUubzQCpwGkEikTmROpzQHlkikzoAWlyIhltNfpTYBJ8ymKJFITdlKdAMvEYi82W7NWxFIJFIbNid2xfAs+PYgUjZNAKuGE3YAw8C5B5mCrkROcpDJZFUagEngzqHIk4TTuhm3mKyWNmAJ+HAkM6IjkncoUmUQ2HUgsqAjcuBBpMoocGkx/p6OSMmjCLLO54Bng/FvdERsIroO7cCibK31jq8O6LqxuSyZMKSxS5ZjF6n3qlyOcWl1ysHrbWmV/svLfuBRZAK4CrX95j2IqMC34yBQzuuIjDmOKMvAp6VAIqUCqVZofIgwNN6bdCcLFjFeBbsLhwKJ1AoG9BueJ+8eBBLZovswpOjpR5nUGhZ0RdJ8eHXRF56OQGQSR2ymKLGOQ1SkOExB4hhowjGt0lgOJXHko4n9u5ldDLScmgjAlKfd7Nnli63TF97QvEv8VWU5J7pIkT6JMybZ7EFih/GJ7YOcZKwFuTPcyE2zIqU+X8uzeUmxUf09nZGRQfz8ACGaYcKeMXOQAAAAAElFTkSuQmCC"/>
            <button className="px-2 ">Let Talk</button>
          </div>
        </div> 
      </div>
    </div>
    <div className="trusted md:mx-28 mx-4 text-center lg-12">
      <p className="text-xl lg-6 font-bold underline my-4">Trusted by top brands</p>
      <div className="flex gap-10 justify-center">
        <p className="text-lg text-gray-400">Econnsrent</p>
        <p className="text-lg text-pink-600">Tradedreamsa</p>
        <img className="w-7" src={logo} alt="" />
        <img className="w-7" src={logo} alt="" />
      </div>
    </div>
    <div className="lg:flex block md:px-28 px-8 my-20 items-center">
      <div className="text-sm lg:text-left text-center items-end">
        <h1 className="text-2xl lg:mb-0 mb-6">GROW YOUR BUSINESS WITH VIRALL</h1>
      </div>
      <div className="quotes lg:w-4/6 w-6/6">
        <p className='text-sm lg:text-right text-center items-end '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus in distinctio quaerat magni harum quas expedus beatae commodi asore earum architecto expedita optio quos sint unde, officia temporibus maxime est odit, nulla tenetur debitis doloribus suscipit assumenda quas. Vero, quas?</p>
      </div>
    </div>
    <HomeSub />
    </>
  );
};

export default Home;

