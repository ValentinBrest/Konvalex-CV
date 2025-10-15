import cl from'./LeftItemBlock.module.css';
import { Title } from '../Title/Title';

export const LeftItemBlock = ({children, title}) => {
    return (
        <div className={cl.wrap}>
            <Title>{title}</Title>
            <div className={cl.container}>
                 {children}
            </div>
        </div>
    );
};
