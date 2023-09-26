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
    faPython
} from '@fortawesome/free-brands-svg-icons';
import SkillComponent from './SkillComponent';
import ProjectsContainer from './ProjectsContainer';
import AboutMe from './AboutMeComponent';
import Contacts from './ContactComponent';

class MainComponent extends React.Component {

    skills = () => {
        return [
            { icon: faLaravel, name: "Laravel" },
            { icon: faVuejs, name: "Vue.js" },
            { icon: faJsSquare, name: "JavaScript" },
            { icon: faPhp, name: "PHP" },
            { icon: faReact, name: "React" },
            { icon: faHtml5, name: "HTML" },
            { icon: faCss3, name: "CSS" },
            { icon: faGit, name: "Git" },
            { icon: faPython, name: "Python" },
        ];
    }
    
    render() {
        const skillsList = this.skills().map((skill) => (
            <SkillComponent key={skill.name} icon={skill.icon} name={skill.name} />
        ));

        const projectsList = [
            {
                title: "Laravel Many to Many",
                githubLink: "https://github.com/marcocampisi/laravel-many-to-many",
                description:
                    "Progetto realizzato durante il corso Boolean sulle relazioni tra modelli in Laravel.",
            },
            {
                title: "Boolflix",
                githubLink: "https://github.com/marcocampisi/vite-boolflix",
                description: "Progetto frontend in Vue + Vite che replica il funzionamento della web-app di Netflix.",
            },
            {
                title: "Yu-Gi-Oh",
                githubLink: "https://github.com/marcocampisi/vite-yu-gi-oh",
                description: "Semplice web-app che permette di visualizzare un database di carte Yu-Gi-Oh realizzata in Vue + Vite.",
            },
        ];

        return (
            <main>
                <div className='mt-10 mx-auto max-w-7xl px-5'>
                    <h1 className='text-5xl font-extrabold'>
                        Ciao, sono <span className='text-red-400'>Marco</span>, un <span className='text-green-400'>Full-stack Web Developer</span>
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
                
                <div className="flex flex-col w-full mt-10 px-5">
                    <h2 className="text-4xl font-bold mx-auto my-4">
                        I miei progetti
                    </h2>
                    <ProjectsContainer projects={projectsList} />
                </div>
                <div className="fmt-10 mx-auto w-full px-5 mt-20 text-center">
                    <h2 className="text-4xl font-bold mx-auto my-4">
                        Contattami
                    </h2>
                    <Contacts />
                </div>
            </main>
        );
    }
}

export default MainComponent;
