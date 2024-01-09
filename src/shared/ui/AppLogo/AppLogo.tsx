import {memo} from 'react';
import cls from './AppLogo.module.scss';
import {classNames} from '@/shared/lib/classNames/classNames';
import Ava from "@/shared/assets/image/ava.png";
import {Icon} from "@/shared/ui/Icon/Icon";
import IconLogo from "@/shared/assets/icons/logo.svg"

interface AppLogoProps {
    className?: string;
    size?: number
}

export const AppLogo = memo(({className, size=50}: AppLogoProps) => {
    return (
        <div
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <Icon
                Svg={IconLogo}
                width={100}
                height={100}
            />
            <div className={cls.gradientBig}/>
            <div className={cls.gradientSmall}/>

        </div>
    );
});
