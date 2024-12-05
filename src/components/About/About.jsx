import React from 'react';
import './About.css';
import { TitleDivider } from '../TitleDivider/TitleDivider';

export const About = () => {
    return (
        <>
            <TitleDivider img={'icons/right/about.svg'}>About me</TitleDivider>

            <div className="main__right-about">
                <div className="main__right-about_d">
                    In my free time, I improve my English and read additional
                    programming literature.
                </div>
                <div class="main__right-hobby">
                    <div>
                        Also I enjoy:
                        <ul>
                            <li>playing football &#9917;</li>
                            <li>swimming &#127946;</li>
                            <li>cycling &#128692;</li>
                        </ul>
                    </div>
                    <div>
                        <i>My Hobbies:</i>
                        <ul>
                            <li>guitar playing &#127928;</li>
                            <li>dancing &#128378;</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
