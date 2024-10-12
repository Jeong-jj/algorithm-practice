function solution(n) {
    const answer = [];
    
    for (let i=1; i <= n; i++) {
        if (i<=n && i%2) {
            answer.push(i)
        }
    }
    answer.sort((a, b) => a-b)
    
    return answer;
}