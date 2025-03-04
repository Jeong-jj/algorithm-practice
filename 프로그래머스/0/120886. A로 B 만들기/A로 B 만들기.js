function solution(before, after) {
    const beforeStrArr = [...before]
    const afterStrArr = [...after]

    return beforeStrArr.filter((l) => {
        if (afterStrArr.includes(l)) {
            const i = afterStrArr.indexOf(l)
            afterStrArr.splice(i, 1)
            return true
        } else {
            return false
        }
    }).length === before.length ? 1 : 0
}