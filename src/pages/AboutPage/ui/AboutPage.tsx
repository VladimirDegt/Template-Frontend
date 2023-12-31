import {DragAndDrop} from "features/DragAndDrop";
import { DeliveryReport } from 'shared/ui/DeliveryReport';
import { useState } from 'react';
import { Axios } from 'axios';

const AboutPage = () => {
    const [deliveryReport, setDeliveryReport] = useState([]);
    const addDeliveryReport = (report: []) => {
        setDeliveryReport(report)
    }
  return (
      <div>
          <DragAndDrop addDeliveryReport={addDeliveryReport}/>
          <DeliveryReport deliveryReport={deliveryReport}/>
      </div>
  )
};

export default AboutPage;
