function solution(my_string, num1, num2) {
    return `${my_string.substring(0,num1)}${my_string[num2]}${my_string.substring(num1+1,num2)}${my_string[num1]}${my_string.substring(num2+1)}`
}