function solution(new_id) {
  let answer = '';

  answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_\.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .substring(0, 15)
    .replace(/\.$/, '');
  answer = answer || 'a';

  const ch = answer[answer.length - 1];
  while (answer.length <= 2) {
    answer += ch;
  }

  return answer;
}

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
