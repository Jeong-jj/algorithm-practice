function solution(n) {
    let result = 0;

    for (let i=4; i<=n; i++) {
        for (let j=2; j<=i/2; j++) {
            let check = 0;
            if (i%j===0) check++
            if (check) {
                result++
                break
            }
        };
    };
    
    return result
}