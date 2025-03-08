function solution(n) {
    if (n===1) return 1;
    
    let fac=1;
    for (let i=2; i<=n; i++) {
        fac*=i;

        if (fac===n) return i
        if (fac>n) return i-1
        
    }
}