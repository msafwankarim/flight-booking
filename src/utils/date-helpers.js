const getTime = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;

  return strTime;
};

const getMonthAndDay = (date) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  return `${date.getDate()}-${month}`;
};

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function convertMsToHM(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = seconds >= 30 ? minutes + 1 : minutes;

  minutes = minutes % 60;

  hours = hours % 24;

  return `${padTo2Digits(hours)}H : ${padTo2Digits(minutes)}M`;
}

const getTimeDifference = (date1, date2) => {
  let timeDifference = date1 - date2;

  return convertMsToHM(timeDifference);
};

export { getTime, getMonthAndDay, getTimeDifference };
