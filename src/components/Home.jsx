import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
// import logo from '../assets/arrow2.png';
import logo from '../assets/arrow.png';
import '../css/index.css'
import HomeSub from '../components/HomeSub'
import Projects from './Projects'

const Home = () => {
  const text = "Reimagine Your Digital Future, Elevated by \n Virall";
  const loadingText = text.slice(-8); // last 8 letters
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(prev => text.slice(0, -8) + loadingText.slice(0, index + 1));
      index = (index + 1) % loadingText.length;
    }, 800); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <div className="my-28 md:px-12 px-2 text-center">
      <div className="flex flex-col items-center">
      <h1 className="lg:text-5xl text-4xl md:px-10 px-2 font-normal">{displayedText.toUpperCase()}</h1>
        <p className="md:my-10 my-7 md:mx-20 mx-1 md:text-lg text-base">We build <span className="text-green-400">webapps</span> that engage users and rank high on search. Our team delivers expert design, development, maintenance solutions, and offers an <span className="text-orange-400">academy</span> to help you master modern web development....</p>
        <div className="flex gap-5 text-sm mt-2 md:justify-start justify-center">
          <Link to="/about" className="bg-black text-white py-2 font-bold px-8">About us</Link>
          <div className="flex items-center hover:underline">
            <img className="w-5 h-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGUlEQVR4nO2ZuUpDQRSGP+NSqKC4VCpY+gJulU8hiva+gpJKUIy9ShQ7S0UtXBp7tRMl9m6VW6mJhVcGTkACQma9g9wPDgRumMkHc2f+OYGMjIwMTRqBcSAP7AO3wDvwJaU+l+SZ+s4YkCMiBoBV4AlINOsRKAD9aQr0AltAxUCgttQYRaAntMQM8OZAoLZegekQAs3AtgeB2tqUubzQCpwGkEikTmROpzQHlkikzoAWlyIhltNfpTYBJ8ymKJFITdlKdAMvEYi82W7NWxFIJFIbNid2xfAs+PYgUjZNAKuGE3YAw8C5B5mCrkROcpDJZFUagEngzqHIk4TTuhm3mKyWNmAJ+HAkM6IjkncoUmUQ2HUgsqAjcuBBpMoocGkx/p6OSMmjCLLO54Bng/FvdERsIroO7cCibK31jq8O6LqxuSyZMKSxS5ZjF6n3qlyOcWl1ysHrbWmV/svLfuBRZAK4CrX95j2IqMC34yBQzuuIjDmOKMvAp6VAIqUCqVZofIgwNN6bdCcLFjFeBbsLhwKJ1AoG9BueJ+8eBBLZovswpOjpR5nUGhZ0RdJ8eHXRF56OQGQSR2ymKLGOQ1SkOExB4hhowjGt0lgOJXHko4n9u5ldDLScmgjAlKfd7Nnli63TF97QvEv8VWU5J7pIkT6JMybZ7EFih/GJ7YOcZKwFuTPcyE2zIqU+X8uzeUmxUf09nZGRQfz8ACGaYcKeMXOQAAAAAElFTkSuQmCC"/>
            <button className="px-2 font-bold ">Let Talk</button>
          </div>
        </div> 
      </div>
    </div>
    <div className="trusted md:mx-28 mx-4 text-center mb-10 lg-12">
      <p className="text-xl lg-6 font-bold underline my-4">Trusted by top brands</p>
      <div className="flex gap-10 justify-center">
        <a href="https://promaketlinksandservices.ng/"><p className="text-lg text-gray-400">ProMarket</p></a>
        <p className="text-lg text-pink-600">Tradedreamsa</p>
        <img className="w-7" src={logo} alt="" />
        <img className="w-20" src="https://ooozydejaggapckmuidd.supabase.co/storage/v1/object/public/spanish-storage-bucket//Untitled%20design%20(1).png" alt="Spanish-Hotel" />
      </div>
    </div>
    <div className="lg:flex justify-between block md:px-28 gap-8 px-8 my-12 items-center">
      <div className="text-sm lg:text-left text-center md:w-5/6">
        <h1 className="text-2xl mb-4 font-semibold">GROW YOUR BUSINESS WITH VIRALL</h1>
        <p className='text-sm lg:text-left text-center items-end leading-7'>Unlock the full potential of your brand with Virall's comprehensive digital marketing services. From strategic planning and creative design to cutting-edge SEO and social media marketing, our expert team will empower your business to thrive in the digital age. Let's build a stronger online presence together.</p>
      </div>
      <div className="w-full">
        <img className="w-full h-36 object-cover my-8" src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
    <Projects />
    <HomeSub />
    </>
  );
};

export default Home;

