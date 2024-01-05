import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { SidebarItemsList } from '@/widgets/Sidebar/model/items';
import { SidebarItem } from './SidebarItem/SidebarItem';
import { memo, useState } from 'react';
import {AppLogo} from "@/shared/ui/AppLogo";

interface SidebarProps {
    className?: string;
}
export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <aside className={classNames(cls.SidebarRedesigned, { [cls.collapsed]: collapsed }, [className])}>
            <AppLogo className={cls.appLogo}/>
            <div className={cls.items}>
                {SidebarItemsList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))
                }
            </div>
            <Button
                type='button'
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                circular
            >
                {collapsed ? ">" : "<"}
            </Button>
        </aside>
    );
})