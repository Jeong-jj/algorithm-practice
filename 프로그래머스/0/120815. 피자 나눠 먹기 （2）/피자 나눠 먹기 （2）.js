function solution(n) {
    const justNeedOne = [1, 2, 3, 6];
    if (justNeedOne.includes(n)) return 1;

    let count = 2;
    let isFinished = false;
    
    while (!isFinished) {
        if ((6*count)%n === 0) {
            isFinished = true;
            return count;
        } else {
            count ++;
        }
    };
}