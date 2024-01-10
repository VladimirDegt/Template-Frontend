import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {memo, useCallback, useState} from "react";
import {LoginModal} from '@/features/AuthByUserEmail';
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "@/entities/User";
import {RegisterModal} from '@/features/AuthByUserEmail/ui/RegisterModal/RegisterModal';
import {Dropdown} from "@/shared/ui/Dropdown/Dropdown";
import {RoutePath} from "@/shared/config/routeConfig/routeConfig";
import {Avatar} from "@/shared/ui/Avatar";
import ImgAvatar from '@/shared/assets/image/avatar.png'

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
                    trigger={<Avatar
                        src={ImgAvatar}
                        alt={'Аватарка користувача'}
                        size={40}
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

