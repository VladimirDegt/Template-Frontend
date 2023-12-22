import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import cls from './RegisterForm.module.scss';
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch';
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface RegisterFormProps {
    className?: string;
    onSuccess: () => void;
}

const RegisterForm = memo(({ className, onSuccess }: RegisterFormProps) => {
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

    const onRegisterClick = useCallback( async () => {
        const result = await dispatch(loginByUsername({ username, email, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    } ,[dispatch, username, email, password, onSuccess])

    return (
        <div className={classNames(cls.RegisterForm, {}, [className])}>
            <Text title={ 'Форма реєстрації' } />
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
                onClick={onRegisterClick}
                disabled={isLoading}
            >
                Зареєструватися
            </Button>
        </div>
    );
})

export default RegisterForm