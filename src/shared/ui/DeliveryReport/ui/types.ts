 interface IValue {
    customer: string;
    email: string;
}

 interface IdeliveryReport {
    value?: IValue;
    reason?: IValue;
    status: string;
}

export interface DeliveryReportProps {
    className?: string;
    deliveryReport: IdeliveryReport[];
}
