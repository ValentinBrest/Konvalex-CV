import cl from './BottomBlock.module.css';
import { TechnicalSkills } from '../TechnicalSkills/TechnicalSkills';
import { Projects } from '../Projects/Projects';


export const BottomBlock = () => {
    return (
        <div className={cl.right}>
                <TechnicalSkills />
                <Projects />
        </div>
    );
};
