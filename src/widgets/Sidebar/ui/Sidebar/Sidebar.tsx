import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { SidebarItemsList } from '@/widgets/Sidebar/model/items';
import { SidebarItem } from './SidebarItem/SidebarItem';
import { memo, useState } from 'react';
import {AppLogo} from "@/shared/ui/AppLogo";
import {ThemeSwitcher} from "@/shared/ui/ThemeSwitcher";
import Ava from "@/shared/assets/image/ava.png";
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
            <img
                className={cls.appLogo}
                width={collapsed ? 30 : 50}
                height={collapsed ? 30 : 50}
                src={Ava}
                alt='avatar'
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