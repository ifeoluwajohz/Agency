import React, { useState } from 'react';
const topImg = 'https://img.freepik.com/free-photo/pretty-african-female-photographer-having-fun-with-designers-programmers-office-indoor-photo-laughing-freelance-specialists-fooling-around-conference-hall_197531-3722.jpg?t=st=1730713808~exp=1730717408~hmac=1d6f15030cb9aaf9c99e8bbb940613ce7cef33a4ff150130b9e09782e7042861&w=740';

import '../css/index.css';
import profiles from '../data/profilesData';
const svgIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-6 pr-2">
    <path d="M90,50 L10,10 L10,90 Z" fill="#c93991" />
  </svg>
);

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    recipientEmail: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Basic client-side validation
    const validationErrors = {};
    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }
    if (!formData.recipientEmail) {
      validationErrors.recipientEmail = 'Recipient email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.recipientEmail)) {
      validationErrors.recipientEmail = 'Invalid recipient email address';
    }
    if (!formData.message) {
      validationErrors.message = 'Message is required';
    }
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    setIsLoading(true);
    setErrors({});
  
    try {
      const response = await fetch('https://portfolio-backend-ce6g.onrender.com/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      // Handle success response (e.g., show success message)
      setIsSuccess(true);
  
      // Clear the form fields immediately after a successful submission
      setFormData({
        name: '',
        recipientEmail: '',
        message: '',
      });
  
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show error message)
      setErrors({ general: 'An error occurred. Please try again later.' });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <>
    <img src={topImg} alt="" className="w-full h-36 object-cover object-center" />
    <div className="py-6 px-4 md:px-20 md:text-left text-center">
      <h1 className="text-4xl lg:text-6xl mt-4 font-light">ABOUT US</h1>
      <p className="lg:text-2xl text-lg my-3 font-extrabold text-pink-600">We help business to grow faster and bigger</p>
      <div className="w-full text-black lg:flex block gap-10">
        <p className="leading-loose font-light">Virall is a results-driven digital agency dedicated to helping businesses thrive in the digital age. Our team of skilled professionals leverages proven strategies to maximize your brand's impact and deliver measurable results.We specialize in a wide range of digital services, including web design and development, digital marketing, branding and identity, social media marketing, content marketing, SEO and SEM, and recipientEmail marketing.</p>
        <p className="leading-loose font-light">Whether you're a startup or an established enterprise, we have the expertise to help you achieve your digital goals.By combining creativity, innovation, and data-driven insights, we deliver tailored solutions that drive growth and enhance your online presence. Let us help you navigate the complex digital landscape and unlock the full potential of your business.</p>
        
      </div>
      <button className="duration-500 transition-all hover:underline hover:bg-pink-400 bg-pink-600 px-8 hover:px-10 py-2 mt-5 text-white font-bold"><a href="#">Let's Talk</a></button>
      <div className="wwd mt-12">
        <h2 className="text-3xl font-light text-center mb-12">What we do best</h2>
        <div className="flex flex-row flex-wrap justify-center gap-3">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="flex flex-col lg:items-end items-center text-white md:p-4 p-3 border border-gray-300 rounded-lg shadow-md lg:w-4/12 w-full text-center"
              style={profile.style}
              state={{ detail: profile.detail }}
            >
              <img src={profile.iconSrc} alt={profile.title} className="w-12 h-12 object-cover" />
              <h2 className="my-3 text-xl font-bold">{profile.title}</h2>
              <p className="text-sm md:text-right text-center">{profile.info}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="wsu md:p-10 mt-10">
        <h3 className="text-3xl text-center font-light">Why choose us?</h3>
        <div className="flex flex-col gap-3 items-center mt-8 text-left md:p-4 p-1">
        <div className="flex md:gap-5 gap-2 items-start">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>Expertise: Our team has years of experience in the digital marketing industry.</p> 
        </div>
        <div className="flex md:gap-5 gap-2 items-start">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>Creativity: We bring fresh ideas and innovative solutions to every project.</p> 
        </div>
        <div className="flex md:gap-5 gap-2 items-start">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>Results-Oriented: We're committed to delivering measurable results.</p> 
        </div>
        <div className="flex md:gap-5 gap-2 items-start">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>Client-Centric: We prioritize your needs and work closely with you to achieve your goals.</p> 
        </div>
        <div className="flex md:gap-5 gap-2 items-start">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>Cutting-Edge Technology: We stay up-to-date with the latest trends and technologies.</p> 
        </div>
      </div>  
      </div>
      <div className="contact">
        <h1 className="text-3xl font-extrabold text-center my-8">Contact us</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <input
          type="text"   
          placeholder='Enter Name'
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <input
          type="recipientEmail"
          id="recipientEmail"
          placeholder='Enter your recipientEmail'
          name="recipientEmail"
          value={formData.recipientEmail}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
        />
        {errors.recipientEmail && <p className="error">{errors.recipientEmail}</p>}
      </div>
      <div className="mb-4">
        <textarea
          id="message"
          name="message"   
          placeholder='Enter your message'
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
        />
        {errors.message && <p className="error">{errors.message}</p>}
      </div>
      
      <button type="submit" disabled={isLoading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>

      {isSuccess && <p className="success">Message sent successfully!</p>}
      {errors.general && <p className="error">{errors.general}</p>}
    </form>
      </div>

    </div>
    </>
  )
}

export default About