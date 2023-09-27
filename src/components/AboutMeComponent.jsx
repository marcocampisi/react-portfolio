import myPhoto from "../assets/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
    return (
        <>
            <h2 className='text-3xl font-bold mb-4'>Chi sono</h2>
            <div className='flex flex-col md:flex-row items-center '>
                <img
                    src={myPhoto}
                    alt=''
                    className='rounded-full h-72 mr-10 my-10'
                />
                <div>
                    <p className='text-lg'>
                        Mi chiamo Marco Campisi, ho 21 anni e sono uno
                        sviluppatore web. Amo scoprire nuove tecnologie e creare
                        soluzioni innovative e immediate. La mia passione è
                        trasformare idee in realtà digitali e offrire esperienze
                        coinvolgenti online.
                    </p>
                    <div className='w-full flex'>
                        <a
                            href='#_'
                            className='px-5 py-2.5 relative rounded group overflow-hidden font-medium dark:bg-purple-50 bg-black text-indigo-400 block mx-auto my-5 -translate-x-3'
                        >
                            <span className='absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-indigo-400 group-hover:h-full opacity-90'></span>
                            <span className='relative dark:group-hover:text-white group-hover:text-black'>
                                <FontAwesomeIcon icon={faDownload} /> Scarica CV
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;
