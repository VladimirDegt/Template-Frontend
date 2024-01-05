import {memo} from 'react';
import cls from './AppLogo.module.scss';
import AppSvg from '@/shared/assets/icons/app-image.svg';
import {classNames} from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
    className?: string;
    size?: number
}

export const AppLogo = memo(({className, size=50}: AppLogoProps) => {
    return (
        <div
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig}/>
            <div className={cls.gradientSmall}/>
            <AppSvg
                width={size}
                height={size}
                className={cls.appLogo}
            />
        </div>
    );
});
