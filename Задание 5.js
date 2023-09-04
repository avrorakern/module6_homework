let userNumFirst = +prompt('Введите первое число');
let userNumSecond = +prompt('Введите степень числа');
const exponentiation = (userNumFirst, userNumSecond) => {
    return userNumFirst ** userNumSecond;
}
console.log(exponentiation(userNumFirst, userNumSecond))