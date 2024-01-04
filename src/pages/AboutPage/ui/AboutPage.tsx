import {DragAndDrop} from "@/features/DragAndDrop";
import {DeliveryReport} from '@/shared/ui/DeliveryReport';
import {useCallback, useState} from 'react';
import {ToastProvider} from "@/shared/lib/ui/ToastProvider";

const AboutPage = () => {
    const [deliveryReport, setDeliveryReport] = useState([]);
    const addDeliveryReport = useCallback((report: []) => {
        setDeliveryReport(report);
    }, [setDeliveryReport]);

    return (
        <div>
            <ToastProvider>
                <DragAndDrop addDeliveryReport={addDeliveryReport}/>
            </ToastProvider>
            <DeliveryReport deliveryReport={deliveryReport}/>
        </div>
    )
};

export default AboutPage;
