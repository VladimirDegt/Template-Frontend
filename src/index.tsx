import { render } from 'react-dom';
import cls from './index.module.scss'
render(
    
    <div className={cls.div}><span className={cls.span}>перший реакт компонент</span></div>,
    document.getElementById("root")
    
)
