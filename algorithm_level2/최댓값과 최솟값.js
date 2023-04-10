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

//궁금한점
// - JS의 Math.max와 Math.min은 문자열만 비교할 수 있다고 알고 있었는데, map함수로 변환 해주지 않고, 그대로 돌렸을때도 정렬이 되는것을 확인 할 수 있었음. 왜이런거지..?
// 아래코드로 테스트 통과

function solution(s) {
  const wordArr = s.split(' ');

  return `${Math.min(...wordArr)} ${Math.max(...wordArr)}`;
}
