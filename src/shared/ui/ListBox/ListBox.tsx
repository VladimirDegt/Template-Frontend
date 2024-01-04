import {Fragment, useState} from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from './ListBox.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames";
import {Button, ButtonSize, ButtonTheme} from "@/shared/ui/Button/Button";

const people = [
    { id: 1, name: 'Без даних' },
    { id: 2, name: 'З даними' },
]

export function ListBox() {
    const [selectedPerson, setSelectedPerson] = useState(people[0])

    return (
        <HListBox
            as={'div'}
            className={cls.ListBox}
            value={selectedPerson}
            onChange={setSelectedPerson}
        >
            <HListBox.Button
                as={'div'}
                className={cls.btnSend}
            >
                <Button
                    theme={ButtonTheme.OUTLINE}
                    size={ButtonSize.L}
                    className={cls.btnSend}
                >
                    {selectedPerson.name}
                </Button>

            </HListBox.Button>
            <HListBox.Options className={cls.options}>
                {people.map((person) => (
                    <HListBox.Option
                        key={person.id}
                        value={person}
                        as={Fragment}
                    >
                        {({ active, selected }) => (
                            <li className={classNames(cls.item,{[cls.active]: active}, [])}>
                                {person.name}
                            </li>
                        )}
                    </HListBox.Option>
                ))}
            </HListBox.Options>
        </HListBox>
    )
}