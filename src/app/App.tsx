import { Suspense, useEffect, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import AppRouter from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss";

export const App = () => {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <button onClick={() => setIsOpen(true)}>toggle</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false) } />
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter />
                </div>
            </Suspense>    
        </div>
    );
};
