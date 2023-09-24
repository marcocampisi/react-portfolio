import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaravel, faVuejs, faJsSquare, faPhp, faReact, faHtml5, faCss3, faGithub } from "@fortawesome/free-brands-svg-icons";

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
                <div className="w-full flex justify-center">
                    <ul className='flex'>
                        <li className="m-5 text-center">
                            <FontAwesomeIcon icon={faLaravel} className="h-12" />
                            <p className="font-thin">Laravel</p>
                        </li>
                        <li className="m-5 text-center">
                            <FontAwesomeIcon icon={faVuejs} className="h-12" />
                            <p className="font-thin">Vue.js</p>
                        </li>
                        <li className="m-5 text-center">
                            <FontAwesomeIcon icon={faPhp} className="h-12" />
                            <p className="font-thin">Php</p>
                        </li>
                        <li className="m-5 text-center">
                            <FontAwesomeIcon icon={faJsSquare} className="h-12" />
                            <p className="font-thin">JavaScript</p>
                        </li>
                        <li className="m-5 text-center">
                            <FontAwesomeIcon icon={faReact} className="h-12" />
                            <p className="font-thin">React</p>
                        </li>
                        <li className="m-5 text-center">
                            <FontAwesomeIcon icon={faHtml5} className="h-12" />
                            <p className="font-thin">HTML</p>
                        </li>
                        <li className="m-5 text-center">
                            <FontAwesomeIcon icon={faCss3} className="h-12" />
                            <p className="font-thin">CSS</p>
                        </li>
                        <li className="m-5 text-center">
                            <FontAwesomeIcon icon={faGithub} className="h-12" />
                            <p className="font-thin">GitHub</p>
                        </li>
                    </ul>
                </div>
            </main>
        );
    }
}

export default MainComponent;
