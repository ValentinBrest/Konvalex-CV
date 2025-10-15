import cl from './Projects.module.css';
import { RightItemBlock } from '../RightItemBlock/RightItemBlock';
import { ProjectItem } from './ProjectItem/ProjectItem';
import { projects } from '../../data/projects';

export const Projects = () => {
    return (
        <RightItemBlock title={'Проекты'} img={'icons/right/course.svg'}>
            <div className={cl.wrap}>
                {projects.map((item) => (
                <ProjectItem key={item.id} {...item}/>
            ))}
            </div>
        </RightItemBlock>
    );
};
