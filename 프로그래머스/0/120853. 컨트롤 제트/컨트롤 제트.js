function solution(s) {
    const strArr = s.split(' ');
    
    return strArr.map((l,i) => {
        if (strArr[i] === 'Z' || strArr[i+1] === 'Z') return 0;
        else return +l;
    }).reduce((arr, cur) => arr+=cur);
}