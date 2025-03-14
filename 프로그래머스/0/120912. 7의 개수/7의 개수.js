function solution(array) {
    let count = 0;
    
    for (n of array) {
        count += [...n+''].filter((l)=>l==7).length;
    };
    
    return count;
}