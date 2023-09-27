import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import myPhoto from '../assets/me.jpg';

function HeaderComponent() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`sticky top-0 w-full bg-transparent ${isScrolled ? "bg-opacity-80 backdrop-blur" : ""}`}>
            <header className="flex items-center justify-between p-4 relative">
                <div className='flex items-center'>
                    <img src={myPhoto} alt='Logo' className='h-8 w-8 mr-2 rounded-full' />
                    <h1 className='text-lg font-semibold'>Marco Campisi</h1>
                </div>
                <div className='flex items-center'>
                    <a
                        href='https://github.com/marcocampisi'
                        className='flex items-center'
                    >
                        <span className='mr-4'>Il mio GitHub</span>
                        <FontAwesomeIcon icon={faGithub} className='h-10' />
                    </a>
                </div>
            </header>
        </div>
    );
}

export default HeaderComponent;
