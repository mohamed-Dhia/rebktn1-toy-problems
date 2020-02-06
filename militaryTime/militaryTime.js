/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

function toMilitary(time) {
  time = time.split(":");
  if (time[1][2] === "p" && time[0].slice(0, 2) !== "12") {
    time[0] = Number(time[0]) + 12;
  } else if (time[1][2] === "a") {
    if (time[0] === "12") {
      time[0] = "00";
    } else if (time[0].length < 2) {
      time[0] = "0" + time[0];
    }
  }
  time[1] = time[1].slice(0, 2);
  return time.join(":");
}
