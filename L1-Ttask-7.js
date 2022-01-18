//Написать код который посчитает сумму всех элементов в масиве.
var arr = [1,2,3,4];
var summas=0, b = arr.length
for (i = 0; i < b ; i++)
{
    if(arr[i] % 2 == 0) {
        summas += arr[i];
    }
}
console.log( 'summa  chetnyh elementov massiva = ' + summas);