import React from 'react';
import './Contacts.css';
import { Title } from '../Title/Title';

export const Contacts = () => {
  return (
    <div classNameName="main__contacts">
        <Title>Контакты</Title>
        <div className="container__left">
            <ul className="main__contacts-block">
                <li>
                    <img className="main__contacts-img" src="icons/phone.svg" alt="phone"/>
                    <span className="main__contact-text" >+375 25 969-72-49 [Life]</span>
                </li>
                <li>
                    <img className="main__contacts-img" src="icons/post.svg" alt="post"/>
                    <span className="main__contact-text" >irziukaj@gmail.com</span>
                </li>
                <li>
                    <img className="main__contacts-img" src="icons/telegram.svg" alt="telegram"/>
                    <span className="main__contact-text">@Jurgent_t</span>
                </li>
                <li>
                    <img className="main__contacts-img" src="icons/insta.svg" alt="githab"/>
                    <a className="main__contact-text" href="https://www.instagram.com/yurgent_t/?igshid=ZGUzMzM3NWJiOQ==">Instagram</a>
                </li>
            </ul>
        </div>
    </div>
    
  )
}
