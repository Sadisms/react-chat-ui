import React from 'react';
import './index.css';

const Loading = ({ size = 50, color = '#3498db' }) => {
  const loaderStyle = {
    width: size,
    height: size,
    border: `4px solid ${color}`,
    borderTop: `4px solid transparent`,
  };

  return (
    <div className="loader-wrapper">
      <div className="loader" style={loaderStyle}></div>
    </div>
  );
};

export default Loading;
