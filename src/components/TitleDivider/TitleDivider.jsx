import React from 'react';
import './TitleDivider.css';

export const TitleDivider = ({children, img}) => {
  return (
    <div className="section__title">
                    <h3 className="section__title-text">{children}</h3>
                    <div className="divider"></div>
                    <div className="section__title-circle">
                        <img src={img} alt="exp"/>
                    </div>
                </div>
  )
}
