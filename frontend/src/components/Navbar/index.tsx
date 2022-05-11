import { ReactComponent as GithubIcon } from "assets/img/github.svg"
import "./style.css"

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/gustavolucen4">
                        <div className="dsmovie-contact-content">
                            <GithubIcon />
                            <p className="dsmovie-contatc-link">/gustavolucen4</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;