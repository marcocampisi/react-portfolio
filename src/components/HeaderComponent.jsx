import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function HeaderComponent() {
    return (
        <header className="p-4 flex items-center justify-between">
            <div className="flex items-center">
                <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" />
                <h1 className="text-lg font-semibold">Marco Campisi</h1>
            </div>

            <div className="flex items-center">
                <a href="https://github.com/marcocampisi" className="flex items-center">
                    <span className="mr-4">Il mio GitHub</span>
                    <FontAwesomeIcon icon={faGithub} className="h-10"/>
                </a>
            </div>
        </header>
    );
}

export default HeaderComponent;
