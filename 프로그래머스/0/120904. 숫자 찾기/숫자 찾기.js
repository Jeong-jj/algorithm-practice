function solution(num, k) {
    const numToStr = `${num}`;
    const strArr = [...numToStr];
    
    let answer;
    let isFinished = false;
    strArr.forEach((str, index) => {
        if (isFinished) return;
        if (Number(str) == k) {
            answer = index+1
            isFinished = true
        } else {
            answer = -1
        };
    });
    
    return answer
}