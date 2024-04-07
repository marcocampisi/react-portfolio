/* eslint-disable react/prop-types */

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

function Projects({ title, githubLink, description }) {
    return (
        <div className='shadow-md p-6 border-[1px] border-black dark:border-white flex flex-col justify-between h-full text-center rounded-md'>
            <div>
                <a href={githubLink} className="group relative">
                    <h2 className='text-2xl font-bold mb-2 hover:underline underline-offset-4'>{title}</h2>
                </a>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ProjectsContainer;
