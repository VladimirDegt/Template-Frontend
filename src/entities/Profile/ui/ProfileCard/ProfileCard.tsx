import {memo, useCallback, useState} from 'react';
import {useSelector} from "react-redux";
import {EditableProfileCard, EditableProfileCardHeader} from "@/features/EditableProfileCard";
import { getProfileState } from "@/entities/Profile/model/selectors/getProfileState";
import {Profile} from "@/entities/Profile";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastId = "custom-id-yes";

export const ProfileCard = memo(() => {
    const [disabled, setDisabled] = useState<boolean>(true);
    const [newProfile, setNewProfile] = useState<Profile | null>(null)
    const profileState = useSelector(getProfileState);

    const onChangeDisabledInput = useCallback(() => {
        setDisabled(prevState => !prevState)
    }, [setDisabled]);

    const getNewProfile = useCallback((profile: Profile) => {
        setNewProfile(profile)
    }, [setNewProfile])

    const saveUpdateProfile = useCallback(() => {
        toast.info('Вибачайте, але бекендер забув завести сервер )', {autoClose: 3000, toastId})
    }, [])

    const cleanProfile = useCallback(() => {
        setNewProfile(null)
    }, [setNewProfile])

    return (
        <>
            <ToastContainer autoClose={1500}/>
            <EditableProfileCardHeader
                onChangeDisabledInput={onChangeDisabledInput}
                saveUpdateProfile={saveUpdateProfile}
                cleanProfile={cleanProfile}
            />
            <EditableProfileCard
                data={profileState}
                disabled={disabled}
                getNewProfile={getNewProfile}
                newProfile={newProfile}
            />
        </>
    );
});
