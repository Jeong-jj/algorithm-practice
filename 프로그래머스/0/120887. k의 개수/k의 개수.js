function solution(i, j, k) {
    let count=0;
    for (let l=i; l<=j; l++) {
        count += String(l).split('').filter((a) => a==k).length;
    };
    return count;
}