function solution(array, n) {
    array.push(n);
    array.sort((a,b)=>a-b);

    const iOfN = array.indexOf(n);
    
    return iOfN === array.length-1 ?
            array[iOfN-1] : iOfN === 0 ?
                array[1] : n-array[iOfN-1] > array[iOfN+1]-n ?
                                array[iOfN+1] : array[iOfN-1]
}