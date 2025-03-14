function solution(s) {
    const temp = {};
    
    for (l of s) {
        if (temp[l]) temp[l]+=1;
        else temp[l]=1;
    };
    
    for (t in temp) {
        if (temp[t]>1) delete temp[t];
    };
        
    return Object.keys(temp).sort().join('')
}