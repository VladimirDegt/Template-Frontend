import { classNames } from "@/shared/lib/classNames/classNames";
import cls from './DeliveryReport.module.scss';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import type { DeliveryReportProps } from './types';
import { memo } from 'react';

export const DeliveryReport = memo(({ className, deliveryReport }: DeliveryReportProps) => {

    if(deliveryReport.length === 0) {
        return
    }

    return (
        <div className={classNames(cls.DeliveryReport, {}, [className])}>
            <Text title={'Звіт про доставлення пошти'}/>
            <table className={cls.containerTable}>
                <tbody>
                    <tr>
                        <th><Text title={'Замовник'}/></th>
                        <th><Text title={'Email'}/></th>
                        <th><Text title={'Статус доставки'}/></th>
                    </tr>
                    {deliveryReport.map(({value, reason, status }, index)=>{
                        return (
                            <tr key={index}>
                                {value && (
                                    <>
                                        <td><Text textInverted={value['Замовник']}/></td>
                                        <td><Text textInverted={value['Email замовника']}/></td>
                                    </>
                                )}
                                {status === 'fulfilled'
                                    ? <td><Text textInverted={'доставлено'}/></td>
                                    : <td><Text textInverted={'не доставлено'} theme={TextTheme.ERROR}/></td>
                                }

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
        ;
})

