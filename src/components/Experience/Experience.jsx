import React from 'react';
import './Experience.css';
import { TitleDivider } from '../TitleDivider/TitleDivider';
import { experience } from '../../data/expirience';

export const Experience = () => {
    return (
        <>
            <TitleDivider img={'icons/right/bag.svg'}>Experience</TitleDivider>

            <ul className="main-right-block">
                {experience.map((item) => (
                    <li className="main__right-wrap">
                        <div class="main__right-descr">
                            <span>
                                {item.proffession}
                                <span class="main__right-org">
                                    - "{item.companyName}" -
                                </span>
                                <span class="main__right-data">
                                    [{item.from} - {item.to}]
                                </span>
                            </span>

                            <div class="main__right-work">
                                {item.description}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};
