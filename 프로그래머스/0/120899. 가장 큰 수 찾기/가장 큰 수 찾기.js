function solution(array) {
    const sortedArr = [...array].sort((a,b) => a-b);
    const largeNum = sortedArr[sortedArr.length - 1];
    const index = array.indexOf(largeNum);
    
    return [largeNum, index]
}