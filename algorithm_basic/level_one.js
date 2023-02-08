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

//Lv1_자릿수 더하기
function solution(n)
{
    let answer = 0;
    n = n.toString();
    
    for(let i = 0; i < n.length; i++){
        answer += parseInt(n[i])
    }
    return answer;
}

//Lv1_자연수 뒤집어 배열로 만들기
function solution(n) {
    let result = [];
    let arr = String(n).split("").reverse().map((data) => Number(data))
    for(let i = 0; i < arr.length; i++) {
        result[i] = Number(arr[i])
    }
    return arr;
}

//Lv1_문자열 내 p와 y의 개수
function solution(s){
    let change = s.toLowerCase();
//    console.log(change);
    let check_p = change.split("p").length;
    let check_y = change.split("y").length;
    
    return check_p == check_y ? true : false;
}