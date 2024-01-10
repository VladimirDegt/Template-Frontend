import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './EditableProfileCard.module.scss'
import {memo, useCallback} from "react";
import {Avatar} from "@/shared/ui/Avatar";
import ImgAvatar from '@/shared/assets/image/avatar.png'
import {Input} from "@/shared/ui/Input/ui/Input";
import {useAppDispatch} from "@/shared/lib/hook/useAppDispatch/useAppDispatch";
import {Profile} from "@/entities/Profile";
import {Currency} from "@/entities/Currency";

interface EditableProfileCardProps {
    className?: string,
    data?: Profile
}

export const EditableProfileCard = memo(({className, data}: EditableProfileCardProps) => {
    console.log('data-->', data)
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
        <div className={classNames(cls.EditableProfileCard, {}, [className])}>
            <Avatar
                src={ImgAvatar}
                size={50}
                alt={'Аватар користувача'}
            />
            <div>
                <div className={cls.blockInput}>
                    <Input
                        value={data?.first}
                        label={'Ім`я'}
                        // onChange={onChangeFirstname}
                    />
                    <Input
                        value={data?.lastname}
                        label={'Прізвище'}
                        // onChange={onChangeLastname}
                    />
                    <Input
                        // value={data?.age}
                        label={'Вік'}
                        // onChange={onChangeAge}
                    />
                    <Input
                        value={data?.city}
                        label={'Місто'}
                        // onChange={onChangeCity}
                    />
                </div>
                <div className={cls.blockInput}>
                    <Input
                        value={data?.username}
                        label={'Нікнейм'}
                        // onChange={onChangeLastname}
                    />
                    <Input
                        value={data?.avatar}
                        label={'Аватар'}
                        // onChange={onChangeLastname}
                    />
                    {/*<Input*/}
                    {/*    value={data?.currency}*/}
                    {/*    label={'Вік'}*/}
                    {/*    // onChange={onChangeAge}*/}
                    {/*/>*/}
                    {/*<Input*/}
                    {/*    value={data?.country}*/}
                    {/*    label={'Місто'}*/}
                    {/*    onChange={onChangeCity}*/}
                    {/*/>*/}
                </div>
            </div>

        </div>
    )
        ;
});
