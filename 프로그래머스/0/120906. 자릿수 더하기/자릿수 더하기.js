function solution(n) {
    const numToStr = `${n}`;
    const strArr = numToStr.split('');
    
    let answer = 0;
    strArr.forEach((s) => {
        answer += Number(s)
    });
    return answer;
}