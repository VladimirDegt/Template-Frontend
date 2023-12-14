import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useCallback, useState} from "react";
import { LoginModal } from 'features/AuthByUserEmail';
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";

interface NavbarProps {
    className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    },[]);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])
    
    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    Вийти
                </Button>
            </div>
        )
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher />
            <Button
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                Вхід
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
}

