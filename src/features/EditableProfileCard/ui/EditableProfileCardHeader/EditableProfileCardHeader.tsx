import {memo, useCallback} from "react";
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './EditableProfileCardHeader.module.scss';
import {Button, ButtonTheme} from "@/shared/ui/Button/Button";
import {useAppDispatch} from "@/shared/lib/hook/useAppDispatch/useAppDispatch";

interface EditableProfileCardHeaderProps {
    className?: string;
    onChangeDisabledInput: () => void
}
export const EditableProfileCardHeader = memo(({className, onChangeDisabledInput}: EditableProfileCardHeaderProps) => {
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        onChangeDisabledInput()
        // dispatch(profileActions.setReadonly(false));
    }, [onChangeDisabledInput, dispatch]);

    const onCancelEdit = useCallback(() => {
        // dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        // dispatch(updateProfileData());
    }, [dispatch]);

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