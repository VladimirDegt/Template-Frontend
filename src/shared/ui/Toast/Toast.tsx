import {ToastContainer} from "react-toastify";

interface ToastProps {
    position: string,
    autoClose: number,
    hideProgressBar: boolean,
    newestOnTop: boolean,
    closeOnClick: () => void,
    rtl: boolean,
    pauseOnFocusLoss: () => void,
    draggable: () => void,
    pauseOnHover: () => void,
    theme: string,
}

export const Toast = (_: ToastProps) => {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer/>
        </>
    )
}

