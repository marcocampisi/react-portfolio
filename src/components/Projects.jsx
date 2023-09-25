/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";

function Projects() {
    const [projects, setProjects] = useState([]);
    const username = "marcocampisi";
    const query = {
        sort: "updated"
    };

    useEffect(() => {
        axios
            .get(`https://api.github.com/users/${username}/repos`, {
                params: query,
            })
            .then((response) => {
                setProjects(response.data);
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
