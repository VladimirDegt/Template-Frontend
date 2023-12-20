import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import { memo, useCallback } from 'react';
import { useSelector } from "react-redux";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useAppDispatch } from "shared/lib/hook/useAppDispatch/useAppDispatch";

interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const dispatch = useAppDispatch();
    //@ts-ignore
    const {username, email, password, error, isLoading} = useSelector(getLoginState);

    const onChangeUserName = useCallback((val: string) => {
        dispatch(loginActions.setUserName(val))
    }, [dispatch])

    const onChangeUserEmail = useCallback((val: string) => {
        dispatch(loginActions.setUserEmail(val))
    }, [dispatch])

    const onChangeUserPassword = useCallback((val: string) => {
        dispatch(loginActions.setUserPassword(val))
    }, [dispatch])

    const onLoginClick = useCallback( async () => {
        const result = await dispatch(loginByUsername({ username, email, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    } ,[dispatch, username, email, password, onSuccess])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={ 'Форма авторизації' } />
            {error && <Text text={ error } theme={TextTheme.ERROR} />}
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
                disabled={isLoading}
            >
                Увійти
            </Button>
        </div>
    );
})

export default LoginForm

