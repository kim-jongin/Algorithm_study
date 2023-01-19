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

//Lv0_분수의 덧셈
function solution(denum1, num1, denum2, num2) {
    let topNum = num1*denum2 + num2*denum1
    let botNum = num1*num2
    let maximum = 1
    for(let i = 1 ; i <= topNum ; i ++) {
        if(topNum%i === 0 && botNum%i === 0) {
            maximum = i
        }
    }
    return [topNum/maximum, botNum/maximum]
}

//Lv0_배열 두배 만들기
function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length; i++) {
        answer.push(numbers[i] * 2);
    }
    return answer;
}