import {Suspense, useEffect} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";
import {Navbar} from "@/widgets/Navbar";
import {Sidebar} from "@/widgets/Sidebar";
import AppRouter from "./providers/router";
import {useTheme} from "./providers/ThemeProvider";
import {LOCAL_STORAGE_THEME_KEY} from "@/app/providers/ThemeProvider/lib/ThemeContext";
import {useDispatch} from "react-redux";
import {userActions} from "@/entities/User";
import {MainLayout} from "@/shared/layouts/MainLayout";
import {Toolbar} from "@/widgets/Toolbar";

document.body.className = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || 'app_light_theme';

export const App = () => {
    const {theme} = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch])

    return (
        <div id="app" className={classNames("app_redesigned", {}, [theme])}>
            <Suspense fallback="">
                <MainLayout
                    header={<Navbar/>}
                    content={<AppRouter/>}
                    sidebar={<Sidebar/>}
                    toolbar={<Toolbar />}
                />
            </Suspense>
        </div>
    );
};
