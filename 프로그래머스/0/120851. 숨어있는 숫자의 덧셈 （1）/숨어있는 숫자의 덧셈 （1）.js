function solution(my_string) {
    let counts = 0;
    
    for (const l of my_string) {
        if (!isNaN(Number(l))) {
            counts += Number(l);
        }
    }
    
    return counts;
}