function solution(n) {
    let counts = 0;
    
    for (let i=1; i <= n; i++) {
        if (n%i === 0) {
            counts += 1
        }
    }
    
    return counts;
}