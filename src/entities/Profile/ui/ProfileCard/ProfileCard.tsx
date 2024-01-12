import {memo, useCallback, useState} from 'react';
import {useSelector} from "react-redux";
import {EditableProfileCard, EditableProfileCardHeader} from "@/features/EditableProfileCard";
import { getProfileState } from "@/entities/Profile/model/selectors/getProfileState";

export const ProfileCard = memo(() => {
    const [disabled, setDisabled] = useState<boolean>(true)
    const profileState = useSelector(getProfileState);

    const onChangeDisabledInput = useCallback(() => {
        setDisabled(prevState => !prevState)
    }, [setDisabled])

    return (
        <>
            <EditableProfileCardHeader onChangeDisabledInput={onChangeDisabledInput}/>
            <EditableProfileCard data={profileState} disabled={disabled}/>
        </>
    );
});
