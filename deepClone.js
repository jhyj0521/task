function deepClone(value) {
  // 값이 null이거나 값의 타입이 object가 아니거나 (이 두 조건을 합치면 원시값) 함수인 경우 값을 그대로 반환
  if (
    value === null ||
    typeof value !== 'object' ||
    Object.getPrototypeOf(value) === Function.prototype
  ) {
    return value;
  }

  // 위 코드에서 반환되지 않았다면 함수가 아닌 객체이다. 반환해야할 원본이 배열이라면 빈 배열로, 그 외에는 빈 객체로 복제본을 초기화
  const clone = Object.getPrototypeOf(value) === Array.prototype ? [] : {};

  // 원본의 키 배열을 순회하면서 deepClone을 재귀호출하여 반환된 값을 복제본에 저장
  Object.keys(value).forEach(v => {
    clone[v] = deepClone(value[v]);
  });

  // 복제본 반환
  return clone;
}

export default deepClone;
