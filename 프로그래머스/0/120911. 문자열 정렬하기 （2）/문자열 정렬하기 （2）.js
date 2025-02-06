function solution(my_string) {
    const lowerStrArr = [...my_string.toLowerCase()]
    return lowerStrArr.sort().join('');
}