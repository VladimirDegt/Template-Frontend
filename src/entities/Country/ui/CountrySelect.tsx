import {memo, useCallback, useState} from 'react';
import {ListBox} from "@/shared/ui/ListBox/ListBox";
import {Country} from "../model/country";
interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChangeCountry: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Poland, content: Country.Poland },
    { value: Country.Turkey, content: Country.Turkey },
];

export const CountrySelect = memo(
    ({ className, readonly, onChangeCountry }: CountrySelectProps) => {
        const [valueChange, setValueChange] = useState('Виберіть країну')

        const onChangeHandler = useCallback(
            //@ts-ignore
            (selectedValue) => {
                setValueChange(selectedValue.value)
                onChangeCountry(selectedValue.value)
            },
            [onChangeCountry, setValueChange]
        )

        return (
            <ListBox
                className={className}
                onChange={onChangeHandler}
                value={valueChange}
                items={options}
                readonly={readonly}
                label='Країна'
                defaultValue='Виберіть країну'
                direction="top"
            />
        );
    },
);
