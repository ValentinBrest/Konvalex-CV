import React from 'react';
import './Projects.css';
import { TitleDivider } from '../TitleDivider/TitleDivider';


export const Projects = () => {
  return (
    <>
        <TitleDivider img={"icons/right/course.svg"}>Портфолио</TitleDivider>

          <a href="https://www.behance.net/edda6bfb" className="main__right-project" >
            <img className="main__contacts-img-project" src="icons/behance.svg" alt="behance"/>
             <span className="main__right-project-span">Портфолио  </span>
          </a>
    </>
    
  )
}
