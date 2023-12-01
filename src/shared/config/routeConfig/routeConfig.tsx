import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { RouteProps } from "react-router-dom";

export enum AppRouters{
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
};

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ABOUT]: '/about',
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
        [AppRouters.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    },
}