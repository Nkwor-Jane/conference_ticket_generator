import {useEffect} from 'react';
import JsBarcode from 'jsbarcode';

const Barcode = ({serialNumber}) => {
    useEffect(() => {
        if (serialNumber) {
          JsBarcode("#barcode", serialNumber, {
            format: "CODE128",
            displayValue: true,
            lineColor: "#ffffff",
            background: "transparent",
            width: 2,
            height: 50,
          });
        }
      }, [serialNumber]);
    
      return <svg id="barcode"></svg>;
}

export default Barcode