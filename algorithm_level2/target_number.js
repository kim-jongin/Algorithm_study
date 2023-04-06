/*
-Programmers 
-Level_2
-Target Number
link: https://school.programmers.co.kr/learn/courses/30/lessons/43165
*/

const solution = (nubers, target) => {
  const length = numbers.length;
  let count = 0;

  const dfs = (currentNumber, index) => {
    //정수 모두 확인
    if (index === length) {
      //타겟 넘버가 만들어졌다면 count 1증가
      if (target === currentNumber) {
        count++;
      }
      return;
    }
    //정수를 더할 경우
    dfs(currentNumber + numbers[index], index + 1);
    //정수를 뺄 경우
    dfs(currentNumber - numbers[index], index + 1);
  };
  dfs(0, 0);

  return count;
};

/*
문제풀이 

재귀를 사용하여 문제풀이 진행
정수를 하나하나 확인하며 현재까지의 정수에 더하거나 뺀 값과, 현재 index의 매개변수 값을 함께 다음 매개변수에 넘겨준다. 
Target Number가 만들어졌을 경우, 경우의 수를 +1 해준다.
*/
