import { classNames } from 'shared/lib/classNames/classNames';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    return (
        <div className={classNames('', {}, [className])}>
            Profile Page
        </div>
    );
}

export default ProfilePage;