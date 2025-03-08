function solution(i, j, k) {
    let numbers = '';
    for (let l=i; l<=j; l++) {
        numbers += l
    };    

    return numbers.split(k+'').length-1;
}