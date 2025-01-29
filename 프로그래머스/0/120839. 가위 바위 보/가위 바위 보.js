function solution(rsp) {
    const rspArr = [...rsp];
    const resultArr = rspArr.map((arg) => {
        return arg === '2' ? '0' :
                    arg === '0' ? '5' : '2';
    })
    
    return resultArr.join('')
}