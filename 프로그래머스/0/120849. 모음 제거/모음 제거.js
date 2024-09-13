function solution(my_string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const answer = my_string.split('')
                        .filter((l) => !vowels.includes(l))
                        .toString()
                        .replaceAll(',','');
    
    return answer
}