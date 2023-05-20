import React from 'react';
import './Skills.css';

import { Title } from '../Title/Title';

const programms = ['Adobe Illustrator', 'Blender ', 'Figma ', 'Компас ', 'SketchUp ']

export const Skills = () => {
  return (
    <div class="main__skills">
      <Title>Навыки</Title>
      <div class="container__left">
          <ol class="main__skills-box">
            {programms.map((item, index) => <li type="disc" key={index}>{item}</li>)}
              
          </ol>
      </div>
  </div>
  )
}
