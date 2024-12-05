import React from 'react';
import './TechnicalSkills.css';
import { TitleDivider } from '../TitleDivider/TitleDivider';
import { technicalSkills } from '../../data/skills';

export const TechnicalSkills = () => {
    return (
        <>
            <TitleDivider img={'icons/right/university.svg'}>
                Technical Skills
            </TitleDivider>

            <div className="main-right-block">
                <div className="main__right-wrap">
                    <div className="main__right-descr">
                        {technicalSkills.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
