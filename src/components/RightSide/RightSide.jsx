import { summary } from '../../data/summary';
import { Experience } from '../Experience/Experience';
import cl from './RightSide.module.css';

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

export const RightSide = () => {
    return (
        <div className={cl.right}>
                <h1 className={cl.title}>
                    Конопацкий <br /> Валентин Александрович{' '}
                </h1>
                <h2 className={cl.subTitle}>
                    {' '}
                    Frontend Developer
                </h2>
                <div className={cl.location}>
                    <div className={cl.info}>
                        <img className={cl.icon} src="icons/right/map.svg" alt="city" />
                        <span>Брест</span>
                    </div>
                    <div className={cl.info}>
                        <img
                            className={cl.icon}
                            src="icons/right/info.svg"
                            alt="old"
                        />
                        <span>{calculateAge('1995-10-03')} лет</span>
                    </div>
                </div>
                <div className={cl.summary}>
                    <div>{summary.aboutMe}</div>
                    <div>{summary.lookingFor}</div>
                </div>
                <Experience />
        </div>
    );
};
