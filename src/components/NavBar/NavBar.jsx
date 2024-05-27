import './NavBar.css'
import { Link } from 'react-scroll';

export default function NavBar() {

   

    return (
        <div className="navContainer" id='navbar'>
            <div className="left">
                <div className="herologo">{process.env.REACT_APP_DEVELOPER_NAME_SHORT}</div>
            </div>
            <div className="center">
                <Link to="home" spy={true} smooth={true} offset={10} duration={500}>
                    <div className="menuEntry">
                        Home
                    </div>
                </Link>
                <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>
                    <div className="menuEntry">
                        Projects
                    </div>
                </Link>
                <Link to="skills" spy={true} smooth={true} offset={0} duration={500}>
                    <div className="menuEntry">
                        Skills
                    </div>
                </Link>
                <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
                    <div className="menuEntry">
                        Blogs
                    </div>
                </Link>
            </div>
            <div className='right'>
                <div className="resumeBtn">
                    Download Resume
                </div>
            </div>
        </div>
    );
}