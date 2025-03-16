function solution(my_string) {
    const strArr = my_string.split(' ');

    return strArr.reduce((acc, cur, idx, src) => {
        if (!idx) return acc += Number(cur);
        else if (isNaN(Number(cur))) return cur === '+' ? acc += +src[idx+1] : acc -= +src[idx+1];
        else return acc;
    }, 0)
}