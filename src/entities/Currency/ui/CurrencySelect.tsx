import {memo, useCallback, useState} from 'react';
import { Currency } from '../model/types/currency';
import {ListBox} from "@/shared/ui/ListBox/ListBox";
interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.UAH, content: Currency.UAH },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
    ({ className, readonly }: CurrencySelectProps) => {
        const [valueChange, setValueChange] = useState('Виберіть валюту')

        const onChangeHandler = useCallback(
        //@ts-ignore
            (selectedValue) => {
                setValueChange(selectedValue.value)
            },
            [setValueChange]
        )

        return (
            <ListBox
                className={className}
                onChange={onChangeHandler}
                value={valueChange}
                items={options}
                readonly={readonly}
                label='Валюта'
                defaultValue='Виберіть валюту'
                direction="top"
            />
        );
    },
);
