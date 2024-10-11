function solution(n, k) {
    const service = Math.floor(n/10);
    const coke = k - service;
    
    const bill = (n*12000) + (coke*2000)

    return bill;
}