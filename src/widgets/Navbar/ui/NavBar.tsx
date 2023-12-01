import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {Modal} from "shared/ui/Modal/Modal";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useCallback, useState} from "react";

interface NavbarProps {
    className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev)=> !prev)
    }, [])

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher />
            <Button
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                Вхід
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal }
            >
                Це базове модальне вікно для перевикористання!
            </Modal>
        </div>
    );
}

