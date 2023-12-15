import React from "react";
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
};

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Головна'
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'Про сайт'
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профіль'
    },
]