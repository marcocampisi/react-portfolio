0; /* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";

function Projects() {
    const [projects, setProjects] = useState([]);
    const username = "marcocampisi";
    const query = "db-first";

    useEffect(() => {
        axios
            .get(`https://api.github.com/users/${username}/repos`)
            .then((response) => {
                const projectsNames = response.data.map(
                    (project) => project.name
                );
                const filteredProjects = projectsNames.filter((project) =>
                    project.includes(query)
                );
                const projectsDetails = filteredProjects.map((projectName) => {
                    const project = response.data.find(
                        (project) => project.name === projectName
                    );
                    return {
                        name: project.name,
                        description: project.description,
                        html_url: project.html_url,
                    };
                });
                setProjects(projectsDetails);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <div className=' max-w-7xl mx-auto grid grid-cols-3 gap-4'>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className='rounded-xl shadow-lg dark:bg-neutral-800 p-5'
                    >
                        <div className='ml-4'>
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <a href={project.html_url}>Vai al progetto</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
