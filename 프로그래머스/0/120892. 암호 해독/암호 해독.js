function solution(cipher, code) {
    const strArr = [...cipher]
    
    return strArr.map((str, index) => {
        if ((index+1)%code === 0) {
            return str
        }
    }).join("")
}