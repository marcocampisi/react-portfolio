/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function ProjectsContainer({ projects }) {
    return (
        <div className='container mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project) => (
                <Projects
                    key={project.title}
                    title={project.title}
                    githubLink={project.githubLink}
                    description={project.description}
                />
            ))}
        </div>
    );
}

function Projects({ title, githubLink, description }) {
    return (
        <div className='shadow-md p-6 border-[1px] flex flex-col justify-between h-full'>
            <div>
                <h2 className='text-2xl font-bold mb-2'>{title}</h2>
                <p>{description}</p>
            </div>
            <div className='mt-auto'>
                <a href={githubLink} className='mt-5 inline-block px-3 py-1 hover:scale-105 transition duration-300'>
                <FontAwesomeIcon icon={faGithub} className='h-8'/>
                </a>
            </div>
        </div>
    );
}

export default ProjectsContainer;
