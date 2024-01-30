import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Toolbar.module.scss';
import { memo } from 'react';

interface ToolbarProps {
    className?: string;
}
export const Toolbar = memo(({className}: ToolbarProps) => {

    return (
        <aside className={classNames(cls.Toolbar, { }, [className])}>
            <div>
                Контент для тулбара
            </div>
        </aside>
    );
})