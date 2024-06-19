import './Hero.css';
import { Link } from 'react-scroll';
import ScrollerBlob from '../../ui/ScrollerBlob/ScrollerBlob'
import ReactTypingEffect from 'react-typing-effect';

export default function Hero() {
    return (
        <div className='hero'>
            {/* <div class="blob top-left"></div>
            <div class="blob bottom-right"></div> */}
            <div className="hero-head">
                <div className="title">
                    <ReactTypingEffect 
                    text={[process.env.REACT_APP_DEVELOPER_NAME, process.env.REACT_APP_DEVELOPER_NAME_SHORT]}
                    typingDelay={1000}
                    speed={200}
                    eraseSpeed={100}

                    />
                </div>
                <div className="subtitle">{process.env.REACT_APP_SUBTITLE}</div>
            </div>
            <div className="scroller">
                <Link to="navbar" spy={true} smooth={true} offset={0} duration={500}>
                    {ScrollerBlob()}
                </Link>
            </div>
        </div>
    );
}