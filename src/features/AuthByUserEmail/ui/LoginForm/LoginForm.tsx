import { memo, useCallback } from 'react';
import { useSelector } from "react-redux";
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/ui/Input';
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "@/shared/ui/Text/Text";
import { useAppDispatch } from "@/shared/lib/hook/useAppDispatch/useAppDispatch";

interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const dispatch = useAppDispatch();
    //@ts-ignore
    const {email, password, error, isLoading} = useSelector(getLoginState);


    const onChangeUserEmail = useCallback((val: string) => {
        dispatch(loginActions.setUserEmail(val))
    }, [dispatch])

    const onChangeUserPassword = useCallback((val: string) => {
        dispatch(loginActions.setUserPassword(val))
    }, [dispatch])

    const onLoginClick = useCallback( async () => {
        const result = await dispatch(loginByUsername({ email, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    } ,[dispatch, email, password, onSuccess])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={ 'Авторизація' } />
            {error && <Text text={ error } theme={TextTheme.ERROR} />}
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

