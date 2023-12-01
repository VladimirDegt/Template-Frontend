import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { SidebarShow } from 'shared/ui/SidebarCollapsedSwitcher';
import { SidebarHide } from 'shared/ui/SidebarCollapsedSwitcher/ui/SidebarHide/SidebarHide';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        console.log('click-->', );
        setCollapsed((prev) => !prev)
    }
    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                className={collapsed ? cls.btnSidebarCol : cls.btnSidebar}
                type='button'
                theme={ThemeButton.CLEAR}
                onClick={onToggle}
            >
                {collapsed ? <SidebarShow fill='red' /> : <SidebarHide fill='red'/> }
            </Button>

        </div>
    );
}