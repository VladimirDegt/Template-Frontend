import {classNames} from '@/shared/lib/classNames/classNames';
import {AppLink} from '@/shared/ui/AppLink';
import {SidebarItemType} from '@/widgets/Sidebar/model/items';
import cls from './SidebarItem.module.scss';
import {memo} from 'react';
import {Icon} from "@/shared/ui/Icon/Icon";

interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean;
}


export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {

    return (
        <AppLink
            variant='secondary'
            to={item.path}
            className={classNames(collapsed ?  cls.itemCollapsed : cls.item, { [cls.collapsed]: collapsed })}
            activeClassName={cls.active}
        >
            <div className={cls.icon}>
                <Icon
                    Svg={item.Icon}
                    width={32}
                    height={32}
                />
            </div>
            <span className={cls.link}>
                {item.text}
            </span>
        </AppLink>
    );
})