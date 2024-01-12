import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import {Button, ButtonSize, ButtonTheme} from '@/shared/ui/Button/Button';
import {SidebarItemsList} from '@/widgets/Sidebar/model/items';
import {SidebarItem} from './SidebarItem/SidebarItem';
import {memo, useState} from 'react';
import {AppLogo} from "@/shared/ui/AppLogo";
import {ThemeSwitcher} from "@/shared/ui/ThemeSwitcher";
import IconSidebarShow from "@/shared/assets/icons/sidebar_show.svg"
import IconSidebarHide from "@/shared/assets/icons/sidebar_hide.svg"
import {Icon} from "@/shared/ui/Icon/Icon";

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
                size = {collapsed ? 60 : 100}
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
                theme={ButtonTheme.BACKGROUND}
                circular
            >
                {collapsed ? <Icon Svg={IconSidebarShow} className={cls.icon} /> : <Icon Svg={IconSidebarHide} className={cls.icon}/>}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
            </div>
        </aside>
    );
})