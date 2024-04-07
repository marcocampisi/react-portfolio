import myPhoto from "../assets/me.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Img } from "react-image";

function AboutMe() {
    return (
        <>
            <h2 className='text-3xl font-semibold mb-4'>Chi sono</h2>
            <div className='flex flex-col md:flex-row items-center '>
                <Img
                    src={myPhoto}
                    alt=''
                    className='rounded-md h-52 mx-auto my-10'
                />
                <p className='text-lg px-6 text-justify'>
                    Appassionato di informatica e tecnologia in generale, mi piace scoprire nuovi modi di realizzare
                    le mie idee. Il mio settore principale è lo sviluppo web. Al di là del digitale, trovo ispirazione
                    nella musica e nel cinema. Se hai bisogno di contattarmi, trovi il mio LinkedIn qui sotto.
                </p>
            </div>
            <div className='w-full flex justify-center mb-10'>
                <a
                    href='https://www.linkedin.com/in/marcocampisi02/'
                    className='px-5 py-2.5 relative rounded group overflow-hidden font-medium dark:bg-white text-white dark:text-black bg-black mx-2 block mt-10'
                >
                    <span className='absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white dark:bg-black group-hover:h-full opacity-90'></span>
                    <span className='relative dark:group-hover:text-white group-hover:text-black'>
                        <FontAwesomeIcon icon={faLinkedin} /> Il mio Linkedin
                    </span>
                </a>
            </div>
        </>
    );
}

export default AboutMe;
