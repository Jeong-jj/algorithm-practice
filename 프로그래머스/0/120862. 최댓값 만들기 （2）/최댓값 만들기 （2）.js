function solution(numbers) {
    const sortedArr = numbers.sort((a,b) => a-b);
    
    if (Math.sign(sortedArr[1]) === -1) {
        return sortedArr[0]*sortedArr[1] > sortedArr[sortedArr.length-2]*sortedArr[sortedArr.length-1] ?
                sortedArr[0]*sortedArr[1] : sortedArr[sortedArr.length-2]*sortedArr[sortedArr.length-1]
    } else {
        return sortedArr[sortedArr.length-2]*sortedArr[sortedArr.length-1]
    }
}