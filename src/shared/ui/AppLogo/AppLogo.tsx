import {memo} from 'react';
import cls from './AppLogo.module.scss';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Icon} from "@/shared/ui/Icon/Icon";
import IconLogo from "@/shared/assets/icons/logo.svg"

interface AppLogoProps {
    className?: string;
    size?: number
}

export const AppLogo = memo(({className, size}: AppLogoProps) => {
    return (
        <div
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <Icon
                Svg={IconLogo}
                width={size}
                height={size}
            />
            <div className={cls.gradientBig}/>
            <div className={cls.gradientSmall}/>

        </div>
    );
});
