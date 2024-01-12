import React, {memo, useRef} from 'react';
import cls from './UploadFile.module.scss';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Button, ButtonTheme} from "@/shared/ui/Button/Button";
interface UploadFileProps {
    className?: string;
    label?: string;
    disabled?: boolean;
    getNewAvatar: (file: File) => void
}

export const UploadFile = memo((props: UploadFileProps) => {
    const {
        className,
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
        const file = e.target.files[0]
        getNewAvatar(file)
    };

    return (
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
    );
});

