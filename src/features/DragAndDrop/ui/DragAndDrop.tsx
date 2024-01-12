import React, {memo, useState} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './DragAndDrop.module.scss';
import {validateExtentionFile, validateSizeFile} from '@/shared/lib/validateUploadFile';
import {Text, TextTheme} from "@/shared/ui/Text/Text";
import {Button, ButtonSize, ButtonTheme} from "@/shared/ui/Button/Button";
import {$api} from "@/shared/api/api";
import {Loader} from "@/shared/ui/Loader/ui/Loader";
import {ToastProvider, useToastLib} from "@/shared/lib/ui/ToastProvider";


interface DragAndDropProps {
    className?: string;
    addDeliveryReport: (data: []) => void;
}
const LOCAL_TEXT_EDITOR = 'editor';
const toastId = "custom-id-yes";
const extentionsFile = ['csv'];
export const DragAndDropContent = memo(({className, addDeliveryReport}: DragAndDropProps) => {
    const {Toast} = useToastLib();
    const [drag, setDrag] = useState(false);
    const [nameFile, setNameFile] = useState('');
    const [file, setFile] = useState<null | Blob>(null);
    const [isLoading, setIsLoading] = useState(false)

    function dragStartHandler(e: React.DragEvent): void {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e: React.DragEvent): void {
        e.preventDefault()
        setDrag(false)
    }

    function onDropHandler(e: React.DragEvent): void {
        e.preventDefault()
        const files: File[] = [...e.dataTransfer.files]
        setDrag(false);

        if (!validateExtentionFile(files, extentionsFile)) {
            Toast.toast.error('Не вірний формат файлу обо більше одного', {autoClose: 2000, toastId})
            setNameFile('Файл не обрано')
            return
        }
        setNameFile(`${files[0].name}`)
        setFile(files[0])
    }

    function onClickBtnClear() {
        setDrag(false)
        setNameFile('Файл не обрано')
        Toast.toast.info("Очищено", {toastId})
    }

    function onUploadFile(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        if(!e.target.files) {
            return;
        }
        const files: FileList  = e.target.files
        setDrag(false);

        if (!validateExtentionFile(files, extentionsFile)) {
            Toast.toast.error('Не вірний формат файлу', {autoClose: 2000, toastId})
            setNameFile('Файл не обрано')
            return
        }

        if(!validateSizeFile(files[0].size)) {
            Toast.toast.error('Розмір файлу повинен бути не більше 5Mb', {autoClose: 2000, toastId})
            return
        }

        setNameFile(`${files[0].name}`)
        setFile(files[0])
    }

    async function onClickBtnSend(e: React.MouseEvent<HTMLButtonElement>): Promise<void> {
        e.preventDefault();

        if(!localStorage.getItem(LOCAL_TEXT_EDITOR)) {
            Toast.toast.error('Потрібно сберегти повідомлення для пошти', {toastId})
        }

        if (file !== null) {
            const formData: FormData = new FormData();
            formData.append('emailTable', file);
            formData.append('content', JSON.stringify(localStorage.getItem(LOCAL_TEXT_EDITOR)))

            try {
                setIsLoading(true)
                const response = await $api.post('customers/sendFile', formData)
                if (!response.data) {
                    Toast.toast.error('Помилка відправки файла', {toastId})
                    return
                }
                addDeliveryReport(response.data)
            } catch (e) {
                Toast.toast.error('Помилка відправки файла', {toastId})
            } finally {
                setIsLoading(false)
            }

            setFile(null);
            setDrag(false);
            setNameFile('');
            return
        }
        Toast.toast.info('Потрібно вибрати файл', {toastId})
        return
    }

    return (
        <div className={classNames(cls.app, {}, [className])}>
            <Toast.ToastContainer autoClose={1500}/>
            {isLoading
                ? <div className={cls.containerLoader}><Loader /></div>
                : (
                    <label htmlFor="file" className={classNames(cls['container-label'])}>
                        {drag
                            ?
                                <div
                                    className={classNames(cls['drop-area'])}
                                    onDragStart={e => dragStartHandler(e)}
                                    onDragLeave={e => dragLeaveHandler(e)}
                                    onDragOver={e => dragStartHandler(e)}
                                    onDrop={e => onDropHandler(e)}
                                >
                                    <Text title='Відпустити файл для завантаження'/>
                                </div>
                            :
                                <div
                                    className={classNames(cls['drop-area'])}
                                    onDragStart={e => dragStartHandler(e)}
                                    onDragLeave={e => dragLeaveHandler(e)}
                                    onDragOver={e => dragStartHandler(e)}
                                >
                                    <Text title='Натисніть або перетягніть файл для завантаження'/>
                                    <Text title='(.csv)'/>
                                </div>
                        }

                    </label>
                )
            }
            <div className={cls.containerBtn}>
                <Button
                    theme={ButtonTheme.OUTLINE}
                    size={ButtonSize.L}
                    type="submit"
                    className={cls.btnSend}
                    onClick={onClickBtnSend}
                >
                    <Text title={'Відправити'}/>
                </Button>
                {nameFile
                    ? <Text title={nameFile}/>
                    : <Text title={'Файл не обрано'}/>
                }
                <Button
                    theme={ButtonTheme.OUTLINE}
                    size={ButtonSize.L}
                    className={cls.btnSend}
                    onClick={onClickBtnClear}
                >
                    <Text title={'Очистити'} theme={TextTheme.ERROR}/>
                </Button>
            </div>
            <input
                type="file"
                multiple
                id="file"
                className={cls.fileInput}
                onChange={onUploadFile}
            />
        </div>
    );
})

const DragAndDropAsync = (props:DragAndDropProps) => {
    const {isLoaded} = useToastLib();

    if(!isLoaded) {
        return <Loader/>
    }

    return <DragAndDropContent {...props}/>
}

export const DragAndDrop =(props:DragAndDropProps) => {
    return (
        <ToastProvider>
            <DragAndDropAsync {...props}/>
        </ToastProvider>
    )
}