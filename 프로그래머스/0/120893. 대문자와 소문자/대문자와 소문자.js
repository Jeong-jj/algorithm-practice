function solution(my_string) {
    const isLowerCase = /^[a-z]+$/;
    const strArr = [...my_string];
    
    const result = strArr.map((s) => {
        return isLowerCase.test(s) ? s.toUpperCase() : s.toLowerCase();
    })
    
    return result.join('')
}