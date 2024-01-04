import {DragAndDrop} from "@/features/DragAndDrop";
import {DeliveryReport} from '@/shared/ui/DeliveryReport';
import {useCallback, useState} from 'react';

const AboutPage = () => {
    const [deliveryReport, setDeliveryReport] = useState([]);
    const addDeliveryReport = useCallback((report: []) => {
        setDeliveryReport(report);
    }, [setDeliveryReport]);

    return (
        <div>
            <DragAndDrop addDeliveryReport={addDeliveryReport}/>
            <DeliveryReport deliveryReport={deliveryReport}/>
        </div>
    )
};

export default AboutPage;
