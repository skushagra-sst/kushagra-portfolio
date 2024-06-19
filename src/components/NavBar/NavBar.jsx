import './NavBar.css'
import { Link } from 'react-scroll';

export default function NavBar() {



    return (
        <div className="navContainer" id='navbar'>
            <div className="left">
                <div className="herologo">{process.env.REACT_APP_DEVELOPER_NAME_SHORT}</div>
            </div>
            <div className="center">
                <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
                    <div className="menuEntry" style={{paddingBottom: "5px"}}>
                        <svg fill='#490b3d' height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                        Home
                    </div>
                </Link>
                <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>
                    <div className="menuEntry">
                        <svg fill='#490b3d' height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>
                        Projects
                    </div>
                </Link>
                {/* <Link to="skills" spy={true} smooth={true} offset={-70} duration={500}>
                    <div className="menuEntry">
                        Contact
                    </div>
                </Link> */}
                <a target="_blank" href="https://youpic.com/skushagra">
                    <div className="menuEntry">
                        <svg fill='#490b3d' height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                        Photography
                    </div>
                </a>
            </div>
            <div className='right'>
                <div className="resumeBtn">
                    Download
                </div>
            </div>
        </div>
    );
}