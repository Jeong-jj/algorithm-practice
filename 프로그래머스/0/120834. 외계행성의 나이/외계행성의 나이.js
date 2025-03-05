function solution(age) {
    const ageArr = [...age+'']

    return ageArr.map((_, index) => String.fromCharCode(String(age).charCodeAt(index)+49))
                .join('')
}