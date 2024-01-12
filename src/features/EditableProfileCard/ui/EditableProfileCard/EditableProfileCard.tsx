import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './EditableProfileCard.module.scss'
import {memo, useEffect, useState} from "react";
import {Avatar} from "@/shared/ui/Avatar";
import ImgAvatar from '@/shared/assets/image/avatar.png'
import {Input} from "@/shared/ui/Input/ui/Input";
import {Profile} from "@/entities/Profile";
import {CurrencySelect} from "@/entities/Currency/ui/CurrencySelect";
import {CountrySelect} from "@/entities/Country/ui/CountrySelect";
import {UploadFile} from "@/shared/ui/UploadFile/UploadFile";

interface EditableProfileCardProps {
    className?: string,
    data?: Profile,
    disabled: boolean
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const {className, data, disabled} = props;
    const [avatarNew, setAvatarNew] = useState('');

    useEffect(() => {
        if (avatarNew) {
            setAvatarNew(avatarNew);
        }
    }, [avatarNew]);

    const getNewAvatar = (avatar:File) => {
        const objectURL = URL.createObjectURL(avatar);
        setAvatarNew(objectURL);
    }

    // const dispatch = useAppDispatch();

    // const onChangeFirstname = useCallback(
    //     // (value?: string) => {
    //     //     // dispatch(profileActions.updateProfile({ first: value || '' }));
    //     // },
    //     [dispatch],
    // );

    // const onChangeLastname = useCallback(
    //     (value?: string) => {
    //         // dispatch(profileActions.updateProfile({ lastname: value || '' }));
    //     },
    //     [dispatch],
    // );

    // const onChangeCity = useCallback(
    //     (value?: string) => {
    //         // dispatch(profileActions.updateProfile({ city: value || '' }));
    //     },
    //     [dispatch],
    // );

    // const onChangeAge = useCallback(
    //     (value?: string) => {
    //         // dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    //     },
    //     [dispatch],
    // );

    // const onChangeUsername = useCallback(
    //     (value?: string) => {
    //         // dispatch(profileActions.updateProfile({ username: value || '' }));
    //     },
    //     [dispatch],
    // );

    // const onChangeAvatar = useCallback(
    //     (value?: string) => {
    //         // dispatch(profileActions.updateProfile({ avatar: value || '' }));
    //     },
    //     [dispatch],
    // );

    // const onChangeCurrency = useCallback(
    //     (currency: Currency) => {
    //         // dispatch(profileActions.updateProfile({ currency }));
    //     },
    //     [dispatch],
    // );

    // const onChangeCountry = useCallback(
    //     // (country: Country) => {
    //     //     // dispatch(profileActions.updateProfile({ country }));
    //     // },
    //     [dispatch],
    // );



    return (
        <div className={classNames(cls.EditableProfileCard, {}, [])}>
            <Avatar
                src={ avatarNew || ImgAvatar}
                size={100}
                alt={'Аватар користувача'}
            />
            <div className={cls.containerInput}>
                <div className={cls.blockInput}>
                    <Input
                        value={data?.first}
                        label={'Ім`я'}
                        disabled={disabled}
                        // onChange={onChangeFirstname}
                    />
                    <Input
                        value={data?.lastname}
                        label={'Прізвище'}
                        disabled={disabled}
                        // onChange={onChangeLastname}
                    />
                    <Input
                        value={data?.age}
                        label={'Вік'}
                        disabled={disabled}
                        // onChange={onChangeAge}
                    />
                    <Input
                        value={data?.city}
                        label={'Місто'}
                        disabled={disabled}
                        // onChange={onChangeCity}
                    />
                </div>
                <div className={cls.blockInput}>
                    <Input
                        value={data?.username}
                        label={'Нік'}
                        disabled={disabled}
                        // onChange={onChangeUsername}
                    />
                    <UploadFile
                        label='Аватар'
                        disabled={disabled}
                        getNewAvatar={getNewAvatar}
                    />
                    <CurrencySelect readonly={disabled}/>
                    <CountrySelect readonly={disabled}/>
                </div>
            </div>

        </div>
    )
        ;
});
