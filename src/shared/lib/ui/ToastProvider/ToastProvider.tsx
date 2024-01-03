import {createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
type ToastType = typeof import('react-toastify');

interface ToastContextPayload {
    Toast?: ToastType;
    isLoaded?: boolean;
};

const ToastContext = createContext<ToastContextPayload>({});

// функція для асінх завантаження модуля
const getAsyncToastModules = async () => {
    return Promise.all([
        import('react-toastify'),
        // @ts-ignore
        import ('react-toastify/dist/ReactToastify.css')
    ])


}

export const useToastLib = () => {
    return useContext(ToastContext) as Required<ToastContextPayload>
}
export const ToastProvider = ({children}: {children: ReactNode}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const ToastRef = useRef<ToastType>();

    useEffect(() => {
        getAsyncToastModules().then(([resolve], ) => {
            ToastRef.current = resolve;
            setIsLoaded(true)
        })
    }, [])

    const value = useMemo(() => ({
        Toast: ToastRef.current,
        isLoaded
    }), [isLoaded])

    return (
        <ToastContext.Provider
            value={value}
        >
            {children}
        </ToastContext.Provider>
    )
}