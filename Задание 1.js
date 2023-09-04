let oddOrEven = [0, 1, 3, 3, 8, 123, 15, 34, 55, 'shit', NaN, undefined, true];
let even = 0, odd = 0, zero = 0;
function getNumsCount() {
    for (let i = 0; i < oddOrEven.length; i++) {
        if (typeof oddOrEven[i] == 'number' && !isNaN(oddOrEven[i])) {
            if (oddOrEven[i] == 0) {
                zero += 1;
            }
            if (oddOrEven[i] % 2 == 0 && oddOrEven[i] != 0) {
                even += 1;
            }
            if (oddOrEven[i] % 2 != 0) {
                odd += 1;
            }
        }
    }
    console.log(even, odd, zero);
}
getNumsCount();