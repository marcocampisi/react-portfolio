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
import Contacts from './ContactComponent';
import laravelApi from '../assets/laravel-api.png';
import boolflix from '../assets/vite-boolflix.png';
import portfolio from '../assets/portfolio.png';
import viteYugioh from '../assets/vite-yu-gi-oh.png';
import laravelDcComics from '../assets/laravel-dc-comics.png';
import midterm from '../assets/proj-html-vuejs.png';


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
                title: "Laravel Boolfolio",
                githubLink: "https://github.com/marcocampisi/laravel-api",
                description: "Webapp che permette di gestire un portfolio di progetti tramite una dashboard.",
                thumbnail: laravelApi,
            },
            {
                title: "Boolflix",
                githubLink: "https://github.com/marcocampisi/vite-boolflix",
                description: "Progetto frontend in Vue + Vite che replica il funzionamento della web-app di Netflix.",
                thumbnail: boolflix,
            },
            {
                title: "Portfolio",
                githubLink: "https://github.com/marcocampisi/marcocampisi.github.io",
                description: "Il codice di questo portfolio, scritto in React.",
                thumbnail: portfolio,
            },
            {
                title: "Progetto midterm",
                githubLink: "https://github.com/marcocampisi/proj-html-vuejs",
                description: "Progetto realizzato alla fine della prima metà del corso, frontend interamente in Vue + Vite.",
                thumbnail: midterm,
            },
            {
                title: "Yu-Gi-Oh",
                githubLink: "https://github.com/marcocampisi/vite-yu-gi-oh",
                description: "Progetto frontend in Vue + Vite che visualizza un database di carte Yu-Gi-Oh.",
                thumbnail: viteYugioh,
            },
            {
                title: "DC Comics",
                githubLink: "https://github.com/marcocampisi/laravel-dc-comics",
                description: "Progetto Laravel con frontend in Blade che permette di effettuare operazioni CRUD su un DB di fumetti.",
                thumbnail: laravelDcComics,
            },
        ];

        return (
            <main>
                <div className='mt-10 mx-auto max-w-7xl px-5'>
                    <h1 className='text-5xl font-extrabold'>
                        Ciao! Sono <span className='text-indigo-400'>Marco</span>, un <span className='text-indigo-400'>Full-Stack Web Developer</span>
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
                    <h2 className='text-4xl font-bold mx-auto my-4'>
                        Le tecnologie che uso
                    </h2>
                    <div className='w-full flex justify-center'>
                        <ul className='flex flex-wrap justify-center'>
                            {skillsList}
                        </ul>
                    </div>
                </div>
                
                <div className="flex flex-col w-full my-10 px-5">
                    <h2 className="text-4xl font-bold mx-auto my-4">
                        I miei progetti
                    </h2>
                    <ProjectsContainer projects={projectsList} />
                </div>
                <Contacts />
            </main>
        );
    }
}

export default MainComponent;
