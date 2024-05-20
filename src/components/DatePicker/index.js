import React, { useState } from 'react';
import './DatePicker.css'; // Importe o arquivo CSS

function DatePicker(props) {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="date-picker-container">
      <label className="date-picker-label" htmlFor="dateInput">
        {props.label}
      </label>
      <input
        required={props.obrigatorio}
        type="date"
        id="dateInput"
        name="dateInput"
        value={selectedDate}
        onChange={handleDateChange}
      />
      {/* <p className="date-selected">Data selecionada: {selectedDate}</p> */}
    </div>
  );
}

export default DatePicker;
