function solution(my_string) {
    const strArr = [...my_string];
    const resultArr = strArr
                        .filter((s) => /^[0-9]+$/.test(s))
                        .map(Number)
                        .sort((a,b) => a-b);
    
    return resultArr;
}