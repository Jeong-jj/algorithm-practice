function solution(numbers) {
    const sortedArr = numbers.sort(function (a, b) {
        return b - a;
    });
    
    return sortedArr[0] * sortedArr[1];
}