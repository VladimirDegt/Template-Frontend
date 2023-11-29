import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import AppRouter from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss";

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar/>
                <AppRouter />
            </div>        
        </div>
    );
};
