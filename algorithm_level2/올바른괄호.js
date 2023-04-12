// Programmers
// level_2
// 올바른 괄호
// 스택 & 큐

// 문제 풀이 방향성
// -스택 생각하여 풀기.
// 1. 스택처럼 사용할 변수 선언.
// 2. 문자열 s를 반복문을 돌려서 ‘(’ 문자일때 +1  ‘)’ 문자일때 -1
// 3. 반복문 종료 후, 스택이 0이면 true반환, 이 외의 경우라면 false반환.

function solution(s) {
  let stack_count = 0;
  for (let i = 0; i < s.length; i++) {
    stack_count += s[i] === '(' ? 1 : -1;
    // 문자열 s의 값이 ( 인 경우 1, 아닌경우 -1을 stack_count에 추가
    if (stack_count < 0) return false;
    // 만약 stack_count가 0보다 클 경우 false를 출력
  }
  return stack_count === 0 ? true : false;
  //stack_count가 0이면 true, 아닌 경우 false를 출력
}
