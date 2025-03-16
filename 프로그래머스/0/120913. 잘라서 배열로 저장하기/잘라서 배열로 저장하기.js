function solution(my_str, n) {
    const strArr = [...my_str]
    const answer = [];
    
    while (strArr.length) {
        answer.push(strArr.splice(0, n).join(''));
    };
    
    return answer
}