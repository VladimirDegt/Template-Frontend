import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import {fetchProfileData, ProfileCard} from '@/entities/Profile';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <main className={classNames('', {}, [className])}>
            <ProfileCard />
        </main>
    );
}

export default ProfilePage;