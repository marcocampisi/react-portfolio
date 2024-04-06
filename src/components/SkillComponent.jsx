/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SkillComponent({ icon, name }) {
    return (
        <>
            <div className='flex flex-col items-center'>
                <FontAwesomeIcon icon={icon} className='h-12 mb-2'/>
                <p className='font-mono'>{name}</p>
            </div>
        </>
    );
}

export default SkillComponent;
