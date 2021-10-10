const count = (s, ch) => s.match(new RegExp(ch, 'g')).length;

console.log(count('COMPUTERPROGRAMMING', 'R'));
