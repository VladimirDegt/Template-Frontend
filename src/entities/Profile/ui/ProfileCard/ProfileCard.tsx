import { memo } from 'react';
import {useSelector} from "react-redux";
import {EditableProfileCard, EditableProfileCardHeader} from "@/features/EditableProfileCard";
import { getProfileState } from "@/entities/Profile/model/selectors/getProfileState";

export const ProfileCard = memo(() => {
    const profileState = useSelector(getProfileState);

    return (
        <>
            <EditableProfileCardHeader/>
            <EditableProfileCard data={profileState}/>
        </>
    );
});
