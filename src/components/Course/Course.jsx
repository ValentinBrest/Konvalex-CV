import React from 'react';
import './Course.css';
import { TitleDivider } from '../TitleDivider/TitleDivider';


export const Course = () => {
  return (
    <>
        <TitleDivider>Course</TitleDivider>

        <ul className="main-right-block">
                    <li className="main__right-wrap">
                        <div className="main__right-descr">
                            <span>
                                Web Developer
                                <span className="main__right-org">- "Udemy" -</span>
                                <span className="main__right-data">[2021]</span>
                                
                            </span> 
                            
                        </div>
                    </li>

                    <li className="main__right-wrap">
                        
                        <div className="main__right-descr">
                            <span>
                                JS/FE PRE-SCHOOL 2022
                                <span className="main__right-org">- "RS School" -</span>
                                <a href="https://app.rs.school/certificate/ayvi0hq2" className="main__right-data">certificate</a>
                            </span> 
                            
                        </div>
                    </li>

                    <li className="main__right-wrap">
                        
                        <div className="main__right-descr">
                            <span>
                                JAVASCRIPT/FRONT-END 2022Q1
                                <span className="main__right-org">- "RS School" -</span>
                                <a href="https://app.rs.school/certificate/w1noevtq" className="main__right-data">certificate</a>
                            </span> 
                            
                        </div>
                    </li>
                </ul>
    </>
    
  )
}
