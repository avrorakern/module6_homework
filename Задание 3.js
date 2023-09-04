let userNumFirst = +prompt('Введите первое число');
let userNumSecond = +prompt('Введите второе число');
function getNum(userNumFirst) {
    return function(userNumSecond) {
        return userNumFirst + userNumSecond;
    }
}
const resFunc = getNum(userNumFirst)(userNumSecond);
alert(`${resFunc}`);