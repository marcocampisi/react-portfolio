import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faAddressCard,
    faMap,
    faFile
} from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function ContactComponent() {
    return (
        <>
            <div className='container w-full mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='shadow-md p-6 border-[1px] flex flex-col justify-between h-full'>
                    <h3 className='text-xl font-semibold mb-4'>Recapiti</h3>
                    <div className='flex items-center mb-4'>
                        <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
                        <p>Email: marco.campisi@outlook.it</p>
                    </div>
                    <div className='flex items-center mb-4'>
                        <FontAwesomeIcon
                            icon={faAddressCard}
                            className='mr-2'
                        />
                        <p>Telefono: +39 342 1920049</p>
                    </div>
                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faMap} className='mr-2' />
                        <p>Indirizzo: Via Silvio Pellico 8, Noto (SR)</p>
                    </div>
                </div>
                <div className='shadow-md p-6 border-[1px] flex flex-col justify-between h-full'>
                    <h3 className='text-xl font-semibold mb-4'>Esperienze</h3>
                    <div className='flex items-center mt-4 mb-6'>
                        <FontAwesomeIcon icon={faLinkedin} className='mr-2 h-16 w-16' />
                        <a href="" className="text-xl">Il mio Linkedin</a>
                    </div>
                    <div className='flex items-center mt-6'>
                        <FontAwesomeIcon icon={faFile} className='mr-2 h-16 w-16' />
                        <a href="" className="text-xl">Il mio CV</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactComponent;
