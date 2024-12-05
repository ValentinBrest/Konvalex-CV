import React from 'react';
import './Contacts.css';
import { Title } from '../Title/Title';
import { contacts } from '../../data/contacts';

export const Contacts = () => {
    return (
        <div classNameName="main__contacts">
            <Title>Contacts</Title>
            <div className="container__left">
                <ul className="main__contacts-block">
                    {contacts.map((item) => (
                        <li key={item.id}>
                            <img
                                className="main__contacts-img"
                                src={`${item.icon}`}
                                alt={item.id}
                            />
                            {item.href ? (
                                <a
                                    className="main__contact-text"
                                    href={`${item.href}`}
                                >
                                    {item.text}
                                </a>
                            ) : (
                                <span className="main__contact-text">
                                    {item.text}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
