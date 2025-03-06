function solution(order) {
    let count = 0;
    const check = ['3','6','9'];
    
    for (let n of order+'') {
        if (check.includes(n)) count++;
    };
    
    return count
}