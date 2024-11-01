// src/components/Projects.jsx
import React from 'react';
import projects from '../data/projectData';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="bg-gray-50 p-6 text-center mx-0 md:mx-6">
            <h2 className="text-3xl font-bold text-center mb-8">OUR PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-0 md:mx-20">
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        to={`/project/${project.title}`}
                        state={{ project }}
                        className="relative bg-cover bg-center overflow-hidden h-80 flex flex-col items-center text-black p-4 border border-gray-300 rounded-lg shadow-md"
                    >
                        <div className="bg-opacity-50 w-full h-full flex flex-col justify-center items-center p-2 text-center">
                            <img src={project.displayImg} alt={project.title} className="w-full h-32 rounded-md object-cover my-6" />
                            <h3 className="text-2xl font-semibold mb-2">{project.title.toUpperCase()}</h3>
                            <p className="text-sm mb-4">{project.info}</p>
                            <span className="text-indigo-300 hover:underline text-sm">View Project</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Projects;
