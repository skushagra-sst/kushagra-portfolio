import { useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';

function emailer(name, email, subject, message) {
    emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
    return emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
            to_email: "kushagra.rigel@gmail.com",
            subject: `New message from portfolio website`,
            message: `
            New message from ${name}.
            Reply to ${email}

            ${message}
            `
        }
    ).then((response) => {
        return "success";
    }).catch((error) => {
        return "fail";
    });
}

export default function Contact() {

    return (
        <div className="contact" id='contact'>
            <div className="left">
                <div className="contactHeader">
                    Lets Connect
                </div>

                <div className="emailer">
                    <div className="userInfo">
                        <input type="text" className="contactInput nameInput" placeholder='Name' />
                        <input type="text" className="contactInput emailInput" placeholder='Email' />
                    </div>
                    <textarea className='contactInput messageInput' name="" id="" placeholder='Write your message here . . .'></textarea>
            </div>
            </div>

            {/* <div className="counter" id="counter"> {count}</div>
            <button className="action" onClick={clicker}>Click Me</button> */}

        </div>
    );
}