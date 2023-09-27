import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEnvelope} from "@fortawesome/free-regular-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

function ContactComponent() {
    return (
        <div className='container mx-auto mt-6 flex flex-col text-center'>
            <h2 className='text-4xl font-semibold mb-4'>Contatti</h2>
            <div className='flex items-center mb-4 mx-auto'>
                <FontAwesomeIcon 
                    icon={faEnvelope} 
                    className='text-2xl mb-1 mr-4'
                />
                <p>Email: marco.campisi@outlook.it</p>
            </div>
            <div className='flex items-center mb-4 mx-auto'>
                <FontAwesomeIcon
                    icon={faPhone}
                    className='text-2xl mb-1 mr-4'
                />
                <p>Telefono: +39 342 1920049</p>
            </div>
            <div className='flex items-center mx-auto'>
                <FontAwesomeIcon 
                    icon={faLocationDot} 
                    className='text-2xl mb-1 mr-4' 
                />
                <p>Indirizzo: Via Silvio Pellico 8, Noto (SR)</p>
            </div>
        </div>
    );
}

export default ContactComponent;
