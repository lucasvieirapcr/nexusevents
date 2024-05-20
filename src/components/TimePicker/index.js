import React, { useState } from 'react';
import './TimePiker.css'

function TimePicker(props) {
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div>
      <label className="timeInput">{props.label}</label>
      <input 
        required ={props.obrigatorio}
        type="time"
        id="timeInput"
        name="timeInput"
        value={selectedTime}
        onChange={handleTimeChange}
      />
      {/* <p>Horário selecionado: {selectedTime}</p> */}
    </div>
  );
}

export default TimePicker;
