import React from 'react';
import './Projects.css';
import { TitleDivider } from '../TitleDivider/TitleDivider';
import { projects } from '../../data/projects';

export const Projects = () => {
    return (
        <>
            <TitleDivider img={'icons/right/course.svg'}>Projects</TitleDivider>
            {projects.map((item) => (
                <a
                    href={item.href}
                    className="main__right-project"
                    key={item.id}
                >
                    <img
                        className="main__contacts-img-project"
                        src={item.icon}
                        alt={item.id}
                    />
                    <span className="main__right-project-span">
                        {item.text}
                    </span>
                </a>
            ))}
        </>
    );
};
