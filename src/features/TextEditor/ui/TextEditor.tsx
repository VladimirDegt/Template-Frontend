import { ToastContainer, toast } from 'react-toastify';
import { Editor } from '@tinymce/tinymce-react';
import 'react-toastify/dist/ReactToastify.css';
import React, { useRef} from 'react';
import {Button, ButtonSize, ButtonTheme} from "@/shared/ui/Button/Button";
import {Text} from "@/shared/ui/Text/Text";
import cls from './TextEditor.module.scss';

const LOCAL_TEXT_EDITOR = 'editor';
const toastId = "custom-id-yes";

export function TextEditor() {
    const editorRef:React.MutableRefObject<any> = useRef(null);
    const onClickBtnSend = () => {
        localStorage.setItem(LOCAL_TEXT_EDITOR, editorRef.current.getContent())
        toast.success("Повідомлення збережено", {toastId})
    };

    const handleSave = () => {
        if (editorRef.current) {
            const content = editorRef.current.getContent();
            console.log('Content to be saved:', content);
        }
    };

    return (
        <>
            <ToastContainer autoClose={1500}/>
            <Editor
                apiKey='22agoptz46ai8ajjlj36w47rvknf686ckk4c6towy52zls5e'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue=''
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount', 'emoticons', 'image',
                        'insertdatetime', 'save'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help | emoticons | image | insertdatetime | save',
                    save_onsavecallback: handleSave,
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
                    language: 'uk'
                }}
            />
            <div className={cls.containerBtn}>
                <Button
                    theme={ButtonTheme.OUTLINE}
                    size={ButtonSize.L}
                    type="submit"
                    className={cls.btnSend}
                    onClick={onClickBtnSend}
                >
                    <Text title={'Сберегти'}/>
                </Button>
            </div>
        </>
    );
}