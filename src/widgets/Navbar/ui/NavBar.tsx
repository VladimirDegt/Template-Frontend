import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {memo, useCallback, useState} from "react";
import {LoginModal} from '@/features/AuthByUserEmail';
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "@/entities/User";
import {RegisterModal} from '@/features/AuthByUserEmail/ui/RegisterModal/RegisterModal';
import {Dropdown} from "@/shared/ui/Dropdown/Dropdown";
import {AppLogo} from "@/shared/ui/AppLogo";
import {RoutePath} from "@/shared/config/routeConfig/routeConfig";
import {Text} from "@/shared/ui/Text/Text";
import {Button, ButtonTheme} from "@/shared/ui/Button/Button";

interface NavbarProps {
    className?: string,
}

export const Navbar = memo(({className}: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const [isRegisterModal, setIsRegisterModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseRegisterModal = useCallback(() => {
        setIsRegisterModal(false);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowRegisterModal = useCallback(() => {
        setIsRegisterModal(true);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
                <Dropdown
                    direction= 'bottom left'
                    className={cls.dropdown}
                    items={[
                        {
                            content: 'Профіль',
                            href: RoutePath.profile
                        },
                        {
                            content: 'Вийти',
                            onClick: onLogout,
                        },
                    ]}
                    trigger={<AppLogo
                        size={30}
                        // src={authData.avatar}
                    />}
                />
            </header>
        )
    }

    return (
        <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            <Dropdown
                direction= 'bottom left'
                className={cls.dropdown}
                items={[
                    {
                        content: 'Логін',
                        onClick: onShowModal,
                    },
                    {
                        content: 'Реєстрація',
                        onClick: onShowRegisterModal,
                    },
                ]}
                trigger={
                    <p className={cls.btn}>
                        Увійти
                    </p>
            }
            />

            <RegisterModal
                isOpen={isRegisterModal}
                onClose={onCloseRegisterModal}
            />
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </header>
    );
})

