import React, {memo, useRef} from 'react';
import cls from './UploadFile.module.scss';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Button, ButtonTheme} from "@/shared/ui/Button/Button";
import {validateExtentionFile, validateSizeFile} from '@/shared/lib/validateUploadFile';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
interface UploadFileProps {
    className?: string;
    label?: string;
    disabled?: boolean;
    getNewAvatar: (file: File) => void
}

const toastId = "custom-id-yes";
const extentionsFile = ['jpg','jpeg', 'png', 'webp'];
export const UploadFile = memo((props: UploadFileProps) => {
    const {
        label,
        disabled ,
        getNewAvatar
    } = props;

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleButtonClick = () => {
        if(fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return
        }
        const files = e.target.files
        if (!validateExtentionFile(files, extentionsFile)) {
            toast.error('Не вірний формат файлу', {autoClose: 2000, toastId})
            return
        }
        if(!validateSizeFile(files[0].size)) {
            toast.error('Розмір файлу повинен бути не більше 5Mb', {autoClose: 2000, toastId})
            return
        }

        getNewAvatar(files[0])
    };

    return (
        <>
            <ToastContainer autoClose={1500}/>
            <div className={classNames(cls.UploadFile, {}, [])}>
                {label && <span>{`${label}`}</span>}
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={handleButtonClick}
                    className={cls.btn}
                >
                    Завантажити файл
                </Button>
                <input
                    disabled={disabled}
                    type="file"
                    ref={fileInputRef}
                    className={cls.fileInput}
                    onChange={handleFileChange}
                />
            </div>
        </>
    );
});

