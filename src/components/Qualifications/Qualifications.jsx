import React from 'react';
import './Qualifications.css';
import { TitleDivider } from '../TitleDivider/TitleDivider';
import { qualifications } from '../../data/qualifications';

export const Qualifications = () => {
    return (
        <>
            <TitleDivider img={'icons/right/university.svg'}>
                Summary of Qualifications
            </TitleDivider>

            <div className="main-right-block">
                <div className="main__right-wrap">
                    <div className="main__right-descr">
                        {qualifications.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
