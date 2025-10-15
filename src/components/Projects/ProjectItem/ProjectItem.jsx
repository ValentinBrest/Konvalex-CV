import cl from './ProjectItem.module.css';

export const ProjectItem = ({description, title, name, tags , link, linkDemo, icon}) => {
    return (
        <div className={cl.wrap}>
            <div className={cl.top}>
                <div className={cl.titleWrap}>
                    <img src={icon} className={cl.icon} alt='icon'/>
                    <span className={cl.title}>{title}</span>
                </div>
                <a target='_blank' className={cl.link} href={link || linkDemo}>{name}</a>
            </div>
            <div className={cl.descr}>
                {description}
            </div>
            <div>
                {tags.map((item, index) => (
                    <span key={index} className={cl.tag}>{item}</span>
                ))}
            </div>
        </div>
    );
};
