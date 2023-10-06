/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from '@fortawesome/free-solid-svg-icons';
function ProjectsContainer({ projects }) {
    return (
        <div className='container mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project) => (
                <Projects
                    key={project.title}
                    title={project.title}
                    githubLink={project.githubLink}
                    description={project.description}
                    thumbnail={project.thumbnail}
                />
            ))}
        </div>
    );
}

function Projects({ title, githubLink, description, thumbnail }) {
    return (
        <div className='shadow-md p-6 border-[1px] border-black dark:border-white flex flex-col justify-between h-full'>
            <div>
                <h2 className='text-2xl font-bold mb-2'>{title}</h2>
                <a href={githubLink} className="group relative">
                    <img src={thumbnail} alt="" className="my-4 h-[150px] w-full object-cover hover:scale-105 hover:grayscale transition cursor-pointer"/>
                    <FontAwesomeIcon icon={faLink} className='h-8 m-4 opacity-50 group-hover:opacity-100 absolute bottom-0 left-0 transition'/>
                </a>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ProjectsContainer;
