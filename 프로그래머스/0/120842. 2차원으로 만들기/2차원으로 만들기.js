function solution(num_list, n) {
    const answer = [];
    
    for (let i=0; i<=num_list.length-1; i+=n) {
        const innerArr = [];
        for (let j=i; j<=i+n-1; j++) {
            innerArr.push(num_list[j])
        };
        answer.push(innerArr);
    }
    
    return answer;
}