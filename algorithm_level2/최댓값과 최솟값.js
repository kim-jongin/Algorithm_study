// -Programmers
// -Level_2
// -최댓값과 최솟값

function solution(s) {
  const wordArr = s.split(' ');

  const numberArr = wordArr.map((word) => Number(word));

  return `${Math.min(...numberArr)} ${Math.max}(...numberArr)`;
}
