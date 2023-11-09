/* eslint-disable react/prop-types */
import Image from 'react-image';

function ProjectsContainer({ projects }) {
    return (
        <div className='container mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project) => (
                <Projects
                    key={project.title}
                    title={project.title}
                    githubLink={project.githubLink}
                    description={project.description}
                    thumbnail={<Image src={project.thumbnail} alt="" />}
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
                    <Image src={thumbnail} alt="" className="my-4 h-60 w-full object-cover hover:scale-105 hover:grayscale transition cursor-pointer"/>
                </a>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ProjectsContainer;
