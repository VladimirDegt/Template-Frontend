import {memo} from 'react';
import cls from './AppLogo.module.scss';
import {classNames} from '@/shared/lib/classNames/classNames';
import Ava from "@/shared/assets/image/ava.png";

interface AppLogoProps {
    className?: string;
    size?: number
}

export const AppLogo = memo(({className, size=50}: AppLogoProps) => {
    return (
        <div
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <img
                className={cls.appLogo}
                width={size}
                height={size}
                src={Ava}
                alt='avatar'
            />
            <div className={cls.gradientBig}/>
            <div className={cls.gradientSmall}/>

        </div>
    );
});
