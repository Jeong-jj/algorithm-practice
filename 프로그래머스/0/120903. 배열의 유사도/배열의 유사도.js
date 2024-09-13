function solution(s1, s2) {
    var answer = 0;
    
    for (const arg1 of s1) {
        for (const arg2 of s2) {
            if (arg1 === arg2) answer++
        }
    }
    
    return answer;
}