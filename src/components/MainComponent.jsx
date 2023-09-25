import React from "react";
import {
    faLaravel,
    faVuejs,
    faJsSquare,
    faPhp,
    faReact,
    faHtml5,
    faCss3,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import SkillComponent from "./SkillComponent";

class MainComponent extends React.Component {
    render() {
        return (
            <main>
                <div className='mt-10 mx-auto max-w-7xl'>
                    <h1 className='text-5xl font-mono font-extrabold'>
                        Ciao, sono Marco. Sono un Full-stack Web Developer.
                    </h1>
                    <p className='font-medium mt-5'>
                        Esplora il mio portfolio per scoprire più informazioni
                        su di me: cosa realizzo, le tecnologie che uso e la
                        passione che metto nel mio lavoro. Sono italiano.
                    </p>
                </div>
                <div className='flex w-full border-t-[1px] mt-10'>
                    <h1 className='text-4xl font-mono font-thin mx-auto my-4'>
                        Le tecnologie che uso.
                    </h1>
                </div>
                <div className='w-full flex justify-center flex-wrap'>
                    <ul className='flex'>
                        <SkillComponent icon={faLaravel} name='Laravel' />
                        <SkillComponent icon={faVuejs} name='Vue.js' />
                        <SkillComponent icon={faJsSquare} name='JavaScript' />
                        <SkillComponent icon={faPhp} name='PHP' />
                        <SkillComponent icon={faReact} name='React' />
                        <SkillComponent icon={faHtml5} name='HTML' />
                        <SkillComponent icon={faCss3} name='CSS' />
                        <SkillComponent icon={faGithub} name='GitHub' />
                    </ul>
                </div>
            </main>
        );
    }
}

export default MainComponent;
