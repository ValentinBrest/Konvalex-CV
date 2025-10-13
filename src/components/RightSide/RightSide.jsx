import React from 'react';
import './RightSide.css';
import { Experience } from '../Experience/Experience';
import { Qualifications } from '../Qualifications/Qualifications';
import { TechnicalSkills } from '../TechnicalSkills/TechnicalSkills';
import { Projects } from '../Projects/Projects';
import { About } from '../About/About';

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    // Если день рождения еще не наступил в этом году, вычитаем 1 год
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

export const RightSide = () => {
    return (
        <div className="main__right">
            <div className="container__right">
                <h1 className="main__right-title">
                    Konopatsky <br /> Valentin Alexandrovich{' '}
                </h1>
                <h2 className="main__right-sub-title">
                    {' '}
                    Frontend Developer
                </h2>
                <div className="main__right-location">
                    <div className="main__right-info">
                        <img src="icons/right/map.svg" alt="city" />
                        <span>Brest</span>
                    </div>
                    <div className="main__right-info">
                        <img
                            className=""
                            src="icons/right/info.svg"
                            alt="old"
                        />
                        <span>{calculateAge('1995-10-03')} years old</span>
                    </div>
                </div>
                <Experience />
                <Qualifications />
                <TechnicalSkills />
                <About />
                <Projects />
            </div>
        </div>
    );
};
