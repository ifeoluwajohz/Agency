import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const singleService = () => {
  const { title } = useParams();
  const location = useLocation();
  const { detail } = location.state || {};

  if (!detail) {
    return <p>Profile details not found.</p>;
  }

  return (
    <div className="p-8 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <img src={detail.image} alt={title} className="mx-auto w-32 h-32 object-cover mb-4" />
      <p className="text-xl font-semibold text-gray-700 mb-2">Price Range: {detail.price}</p>

      <div className="my-4">
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-600">
          {detail.stack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="my-4">
        <h2 className="text-2xl font-semibold mb-2">Tools</h2>
        <ul className="list-disc list-inside text-gray-600">
          {detail.tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>

      <div className="my-4">
        <h2 className="text-2xl font-semibold mb-2">Links</h2>
        <ul className="list-none text-blue-500">
          {detail.links.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default singleService;
