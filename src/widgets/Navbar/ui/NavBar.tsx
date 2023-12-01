import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
    return ( 
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                /
            </div>
        </div>
    );
}

