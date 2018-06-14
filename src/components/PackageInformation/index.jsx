import React from 'react';
import './style.css';

const TrackingCode = ({ parcel }) => {
  let height;
  let width;
  let depth;
  let firstName;
  let lastName;
  if (parcel.package) {
    if (parcel.package.packageData.dimensions) {
      height = parcel.package.packageData.dimensions.height;
      width = parcel.package.packageData.dimensions.width;
      depth = parcel.package.packageData.dimensions.depth;
    }
    if (parcel.package.packageData.customer) {
      firstName = parcel.package.packageData.customer.name.first;
      lastName = parcel.package.packageData.customer.name.last;
    }
  }
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
