import React from 'react';
import './index.css';

const Loading = ({themeColor = '#3498db' }) => {
  const loaderStyle = {
    width: 50,
    height: 50,
    border: `4px solid ${themeColor}`,
    borderTop: `4px solid transparent`,
  };

  return (
    <div className="loader-wrapper">
      <div className="loader" style={loaderStyle}></div>
    </div>
  );
};

export default Loading;
