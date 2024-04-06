/* eslint-disable react/prop-types */
import {Img} from 'react-image';

function ProjectsContainer({ projects }) {
    return (
        <div className='container sm:w-2/3 mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
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

function Projects({ title, githubLink, description, thumbnail }) {
    return (
        <div className='shadow-md p-6 border-[1px] border-black dark:border-white flex flex-col justify-between h-full text-center'>
            <div>
                <h2 className='text-2xl font-bold mb-2'>{title}</h2>
                <a href={githubLink} className="group relative">
                    <Img src={thumbnail} alt="" className="my-4 h-60 w-full object-cover hover:scale-105 hover:grayscale transition cursor-pointer"/>
                </a>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ProjectsContainer;
