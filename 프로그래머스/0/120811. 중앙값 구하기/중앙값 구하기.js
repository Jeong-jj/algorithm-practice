function solution(array) {
    const sortedArr = array.sort((a, b) => a - b);
    const middle = sortedArr[Math.ceil(sortedArr.length/2) - 1]
    
    return middle;
}