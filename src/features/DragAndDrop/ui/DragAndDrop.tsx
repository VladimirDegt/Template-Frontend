import { classNames } from 'shared/lib/classNames/classNames';
import cls from './DragAndDrop.module.scss';
import React, { memo, useState } from 'react';
import {validateDropFile} from "shared/lib/validateDropFile/validateDropFile";

interface DragAndDropProps {
    className?: string;
}
export const DragAndDrop = memo(({ className }: DragAndDropProps) => {
    const [drag, setDrag] = useState(false);
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
            return
        }

        const formData: FormData = new FormData();
        formData.append('emailTable', files[0])
    }

    return (
        <div className={classNames(cls.app, { }, [className])}>
            {drag
                ? <div
                        className={classNames(cls['drop-area'])}
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                        onDrop={e => onDropHandler(e)}
                >Відпустити файл для завантаження
                </div>
                : <div
                        className={classNames(cls['drop-area'])}
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                >Перетягнити файл щоб завантажити
                </div>
            }
        </div>
    );
})