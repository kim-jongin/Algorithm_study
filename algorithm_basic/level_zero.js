//Lv0_두 수의 나눗셈
const solution = (num1, num2) => {
  let answer = (num1 / num2) * 1000;
  if ((num1 || num2 > 0) && (num1 || num2 <= 100)) return parseInt(answer);
};

//Lv0_숫자 비교하기
const solution = (num1, num2) => {
  let answer;
  if ((num1 || num2 >= 0) && (num1 || num2 <= 10000)) {
    answer = num1 === num2 ? 1 : -1;
  }
  return answer;
};

//Lv0_
