import React from "react";
import { format } from "date-fns";


const isValidDate = (dateString) => {
  const dates = new Date(dateString);
  return !isNaN(dates.getTime());
};
const isValidDate2 = (dateString) => {
  // Replace colon in milliseconds with period
  const formattedDateString = dateString.replace(/:(\d{3})Z$/, ".$1Z");

  const date = new Date(formattedDateString);
  return !isNaN(date.getTime());
};

console.log(isValidDate("2024-01-12T08:10:21:987Z")); // Output: true

const DateConvert = (date, type) => {
  if (isValidDate(date)) {
    let formatDate = format(
      new Date(date),
      type ? type : "EEE, d MMM, yyyy. h:mm a"
    );
    return formatDate;
  } else if (isValidDate2(date)) {
    let formattedDateStrings = date.replace(/:(\d{3})Z$/, ".$1Z");

    let formatDate = format(
      new Date(formattedDateStrings),
      type ? type : "EEE, d MMM, yyyy. h:mm a"
    );
    return formatDate;
  } else {
    return date;
  }
};

export default DateConvert;
