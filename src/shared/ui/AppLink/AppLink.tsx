import {memo, ReactNode} from 'react';
import {LinkProps, NavLink} from 'react-router-dom';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    children?: ReactNode;
    activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        children,
        to,
        variant = 'primary',
        activeClassName = '',
        ...otherProps
    } = props;
    return (
        <NavLink
            to={to}
            className={({isActive}) => classNames(cls.AppLink, {[activeClassName]: isActive}, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
})