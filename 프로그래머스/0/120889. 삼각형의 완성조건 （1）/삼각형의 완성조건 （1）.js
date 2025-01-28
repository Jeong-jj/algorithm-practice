function solution(sides) {
    const sortedArr = sides.sort((a, b) => a-b);
    
    if (sortedArr[0]+sortedArr[1]>sortedArr[2]) {
        return 1;
    } else {
        return 2;
    }
}