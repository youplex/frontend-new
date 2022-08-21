import React from 'react';
import DateTimePicker from 'react-datetime-picker';

function DateTime({ dateTime, setDateTime }) {
  return (
    <>
    <div>
        <DateTimePicker
          onChange={setDateTime} 
          value={dateTime}
          isCalendarOpen={true}
          isClockOpen={false}
          minDate={new Date()}
         />
    </div>
    </>
  )
}

export default DateTime