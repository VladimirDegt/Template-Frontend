import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { TextPage } from "@/pages/TextPage";
import { RouteProps } from "react-router-dom";

export enum AppRouters{
    MAIN = 'main',
    ABOUT = 'about',
    TEXT = 'text',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found'
};

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ABOUT]: '/about',
    [AppRouters.TEXT]: '/text',
    [AppRouters.PROFILE]: '/profile',
    [AppRouters.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRouters, RouteProps> = {
    [AppRouters.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRouters.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRouters.TEXT]: {
        path: RoutePath.text,
        element: <TextPage/>
    },
    [AppRouters.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage/>
    },
        [AppRouters.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    },
}