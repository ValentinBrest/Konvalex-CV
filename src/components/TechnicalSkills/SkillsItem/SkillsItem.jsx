import cl from './SkillsItem.module.css';

export const SkillsItem = ({title, tags}) => {
    return (
        <div> 
            <div className={cl.title}>{title}</div>
            <div className={cl.list}>
                {tags.map((item, index) => (
                    <div key={index} className={cl.tag}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};
