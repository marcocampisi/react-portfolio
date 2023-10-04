import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEnvelope} from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

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
        </div>
    );
}

export default ContactComponent;
