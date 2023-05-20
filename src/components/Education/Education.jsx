import React from 'react';
import './Education.css';
import { TitleDivider } from '../TitleDivider/TitleDivider';


export const Education = () => {
  return (
    <>
        <TitleDivider img={"icons/right/university.svg"}>Образование</TitleDivider>

        <div className="main-right-block">
                    <div className="main__right-wrap">
                        <div className="main__right-descr">
                            <span>
                               "техник-технолог" 
                               <span className="main__right-org"> - Пинский индустриально-педагогический колледж - </span>
                               <span className="main__right-data">[2017 - 2020]</span>
                            </span> 
                            
                        </div>
                    </div>
                </div>
    </>
    
  )
}
