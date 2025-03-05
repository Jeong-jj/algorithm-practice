function solution(box, n) {
    const xmax = Math.floor(box[0]/n);
    const ymax = Math.floor(box[1]/n);
    const zmax = Math.floor(box[2]/n);
    
    return xmax*ymax*zmax
}