const getLastDayOfMonth = (year, month) => {
  const date = new Date(year, month + 1);
  date.setTime(date - 86400000);
  return date.getDay();
};

console.log(getLastDayOfMonth(2021, 0)); // => 0
console.log(getLastDayOfMonth(2021, 11)); // => 5
