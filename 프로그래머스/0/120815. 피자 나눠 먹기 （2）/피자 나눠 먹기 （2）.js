function solution(n) {
    let count = 1;
    
    while (true) {
        if ((6*count)%n === 0) {
            break;
        } else {
            count ++;
        };
    };
    
    return count;
}