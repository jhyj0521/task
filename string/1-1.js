const isPalindrome = s => {
  const answer = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return answer === answer.split('').reverse().join('');
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
