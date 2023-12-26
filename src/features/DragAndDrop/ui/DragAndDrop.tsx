import {classNames} from 'shared/lib/classNames/classNames';
import cls from './DragAndDrop.module.scss';
import React, {memo, useState} from 'react';
import {validateDropFile} from "shared/lib/validateDropFile/validateDropFile";
import UploadFileIcon from 'shared/assets/icons/uploadFile.svg'
import {Text, TextTheme} from "shared/ui/Text/Text";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {$api} from "shared/api/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface DragAndDropProps {
    className?: string;
}
export const DragAndDrop = memo(({ className }: DragAndDropProps) => {
    const [drag, setDrag] = useState(false);
    const [nameFile, setNameFile] = useState('');
    const [file, setFile] = useState<null | Blob>(null);
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

        if(!validateDropFile(files)) {
            setNameFile('Файл не обрано')
            return
        }

        setNameFile(`${files[0].name}`)
        setFile(files[0])
    }

    function onClickBtnClear() {
        setDrag(false)
        setNameFile('Файл не обрано')
        toast("Wow so easy!");
    }

    async function onClickBtnSend(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if(file !== null) {
            const formData: FormData = new FormData();
            formData.append('emailTable', file);

            try {
                const response = await $api.post('/drag/sendFile', formData)
                if (!response.data) {
                    console.error('помилка')
                }
            } catch (e) {
                console.error('помилка')
            }

            setFile(null);
            setDrag(false);
            setNameFile('');
            return
        }
        return
    }

    return (
        <div className={classNames(cls.app, {}, [className])}>
            <ToastContainer />
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
                            <UploadFileIcon/>
                            <Text title='Відпустити файл для завантаження'/>
                        </div>
                    :
                        <div
                            className={classNames(cls['drop-area'])}
                            onDragStart={e => dragStartHandler(e)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragOver={e => dragStartHandler(e)}
                        >
                            <UploadFileIcon/>
                            <Text title='Натисніть або перетягніть файл для завантаження'/>
                        </div>
                }

            </label>
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
                id="file"
                className={cls.fileInput}
            />
        </div>
    );
})