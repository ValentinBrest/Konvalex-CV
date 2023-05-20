import React from 'react';
import './Experience.css';
import { TitleDivider } from '../TitleDivider/TitleDivider';


export const Experience = () => {
  return (
    <>
        <TitleDivider img={"icons/right/bag.svg"}>Опыт Работы</TitleDivider>

        <ul className="main-right-block">
                    <li className="main__right-wrap">
                        <div className="main__right-descr">
                            <span>
                                Продавец-консультант
                                <span className="main__right-org"> - ООО "ОМА" - </span>
                                <span className="main__right-data">[06.2022 - н.в.]</span>
                            </span> 
                            
                            <ui className="main__right-work">
                                <li className="main__right-work">
                                консультирование покупателей
                                </li>
                                <li className="main__right-work">
                                помощь в инвентаризации
                                </li>
                                <li className="main__right-work">
                                выкладка товара
                                </li>
                            </ui>
                        </div>
                    </li>



                    <li className="main__right-wrap">
                        <div className="main__right-descr"> 
                            <span>
                                Техник-технолог мебельного производства
                                <span className="main__right-org"> - ООО "Зодчий" - </span>
                                <span className="main__right-data">[07.2020 - 11.2020]</span>
                            </span> 
                            <li className="main__right-work">
                            общение с клиентами
                            </li>
                            <li className="main__right-work">
                            создание чертежей мебели
                            </li>
                            <li className="main__right-work">
                            помощь в создании 3D помещения с мебелью 
                            </li>
                            <li className="main__right-work">
                            помощь в изготовлении мебели
                            </li>
                        </div>
                    </li>
                </ul>
    </>
    
  )
}
