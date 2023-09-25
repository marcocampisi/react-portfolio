/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SkillComponent({ icon, name }) {
    return (
        <>
            <li className='m-5 text-center'>
                <FontAwesomeIcon icon={icon} className='h-12'/>
                <p className='font-thin'>{name}</p>
            </li>
        </>
    );
}

export default SkillComponent;
