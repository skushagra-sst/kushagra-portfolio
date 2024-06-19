import './Home.css';
import Marquee from "react-fast-marquee";
import SST from "../../assets/sst.svg"
import Zolo from "../../assets/zolo.svg"
import Bhashini from "../../assets/bhashini.svg"
import CocaCola from "../../assets/cocacola.svg"
import { Link } from 'react-scroll';
import ReactTypingEffect from 'react-typing-effect';

export default function Home() {
    return (
        <div className='home' id='home'>
            <div className="Homeleft">
                <div className="homeTitle titleMinimal">
                    Minimalistic
                </div>
                <div className="homeTitle titleFast">
                    Fast
                </div>
                <div className="homeTitle titleScalable">
                    Scalable
                </div>
            </div>
            <div className="right">
                <div className="info">
                    Hi, my name is Kushagra. I am a student of
                    Computer Science at Scaler School of Technology. I like creating user friendly and simple designs.
                    <br></br><br></br>
                    My areas of interest in Computer Vision, IoT and Quantum Cryptography. I like working on the intersection of Physics, Mathematics and Computer Science.

                    <Marquee className='marq'>
                        <img className='marqItem' src={SST} alt="" />
                        <img className='marqItem' src={Zolo} alt="" />
                        <img className='marqItem' src={Bhashini} alt="" />
                        <img className='marqItem' src={CocaCola} alt="" />
                    </Marquee>
                    <div className="actionBtns">
                        <Link to="contact" spy={true} smooth={true} offset={0} duration={500} className='actionBtnLink'>
                            <div className="actionBtn thingBtn">
                                Get in Touch
                            </div>
                        </Link>
                        <div className="actionBtn thingText">
                            Start a Project
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}