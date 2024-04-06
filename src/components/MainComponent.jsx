import React from 'react';
import {
    faLaravel,
    faVuejs,
    faJsSquare,
    faPhp,
    faReact,
    faHtml5,
    faCss3,
    faGit,
    faPython,
    faBootstrap
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { tailwindCssIcon } from "../assets/tailwindCssIcon";
import SkillComponent from './SkillComponent';
import ProjectsContainer from './ProjectsContainer';
import AboutMe from './AboutMeComponent';


class MainComponent extends React.Component {

    skills = () => {
        return [
            { icon: faVuejs, name: "Vue.js" },
            { icon: faReact, name: "React" },
            { icon: faJsSquare, name: "JavaScript" },
            { icon: faLaravel, name: "Laravel" },
            { icon: faPhp, name: "PHP" },
            { icon: faHtml5, name: "HTML" },
            { icon: faCss3, name: "CSS" },
            { icon: tailwindCssIcon, name:"Tailwind"},
            { icon: faBootstrap, name: "Bootstrap" },
            { icon: faGit, name: "Git" },
            { icon: faPython, name: "Python" },
            { icon: faDatabase, name: "MySQL" },
        ];
    }
    
    render() {
        const skillsList = this.skills().map((skill) => (
            <SkillComponent key={skill.name} icon={skill.icon} name={skill.name} />
        ));

        const projectsList = [
            {
                title: "BMusicTeachers - Backend",
                githubLink: "https://github.com/marcocampisi/Team-1-BMusicTeachers-backend",
                description: "Backend del progetto finale Boolean, in cui ho usato Laravel, Blade e MySQL.",
            },
            {
                title: "BMusicTeachers - Frontend",
                githubLink: "https://github.com/marcocampisi/Team-1-BMusicTeachers-frontend",
                description: "Frontend del progetto finale Boolean, realizzato in Vue.",
            },
            {
                title: "Boolflix",
                githubLink: "https://github.com/marcocampisi/vite-boolflix",
                description: "Progetto frontend in Vue che replica il funzionamento della web-app di Netflix.",
            },
            {
                title: "Laravel Boolfolio",
                githubLink: "https://github.com/marcocampisi/laravel-api",
                description: "Webapp che permette di gestire un portfolio di progetti tramite una dashboard.",
            },
            {
                title: "Progetto midterm",
                githubLink: "https://github.com/marcocampisi/proj-html-vuejs",
                description: "Progetto realizzato alla fine della prima metà del corso, frontend interamente in Vue.",
            },
            {
                title: "Yu-Gi-Oh",
                githubLink: "https://github.com/marcocampisi/vite-yu-gi-oh",
                description: "Progetto frontend in Vue che visualizza un database di carte Yu-Gi-Oh.",
            },
            {
                title: "DC Comics",
                githubLink: "https://github.com/marcocampisi/laravel-dc-comics",
                description: "Progetto Laravel con frontend in Blade che permette di effettuare operazioni CRUD su un DB di fumetti.",
            },
            {
                title: "Campo Minato",
                githubLink: "https://github.com/marcocampisi/js-campominato-dom",
                description: "Un classico gioco Campo Minato realizzato con JavaScript.",
            },
        ];

        return (
            <main>
                <div className='mt-10 mx-auto max-w-7xl px-5'>
                    <h1 className='text-5xl font-semibold'>
                        Ciao! Sono <span className='font-bold'>Marco</span>, un <span className='font-bold'>Full-Stack Web Developer</span>
                    </h1>
                    <p className='font-medium mt-5'>
                        Esplora il mio portfolio per scoprire più informazioni
                        su di me: cosa realizzo, le tecnologie che uso e la
                        passione che metto nel mio lavoro.
                    </p>
                </div>
                <div className="mt-10 mx-auto max-w-7xl px-5">
                    <AboutMe />
                </div>
                <div className='flex flex-col w-full mt-10 px-5'>
                    <h2 className='text-4xl font-semibold mx-auto my-4'>
                        Le tecnologie che uso
                    </h2>
                    <div className='w-full flex justify-center mt-8'>
                        <div className='grid grid-cols-3 md:grid-cols-6 gap-8'>
                            {skillsList}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full my-10 px-5">
                    <h2 className="text-4xl font-semibold mx-auto my-4">
                    I miei progetti
                    </h2>
                    <ProjectsContainer projects={projectsList} />
                </div>
            </main>
        );
    }
}

export default MainComponent;
