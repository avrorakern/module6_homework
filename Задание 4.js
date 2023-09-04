let userNumFirst = +prompt('Введите первое число');
let userNumSecond = +prompt('Введите второе число');
function orderOutput(userNumFirst, userNumSecond) {
    for (let i = userNumFirst; i <= userNumSecond; i++){
        console.log(i);
    }
}
const intervalId = setInterval(orderOutput, 1000, userNumFirst, userNumSecond);