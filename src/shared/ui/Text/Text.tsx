import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { memo } from 'react';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    textInverted?: string;
    theme?: TextTheme
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        textInverted,
        theme = TextTheme.PRIMARY
    } = props;

    return (
        <div className={classNames('', {[cls[theme]]: true}, [className])}>
            {title && <p className={cls.title}>{ title}</p>}
            {text && <p className={cls.text}>{ text}</p>}
            {textInverted && <p className={cls.textInverted}>{ textInverted}</p>}
        </div>
    );
})