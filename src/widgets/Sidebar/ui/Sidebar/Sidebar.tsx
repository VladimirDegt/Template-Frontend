import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { Button, ButtonSize } from '@/shared/ui/Button/Button';
import { SidebarItemsList } from '@/widgets/Sidebar/model/items';
import { SidebarItem } from './SidebarItem/SidebarItem';
import { memo, useState } from 'react';
import {AppLogo} from "@/shared/ui/AppLogo";
import {ThemeSwitcher} from "@/shared/ui/ThemeSwitcher";
interface SidebarProps {
    className?: string;
}
export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <aside className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <AppLogo
                size = {collapsed ? 30 : 50}
            />
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
                size={ButtonSize.L}
                circular
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
            </div>
        </aside>
    );
})