function solution(chicken) {
    let coupon = chicken;
    let result = 0;
    
    while (coupon > 9) {
        let additional = Math.floor(coupon / 10);
        result += additional;
        coupon = additional + (coupon % 10);
    }
    
    return result;
}