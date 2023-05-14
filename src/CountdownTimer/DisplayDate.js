import React from 'react';

const DisplayDate = ({ value, type, isDanger=false }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DisplayDate;