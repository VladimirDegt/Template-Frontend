import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import { useState } from 'react';

interface LoginFormProps {
    className?: string,
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const [value, setValue] = useState('');
    const onChange = (val: string)=> {
        setValue(val)
    }
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Введіть ім'я"
            />
            <Input type="email"/>
            <Input type="password"/>
            <Button className={cls.loginBtn}>
                Увійти
            </Button>
        </div>
    );
}



