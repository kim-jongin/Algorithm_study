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

//Lv0_나머지 구하기
const solution = (num1, num2) => num1%num2

//Lv0_중앙값 구하기
const solution = array => array.sort((a,b) => a-b)[array.length/2 <<0]

//Lv0_최빈값 구하기
function solution(array) {
    let map = new Map();

    for(let i = 0; i <= Math.max(...array); i++){
        map.set(i, 0);    
    }

    for(let i = 0; i < array.length; i++){
        map.set(array[i], map.get(array[i]) + 1);
    }
    let arr = Array.from(map.values());
    let max = Math.max(...arr);

    if(arr.indexOf(max) !== arr.lastIndexOf(max)){
        return -1;
    } else {
        return arr.indexOf(max);
    }
}