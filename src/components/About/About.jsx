import React from 'react';
import './About.css';
import { TitleDivider } from '../TitleDivider/TitleDivider';


export const About = () => {
  return (
    <>
        <TitleDivider img={"icons/right/about.svg"}>О себе</TitleDivider>

        <div className="main__right-about">
                    <div className="main__right-about_d">
                     Люблю моделировать, чертить, создавать афишы, логотипы, визитки.
                     Интересуюсь VFX, Game dev, motion design, лаконичным дизайном, юзабилити и логикой сайта.
                    </div>
                    <div className="main__right-hobby"> 
                        <div>
                                Также я: 
                            <ul>
                                <li>терпеливый &#128526;</li>
                                <li>усидчивый &#128188;</li>
                                <li>занимаюсь спортом &#128692;</li>
                            </ul>
                        </div>
                        <div>
                                <i>Мои хобби:</i>
                            <ul>
                                <li>пишу книгу &#128213;</li>
                                <li>создаю музыку &#127928;</li>
                            </ul>
                        </div>
                    </div>
                </div>
    </>
    
  )
}
