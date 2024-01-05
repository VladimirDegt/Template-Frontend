import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './Icon.module.scss';
import React, { memo } from 'react';

interface IconProps {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
    width?: number;
    height?: number;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg,  ...otherProps } = props;

    return (
        <Svg
            className={classNames(cls.Icon, {}, [
                className,
            ])}
            {...otherProps}
        />
    );
})

