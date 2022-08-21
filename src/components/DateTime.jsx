import React, {useState} from 'react';
import DateTimePicker from 'react-datetime-picker';

function DateTime() {
    const [value, setValue]=useState(new Date());
    // const [open,setOpen]=useState(false);
  return (
    <>
    <div>
        <DateTimePicker
         onChange={setValue} 
         value={value}
         
            isCalendarOpen={true}
            isClockOpen={false}
        
         />
    </div>
    </>
  )
}

export default DateTime