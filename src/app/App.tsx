import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import AppRouter from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";
import { LOCAL_STORAGE_THEME_KEY } from "app/providers/ThemeProvider/lib/ThemeContext";

document.body.className = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || 'app_light_theme';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter />
                </div>
            </Suspense>    
        </div>
    );
};
