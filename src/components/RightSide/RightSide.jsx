import React from 'react';
import './RightSide.css';
import { Experience } from '../Experience/Experience';
import { Education } from '../Education/Education';
import { Course } from '../Course/Course';
import { Projects } from '../Projects/Projects';
import { About } from '../About/About';

export const RightSide = () => {
  return (
    <div className="main__right">
            <div className="container__right">
                <h1 className="main__right-title">Конопацкий <br/> Юрий Александрович </h1>
                <h2 className="main__right-sub-title"> 3D-дизайнер, Дизайнер, Дизайнер-художник</h2>
                <div className="main__right-location">
                    <div className="main__right-info">
                        <img src="icons/right/map.svg" alt="city"/>
                        <span>Брест</span>
                    </div>
                    <div className="main__right-info">
                        <img className="" src="icons/right/info.svg" alt="old"/>
                        <span>24 года</span>
                    </div>
                </div>
                <Experience/>
                <Education/>
                {/* <Course/> */}
                <About/>
                <Projects/>
            </div>
    </div>
  )
}
