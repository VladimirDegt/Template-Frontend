import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";

interface LoginFormProps {
    className?: string,
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const dispatch = useDispatch();
    const {username, email, password} = useSelector(getLoginState);

    const onChangeUserName = useCallback((val: string) => {
        dispatch(loginActions.setUserName(val))
    }, [dispatch])

    const onChangeUserEmail = useCallback((val: string) => {
        dispatch(loginActions.setUserEmail(val))
    }, [dispatch])

    const onChangeUserPassword = useCallback((val: string) => {
        dispatch(loginActions.setUserPassword(val))
    }, [dispatch])

    const onLoginClick = useCallback( () => {
        dispatch(loginByUsername({username, email, password}))
    } ,[dispatch, username, email, password])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                value={username}
                onChange={onChangeUserName}
                placeholder="Введіть ім'я"
            />
            <Input
                type="email"
                value={email}
                placeholder="Введіть email"
                onChange={onChangeUserEmail}
            />
            <Input
                type="password"
                value={password}
                placeholder="Введіть пароль"
                onChange={onChangeUserPassword}
            />
            <Button
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.loginBtn}
                onClick={onLoginClick}
            >
                Увійти
            </Button>
        </div>
    );
})



