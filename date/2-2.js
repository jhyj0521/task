const getLastDateOfMonth = (year, month) => {
  const date = new Date(year, month + 1);
  date.setTime(date - 86400000);
  return date.getDate();
};

console.log(getLastDateOfMonth(2021, 0));
console.log(getLastDateOfMonth(2021, 1));
