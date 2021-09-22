// 값이 원시값인 경우 true 반환
function isPrimitive(value) {
  return value === null || typeof value !== 'object';
}

// 두 객체의 프로토타입이 같으면 true 반환
function isSamePrototypeOf(obj1, obj2) {
  return Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2);
}

function isEqual(value1, value2) {
  if (arguments.length < 2) {
    throw new Error(
      `isEqual requires at least 2 argument, but only ${arguments.length} were passed`
    );
  }

  let result = false;

  // value가 원시값인 경우
  if (isPrimitive(value1)) {
    result = Object.is(value1, value2);
  } else if (
    // 객체 중 일반 객체이거나 배열인 경우
    Object.getPrototypeOf(value1) === Object.prototype ||
    Object.getPrototypeOf(value1) === Array.prototype
  ) {
    const value1Keys = Object.keys(value1);
    const value2Keys = Object.keys(value2);

    // 한 값은 일반 객체이고 한 값은 배열인 경우 false 반환
    // 값1과 값2의 키 개수가 같으면서 isEqaul을 재귀호출하여 모두 true가 반환된다면 결과는 true 그렇지 않다면 false
    result =
      isSamePrototypeOf(value1, value2) &&
      value1Keys.length === value2Keys.length &&
      value1Keys.every(v => isEqual(value1[v], value2[v]));
  } else {
    // 그 외의 객체는 ===으로 비교
    result = value1 === value2;
  }

  return result;
}

export default isEqual;
