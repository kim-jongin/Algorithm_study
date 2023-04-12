// Programmers
// Level_2
// JadenCase
// Method Chaining
function solution(s) {
  // 메서드 체이닝
  // toLowerCase() 문자열을 소문자로 변환
  // split(" ") 공백을 기준으로 배열로 변환
  // map() 배열을 하나씩 순회후 반환
  // charAt(0) 문자열의 0번째를 선택
  // toUpperCase() 문자열을 대문자로 변환
  // substring(1) 문자열 1번부터 끝까지
  // join(" ") 공백을 두고 배열을 문자열로 변환
  return s
    .toLowerCase()
    .split(' ')
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1))
    .join(' ');
}

console.log(solution('1 2 3 4')); // "1 4"
console.log(solution('-1 -2 -3 -4')); // "-4 -1"
console.log(solution('-1 -1')); // "-1 -1"
