import React from 'react';
import {
    faLaravel,
    faVuejs,
    faJsSquare,
    faPhp,
    faReact,
    faHtml5,
    faCss3,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import SkillComponent from './SkillComponent';
import Projects from './Projects';

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
            { icon: faGithub, name: "GitHub" },
        ];
    }
    
    render() {
        const skillsList = this.skills().map((skill) => (
            <SkillComponent key={skill.name} icon={skill.icon} name={skill.name} />
        ));

        return (
            <main>
                <div className='mt-10 mx-auto max-w-7xl'>
                    <h1 className='text-5xl font-extrabold'>
                        Ciao, sono <span className='text-red-400'>Marco.</span> Sono un <span className='text-green-400'>Full-stack Web Developer.</span>
                    </h1>
                    <p className='font-medium mt-5'>
                        Esplora il mio portfolio per scoprire più informazioni
                        su di me: cosa realizzo, le tecnologie che uso e la
                        passione che metto nel mio lavoro.
                    </p>
                </div>
                <div className='flex w-full border-t-[1px] mt-10'>
                    <h2 className='text-4xl font-bold mx-auto my-4'>
                        Le tecnologie che uso.
                    </h2>
                </div>
                <div className='w-full flex justify-center flex-wrap'>
                    <ul className='flex'>
                        {skillsList}
                    </ul>
                </div>
                <div className="flex flex-col w-full border-t-[1px] mt-10">
                    <h2 className="text-4xl font-bold mx-auto my-4">
                        I miei progetti.
                    </h2>
                    <Projects username='marcocampisi' />
                </div>
            </main>
        );
    }
}

export default MainComponent;
