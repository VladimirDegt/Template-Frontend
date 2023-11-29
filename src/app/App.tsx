import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import AppRouter from "./providers/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button type="button" onClick={toggleTheme}>
                Переключити тему
            </button>
        </div>
    );
};
