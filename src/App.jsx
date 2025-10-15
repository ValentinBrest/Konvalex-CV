import cl from './App.module.css';
import { LeftSide } from './components/LeftSide/LeftSide';
import { RightSide } from './components/RightSide/RightSide';
import { BottomBlock } from './components/BottomBlock/BottomBlock';

function App() {
    return (
        <main className={cl.main}>
            <div className={cl.wrap}>
                <LeftSide />
                <RightSide />
            </div>
            <BottomBlock />
            <div className={cl.footer}>
                <p>Удаленная работа • Полная занятость</p>
            </div>
        </main>
    );
}

export default App;
