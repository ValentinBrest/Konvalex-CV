import React from 'react';
import cl from'./Contacts.module.css';
import { LeftItemBlock } from '../LeftItemBlock/LeftItemBlock';
import { contacts } from '../../data/contacts';

export const Contacts = () => {
    return (
        <LeftItemBlock title="Контакты">
            <ul className={cl.list}>
                    {contacts.map((item) => (
                        <li key={item.id}>
                            <img
                                className={cl.icon}
                                src={`${item.icon}`}
                                alt={item.id}
                            />
                            {item.href ? (
                                <a
                                    className={cl.text}
                                    href={`${item.href}`}
                                >
                                    {item.text}
                                </a>
                            ) : (
                                <span className={cl.text}>
                                    {item.text}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
        </LeftItemBlock>
    );
};
