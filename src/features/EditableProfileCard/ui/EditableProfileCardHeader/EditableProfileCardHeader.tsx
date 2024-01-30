import {memo} from "react";
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './EditableProfileCardHeader.module.scss';
import {Button, ButtonTheme} from "@/shared/ui/Button/Button";
import {useAppDispatch} from "@/shared/lib/hook/useAppDispatch/useAppDispatch";

interface EditableProfileCardHeaderProps {
    className?: string;
    onChangeDisabledInput: () => void;
    saveUpdateProfile: () => void;
    cleanProfile: () => void;
}
export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
    const {
        className,
        onChangeDisabledInput,
        saveUpdateProfile,
        cleanProfile
    } = props;

    const onEdit = () => {
        onChangeDisabledInput()
    }

    const onCancelEdit =() => {
        cleanProfile()
    }

    const onSave = () => {
        saveUpdateProfile()
    }

    return (
        <div className={classNames(cls.EditableProfileCardHeader, {}, [className])}>
            <Button
                className={cls.btn}
                theme={ButtonTheme.OUTLINE}
                onClick={onEdit}
            >
                Редагувати
            </Button>
            <div className={classNames(cls.btnBlock, {}, [className])}>
                <Button
                    className={cls.btn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSave}
                >
                    Зберегти
                </Button>
                <Button
                    className={cls.btn}
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={onCancelEdit}
                >
                    Відмінити
                </Button>

            </div>
        </div>

    )
        ;
});