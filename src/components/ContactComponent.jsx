import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faAddressCard,
    faMap
} from "@fortawesome/free-regular-svg-icons";

function ContactComponent() {
    return (
        <div className='container w-full mx-auto mt-6'>
            <div className='shadow-md p-6 border-[1px] mx-auto'>
                <div className='flex items-center mb-4'>
                    <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
                    <p>Email: marco.campisi@outlook.it</p>
                </div>
                <div className='flex items-center mb-4'>
                    <FontAwesomeIcon icon={faAddressCard} className='mr-2' />
                    <p>Telefono: +39 342 1920049</p>
                </div>
                <div className='flex items-center'>
                    <FontAwesomeIcon icon={faMap} className='mr-2' />
                    <p>Indirizzo: Via Silvio Pellico 8, Noto (SR)</p>
                </div>
            </div>
        </div>
    );
}

export default ContactComponent;
