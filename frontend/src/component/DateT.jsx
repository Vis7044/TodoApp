import React from "react";
const Year = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const DateT = () => {
  const current = new Date();
  const currDate = current.getDate();
  const currMonth = current.getMonth();
  const currYear = current.getFullYear();

  const dayOfWeekName = new Date().toLocaleString("default", {
    weekday: "long",
  });
  return (
    <div className="date">
      <div className="left-date">
        <div className="currdate">{currDate}</div>
        <div className="day">
          <span>{Year[currMonth]}</span>
          <span>{currYear}</span>
        </div>
      </div>
      <div className="weekday">{dayOfWeekName}</div>
    </div>
  );
};

export default DateT;
