import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const ProfileDetail = () => {
  const { title } = useParams();
  const location = useLocation();
  const { detail } = location.state || {};

  if (!detail) {
    return <p className="text-center text-lg mt-10 text-gray-700">Profile details not found.</p>;
  }

  return (
    <div className="p-6 min-h-screen md:mx-20 py-12">
      <h1 className="text-4xl font-bold">{detail.title}</h1>
      <img src={detail.image} alt={detail.title} className="w-full h-96 object-cover mt-4 my-8" />
      <p className="mt-4 md:text-lg text-sm leading-7">{detail.description}</p>

      <h2 className="mt-6 text-2xl font-semibold ">Major Tools</h2>
      <ul className="list-disc pl-6 my-5">
          {detail.tools.map((achievement, index) => (
              <li key={index}>{achievement}</li>
          ))}
      </ul>

      <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
      <ul className="list-none flex flex-wrap gap-2">
          {detail.stack.map((tech, index) => (
              <li key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium">
                  {tech}
              </li>
          ))}
      </ul>
  </div>
  );
};

export default ProfileDetail;
