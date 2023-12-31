import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import cls from './SidebarItem.module.scss';
import React, { memo } from 'react';
import UploadFileIcon from 'shared/assets/icons/uploadFile.svg';
import { Icon } from 'shared/ui/Icon/Icon';

interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean;
}


export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            {/*<Icon Svg={item.Icon}/>*/}
            <item.Icon className={cls.icon}/>
            <span className={cls.link}>
                {item.text}
            </span>
        </AppLink>
    );
})