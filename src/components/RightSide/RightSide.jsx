import React from 'react';
import './RightSide.css';
import { Experience } from '../Experience/Experience';
import { Qualifications } from '../Qualifications/Qualifications';
import { TechnicalSkills } from '../TechnicalSkills/TechnicalSkills';
import { Projects } from '../Projects/Projects';
import { About } from '../About/About';

export const RightSide = () => {
    return (
        <div className="main__right">
            <div className="container__right">
                <h1 className="main__right-title">
                    Konopatsky <br /> Valentin Alexandrovich{' '}
                </h1>
                <h2 className="main__right-sub-title">
                    {' '}
                    Front-end web developer
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
                        <span>29 years old</span>
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
