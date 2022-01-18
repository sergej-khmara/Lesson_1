//Дан массив с числами: `[1,2,3,-5,-2,1,-4]`
//Найдите сумму положительных элементов массива. В результате вы должны получить число `7`
var arr = [1,2,3,-5,-2,1,-4];
const length = arr.length - 1;
var summ = 0;
for (var t = 0; t <= length; t++) {
    if (arr[t] > 0) {
        summ = summ + arr[t];
    }
}
console.log('summ pozitive numbers = ', summ);