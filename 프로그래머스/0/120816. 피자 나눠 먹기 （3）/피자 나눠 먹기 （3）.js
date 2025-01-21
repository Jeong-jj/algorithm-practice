function solution(slice, n) {
    for (i=1; i <= Math.ceil(n/2); i++) {
        if (slice * i >= n) {
            return i;
        }
    }
}