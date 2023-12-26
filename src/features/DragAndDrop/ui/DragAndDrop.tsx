import {classNames} from 'shared/lib/classNames/classNames';
import cls from './DragAndDrop.module.scss';
import React, {memo, useState} from 'react';
import {validateDropFile} from "shared/lib/validateDropFile/validateDropFile";
import UploadFileIcon from 'shared/assets/icons/uploadFile.svg'
import {Text, TextTheme} from "shared/ui/Text/Text";

interface DragAndDropProps {
    className?: string;
}
export const DragAndDrop = memo(({ className }: DragAndDropProps) => {
    const [drag, setDrag] = useState(false);
    const [nameFile, setNameFile] = useState('');
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
        const formData: FormData = new FormData();
        formData.append('emailTable', files[0])
    }

    return (
        <div className={classNames(cls.app, {}, [className])}>
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
            {nameFile
                ? <Text title={nameFile}/>
                : <Text title={'Файл не обрано'} />
            }

            <input
                type="file"
                id="file"
                className={cls.fileInput}
            />
        </div>
    );
})