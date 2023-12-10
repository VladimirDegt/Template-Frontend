import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import { Button } from 'shared/ui/Button/Button';

interface LoginFormProps {
    className?: string,
}

export const LoginForm = ({ className }: LoginFormProps) => {

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <input type="text"/>
            <input type="email"/>
            <input type="password"/>
            <Button className={cls.loginBtn}>
                Увійти
            </Button>
        </div>
    );
}



