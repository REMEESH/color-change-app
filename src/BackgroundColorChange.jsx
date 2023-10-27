import React, { useState } from 'react';

function BackgroundColorChange() {
  const [bgColor, setBgColor] = useState('#FFFFFF'); // Initialize with a default color

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button className='btn btn-success shadow rounded' onClick={changeColor}>Change Background Color</button>
    </div>
  );
}

export default BackgroundColorChange;