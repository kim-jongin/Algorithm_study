//Lv1_짝수와 홀수 
function solution(num) {
    return (num % 2 === 0 ? "Even":"Odd");
}

//Lv1_평균 구하기
function solution(arr) {
    let answer = 0;
    let add = 0;
    
    for (let i = 0; i < arr.length; i++) {
        add += arr[i]; //배열 요소의 합을 구함
    }
    answer = add / arr.length;
    return answer;
}