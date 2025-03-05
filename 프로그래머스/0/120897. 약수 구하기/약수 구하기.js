function solution(n) {
    if (n === 1) return [1];
    
    const result = [1];
    let index = 2;
    
    while (index <= n/2) {
        if (n%index === 0) result.push(index);
        index++
    };
    result.push(n);
    
    return result
}