import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { memo } from 'react';

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center'
}
export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    textInverted?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        textInverted,
        theme = TextTheme.PRIMARY,
        align = TextAlign.CENTER,
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
    }
    return (
        <div className={classNames('', mods, [className])}>
            {title && <p className={cls.title}>{ title}</p>}
            {text && <p className={cls.text}>{ text}</p>}
            {textInverted && <p className={cls.textInverted}>{ textInverted}</p>}
        </div>
    );
})