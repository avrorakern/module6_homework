let userNum = +prompt('Введите число до тысячи:');
function isPrime(num) {
    if (num <= 1 || num > 1000) {
        return 'Ошибка!';
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return 'Число не простое';
            }
        }
        return 'Число простое';
    }
}
alert(`${isPrime(userNum)}`);