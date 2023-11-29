import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
    return ( 
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">Головна</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">Про сайт</AppLink>
            </div>
        </div>
    );
}

