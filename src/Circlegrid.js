// Circlegrid.js
import React from 'react';
import './Styles/CircleGrid.css';

const Circlegrid = ({nutrients}) => {
  // Dummy data for circle text
  const circlesData = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  nutrients = (nutrients === null) ? circlesData : nutrients;

  return (
    <div className="grid grid-cols-3 gap-4" style={{marginTop:'15%', marginLeft:'-55%'}}>
      {nutrients.map((text, index) => (
        <div
          key={index}
          className="flex items-center justify-center bg-blue-500 text-white bubble-animation"
          style={{borderRadius:'50%', width:'100px', height:'50%'}}
          >
            <p style={{padding:'5px'}}>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default Circlegrid;
