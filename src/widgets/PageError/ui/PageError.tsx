import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {

    const reloadPage = () => {
        location.reload()
    }
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>Something went wrong. Please try again later</p>
            <Button type='button' onClick={reloadPage}>
                Reload page
            </Button>
        </div>
    );
}