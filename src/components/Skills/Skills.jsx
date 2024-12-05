import React from 'react';
import './Skills.css';

import { Title } from '../Title/Title';
import { skills } from '../../data/skills';

export const Skills = () => {
    return (
        <div class="main__skills">
            <Title>Skills</Title>
            <div class="container__left">
                <ol class="main__skills-box">
                    {skills.map((item, index) => (
                        <li type="disc" key={index}>
                            {item}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};
