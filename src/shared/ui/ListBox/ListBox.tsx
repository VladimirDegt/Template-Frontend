import {Fragment, ReactNode} from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from './ListBox.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames";
import {Button, ButtonSize, ButtonTheme} from "@/shared/ui/Button/Button";

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom' ;
interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    label?: string;
    direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};
export function ListBox(props: ListBoxProps) {
    const {
        className,
        onChange,
        readonly,
        label,
        value,
        defaultValue,
        items,
        direction = 'bottom',
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];
    return (
        <div className={cls.container}>
            {label && <span>{`${label}`}</span>}
            <HListBox
                as={'div'}
                disabled={readonly}
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button
                    as={'div'}
                >
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        size={ButtonSize.L}
                        className={cls.btnSend}
                    >
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(cls.item,{
                                    [cls.active]: active,
                                    [cls.disabled]: item.disabled,
                                }, [])}>
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </div>
    )
}