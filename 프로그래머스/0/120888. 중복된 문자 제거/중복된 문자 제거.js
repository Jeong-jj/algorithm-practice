function solution(my_string) {
    const strSet = new Set([...my_string]);
    const resultArr = [...strSet];
    
    return resultArr.join('');
}