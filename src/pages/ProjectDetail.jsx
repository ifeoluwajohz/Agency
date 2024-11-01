import React from 'react';
import { useLocation } from 'react-router-dom';

const ProjectDetail = () => {
    const location = useLocation();
    const { project } = location.state || {};

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <div className="p-6 min-h-screen md:mx-20 py-12">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <img src={project.image} alt={project.title} className="w-full h-96 object-cover mt-4 my-8" />
            <p className="mt-4 text-lg">{project.description}</p>

            <h2 className="mt-6 text-2xl font-semibold">Achievements</h2>
            <ul className="list-disc pl-6 my-5">
                {project.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                ))}
            </ul>

            <h3 className="text-2xl font-semibold mb-2">Tech Stack</h3>
            <ul className="list-none flex flex-wrap gap-2">
                {project.stacks.map((tech, index) => (
                    <li key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium">
                        {tech}
                    </li>
                ))}
            </ul>

            <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 text-blue-500 underline"
            >
                Visit Project
            </a>
        </div>
    );
};

export default ProjectDetail;
