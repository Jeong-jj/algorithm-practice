function solution(my_string, n) {
    const letterArr = my_string.split('');
    const tripleLetter = letterArr.map((l) => l.repeat(n)).join('');
    
    return tripleLetter;
}