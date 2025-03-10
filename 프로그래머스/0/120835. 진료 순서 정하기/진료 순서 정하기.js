function solution(emergency) {
    const sortedArr = [...emergency].sort((a,b)=>b-a)
    const nestedArr = sortedArr.map((e,i)=>[e,i+1]);

    const result = emergency.map((e)=>{
        for (a of nestedArr) {
            if (e===a[0]) return a[1];
        }
    })
    return result;
}