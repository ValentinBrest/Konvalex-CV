import React from 'react';
import './LeftSide.css';
import { Contacts } from '../Contacts/Contacts';
import { Lang } from '../Lang/Lang';
import { Skills } from '../Skills/Skills';


export const LeftSide = () => {
  return (
    <div className="main__left">
      <div>
          <img className="main__photo" src="image/1.png" alt="my photo"/>
          <Contacts/>
          <Skills/>
      </div>
    </div>
    
  )
}
