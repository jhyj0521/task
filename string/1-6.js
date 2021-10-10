const toggleCase = s => {
  const regExp = /[A-Z]/;
  let answer = '';

  for (const spell of s) {
    answer += regExp.test(spell) ? spell.toLowerCase() : spell.toUpperCase();
  }

  return answer;
};

console.log(toggleCase('StuDY'));
