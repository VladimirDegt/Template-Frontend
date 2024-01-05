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
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <Icon
                Svg={item.Icon}
                inverted
                width={20}
                height={20}
            />
            <span className={cls.link}>
                {item.text}
            </span>
        </AppLink>
    );
})