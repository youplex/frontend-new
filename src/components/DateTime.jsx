import React from "react";
import DateTimePicker from "react-datetime-picker";

function DateTime({ dateTime, setDateTime }) {
  return (
    <>
      <div className="bg-white rounded text-base outline-none text-gray-700 py-2  mt-2 leading-8 transition-colors duration-200 ease-in-out">
        <DateTimePicker
          onChange={setDateTime}
          value={dateTime}
          isCalendarOpen={false}
          isClockOpen={false}
          minDate={new Date()}
        />
      </div>
    </>
  );
}

export default DateTime;
