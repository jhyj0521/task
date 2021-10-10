const isEqualDate = (date1, date2) => {
  const d1 = [date1.getFullYear(), date1.getMonth(), date1.getDate()];
  const d2 = [date2.getFullYear(), date2.getMonth(), date2.getDate()];

  return d1.every((_, i) => d1[i] === d2[i]);
};

console.log(isEqualDate(new Date('2021/07/24'), new Date('2021/07/24')));
console.log(isEqualDate(new Date('2021/07/24'), new Date('2022/07/2')));
