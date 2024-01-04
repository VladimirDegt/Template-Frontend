import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { fetchProfileData } from '@/entities/Profile';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <div className={classNames('', {}, [className])}>
            Profile Page
        </div>
    );
}

export default ProfilePage;