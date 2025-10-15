import cl from './LeftSide.module.css';
import { Contacts } from '../Contacts/Contacts';
import { Lang } from '../Lang/Lang';
import { Education } from '../Education/Education';

export const LeftSide = () => {
    return (
        <div className={cl.left}>
            <img className={cl.photo} src="image/1.jpg" alt="avatar" />
            <Contacts />
            <Lang />
            <Education />
        </div>
    );
};
