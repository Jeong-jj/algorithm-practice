function solution(emergency) {
    const sortedArr = [...emergency].sort((a,b)=>b-a)

    const result = emergency.map((e)=>sortedArr.indexOf(e)+1)
    return result;
}