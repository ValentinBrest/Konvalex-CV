import { TitleDivider } from '../TitleDivider/TitleDivider';

export const RightItemBlock = ({children, title, img}) => {
    return (
        <>
            <TitleDivider img={img}>{title}</TitleDivider>
            <div>
                 {children}
            </div>
        </>
    );
};
