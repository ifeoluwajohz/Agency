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
    <div className="max-w-6xl mx-auto my-16 p-10">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start md:gap-10 mb-12">
        <img
          src={detail.image}
          alt={title}
          className="w-24 h-24 md:w-36 md:h-36 shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <div className="space-y-4 md:ml-8">
          <h1 className="md:text-3xl text-2xl md:my-0 my-8 font-bold text-blue-400 tracking-wider">{title.toUpperCase()}</h1>
          <p className="md:text-base text-sm text-gray-600">{detail.description}</p>
          <span className="block text-blue-400 text-lg font-bold mt-2 leading-10">Price Range: {detail.price}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        {/* Tech Stack */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Tech Stack</h2>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {detail.stack.map((tech, index) => (
              <li
                key={index}
                className="text-gray-700 text-lg p-3 bg-gray-100 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Tools</h2>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {detail.tools.map((tool, index) => (
              <li
                key={index}
                className="text-gray-700 text-lg p-3 bg-gray-100 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Links Section */}
      <div className="flex flex-wrap gap-6 justify-center mt-12">
        {detail.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium shadow-md transition-transform transform hover:scale-105"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfileDetail;
