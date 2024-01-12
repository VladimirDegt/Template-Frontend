import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './EditableProfileCard.module.scss'
import {memo, useCallback, useEffect, useState} from "react";
import {Avatar} from "@/shared/ui/Avatar";
import ImgAvatar from '@/shared/assets/image/avatar.png'
import {Input} from "@/shared/ui/Input/ui/Input";
import {Profile} from "@/entities/Profile";
import {CurrencySelect} from "@/entities/Currency/ui/CurrencySelect";
import {CountrySelect} from "@/entities/Country/ui/CountrySelect";
import {UploadFile} from "@/shared/ui/UploadFile/UploadFile";
import {Currency} from "@/entities/Currency";
import {Country} from "@/entities/Country";

interface EditableProfileCardProps {
    className?: string,
    data?: Profile,
    disabled: boolean
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const {className, data, disabled} = props;
    const [avatar, setAvatar] = useState(ImgAvatar);
    const [first, setFirst] = useState(data?.first || '');
    const [lastname, setLastname] = useState(data?.lastname || '');
    const [age, setAge] = useState(data?.age || '');
    const [city, setCity] = useState(data?.city || '');
    const [username, setUsername] = useState(data?.username || '');
    const [currency, setCurrency] = useState(data?.currency || '');
    const [country, setCountry] = useState(data?.country || '');

    useEffect(() => {
        if (avatar) {
            setAvatar(avatar);
        }
    }, [avatar]);

    const getNewAvatar = useCallback((avatar:File) => {
        const objectURL = URL.createObjectURL(avatar);
        setAvatar(objectURL);
    }, [setAvatar])

    // const dispatch = useAppDispatch();

    const onChangeFirstname =
        (value: string) => {
            setFirst(value)
            // dispatch(profileActions.updateProfile({ first: value || '' }));
    }

    const onChangeLastname =
        (value: string) => {
            setLastname(value)
            // dispatch(profileActions.updateProfile({ first: value || '' }));
    }

    const onChangeAge =
        (value: string) => {
            setAge(value)
            // dispatch(profileActions.updateProfile({ first: value || '' }));
    }

    const onChangeCity =
        (value: string) => {
            setCity(value)
            // dispatch(profileActions.updateProfile({ first: value || '' }));
        }
    const onChangeUsername =
        (value: string) => {
            setUsername(value)
            // dispatch(profileActions.updateProfile({ first: value || '' }));
    }

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            setCurrency(currency)
            // dispatch(profileActions.updateProfile({ currency }));
        },
        [setCurrency],
    );

    const onChangeCountry = useCallback(
        (currency: Country) => {
            setCountry(currency)
            // dispatch(profileActions.updateProfile({ currency }));
        },
        [setCountry],
    );

    return (
        <div className={classNames(cls.EditableProfileCard, {}, [])}>
            <Avatar
                src={avatar}
                size={100}
                alt={'Аватар користувача'}
            />
            <div className={cls.containerInput}>
                <div className={cls.blockInput}>
                    <Input
                        value={first}
                        label={'Ім`я'}
                        disabled={disabled}
                        onChange={onChangeFirstname}
                    />
                    <Input
                        value={lastname}
                        label={'Прізвище'}
                        disabled={disabled}
                        onChange={onChangeLastname}
                    />
                    <Input
                        value={age}
                        label={'Вік'}
                        disabled={disabled}
                        onChange={onChangeAge}
                    />
                    <Input
                        value={city}
                        label={'Місто'}
                        disabled={disabled}
                        onChange={onChangeCity}
                    />
                </div>
                <div className={cls.blockInput}>
                    <Input
                        value={username}
                        label={'Нік'}
                        disabled={disabled}
                        onChange={onChangeUsername}
                    />
                    <UploadFile
                        label='Аватар'
                        disabled={disabled}
                        getNewAvatar={getNewAvatar}
                    />
                    <CurrencySelect readonly={disabled} onChangeCurrency={onChangeCurrency}/>
                    <CountrySelect readonly={disabled} onChangeCountry={onChangeCountry}/>
                </div>
            </div>

        </div>
    )
        ;
});
