import { RightItemBlock } from '../RightItemBlock/RightItemBlock';
import { SkillsItem } from './SkillsItem/SkillsItem';
import { frontend, library, tools } from '../../data/skills';
import cl from './TechnicalSkills.module.css';

export const TechnicalSkills = () => {
    return (
        <RightItemBlock img={'icons/right/university.svg'} title="Навыки"> 
            <div className={cl.wrap}>
                <SkillsItem title={'Frontend'} tags={frontend} />
                <SkillsItem title={'Библиотека & State'} tags={library} />
                <SkillsItem title={'Инструменты'} tags={tools} />
            </div>
        </RightItemBlock>
    );
};
