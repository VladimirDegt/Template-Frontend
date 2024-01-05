import {memo} from 'react';
import cls from './AppLogo.module.scss';
import AppSvg from '@/shared/assets/icons/app-image.svg';
import {classNames} from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
    className?: string;
}

export const AppLogo = memo(({className}: AppLogoProps) => {
    return (
        <div
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig}/>
            <div className={cls.gradientSmall}/>
            <AppSvg className={cls.appLogo}/>
        </div>
    );
});
