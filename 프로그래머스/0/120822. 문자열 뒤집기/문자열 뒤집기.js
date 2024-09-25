function solution(my_string) {
    const reverseArr = my_string.split('').reverse();
    let reverseString = ''
    
    reverseArr.forEach((l) => reverseString += l)
    
    return reverseString
}