import React from 'react';
import './style.css';

const TrackingCode = ({ parcel }) => {
  const { height } = parcel.package.packageData.dimensions;
  const { width } = parcel.package.packageData.dimensions;
  const { depth } = parcel.package.packageData.dimensions;
  const firstName = parcel.package.packageData.customer.name.first;
  const lastName = parcel.package.packageData.customer.name.last;
  return (
    <div className="package-information">
      <h3>
        {`${firstName} ${lastName}`}
        <br />
        4 kg<br />
        {`${height} x ${width} x ${depth}`} cm<br />
      </h3>
    </div>
  );
};

export default TrackingCode;
