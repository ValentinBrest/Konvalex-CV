import cl from './Experience.module.css';
import { RightItemBlock } from '../RightItemBlock/RightItemBlock';
import { experience } from '../../data/expirience';

export const Experience = () => {
    return (
        <RightItemBlock title={'Опыт работы'} img={'icons/right/bag.svg'}>
            <ul className={cl.list}>
                {experience.map((item) => (
                    <li className={cl.job}>
                            <span className={cl.descr}>
                                {item.proffession}
                                <span className={cl.org}>
                                    {` - "${item.companyName}" - `}
                                </span>
                                <span className={cl.period}>
                                    [{item.from} - {item.to}]
                                </span>
                            </span>

                            <div className={cl.done}>
                                {item.description.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </div>
                    </li>
                ))}
            </ul>
        </RightItemBlock>
    );
};
