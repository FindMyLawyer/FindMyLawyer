import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeExample = () => {
  const [upiId] = useState('abhisheky01@ybl');
  const [amount] = useState(100); // example amount

  return (
    <div>
      <h2>Scan this QR Code to Pay</h2>
      <QRCode value={`upi://pay?pa=${upiId}&am=${amount}`} />
    </div>
  );
};

export default QRCodeExample;
