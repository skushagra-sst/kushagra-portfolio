import "./Footer.css"
import { useRef } from "react";

export default function Footer() {

    const userIP = useRef(null);
    setTimeout(() => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                userIP.current.innerHTML = `IP : ${data.ip}`;
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }
        , 100);
    return (
        <div className="footerContainer">
            <div className="userIP">
                <div ref={userIP} className="footerText"></div>
            </div>
            <div className="footerText">made with ❤️ by Kushagra</div>
        </div>
    );
}