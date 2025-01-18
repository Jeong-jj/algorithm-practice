function solution(str1, str2) {
    const testStr = str1.replace(str2, "")
    
    return str1 === testStr ? 2 : 1
}