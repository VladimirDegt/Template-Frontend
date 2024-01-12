import {memo, useCallback, useState} from 'react';
import { Currency } from '../model/types/currency';
import {ListBox} from "@/shared/ui/ListBox/ListBox";
interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChangeCurrency: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.UAH, content: Currency.UAH },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
    ({ className, readonly, onChangeCurrency }: CurrencySelectProps) => {
        const [valueChange, setValueChange] = useState('Виберіть валюту')

        const onChangeHandler = useCallback(
        //@ts-ignore
            (selectedValue) => {
                setValueChange(selectedValue.value)
                onChangeCurrency(selectedValue.value);
            },
            [setValueChange, onChangeCurrency]
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
