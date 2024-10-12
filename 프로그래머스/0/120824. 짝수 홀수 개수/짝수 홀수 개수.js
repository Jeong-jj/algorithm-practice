function solution(num_list) {
    const countArr = [];
    countArr.push(num_list.filter((n) => n%2 === 0).length);
    countArr.push(num_list.filter((n) => n%2).length);
    return countArr;
}