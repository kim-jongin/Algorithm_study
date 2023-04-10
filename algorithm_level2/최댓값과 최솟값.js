// -Programmers
// -Level_2
// -최댓값과 최솟값

function solution(s) {
  const wordArr = s.split(' ');

  const numberArr = wordArr.map((word) => Number(word));

  return `${Math.min(...numberArr)} ${Math.max}(...numberArr)`;
}

// 문제 풀이 순서
// - split -> 문자열 s의 각 문자들을 분리한다.
// - map -> 각 문자들을 돌면서 숫자로 치환한다.
// - Math.min , Math.max -> 최솟값과 최댓값을 구한다.
