//Написать код который посчитает сумму всех четных элементов в массиве, в суммировании уча́ствуют только элементы больше 3.
var arr = [1,2,3,4];
var summas=0 , b = arr.length
for (i = 0; i < b ; i++)
{
    if (arr[i] > 3) {
        if (arr[i] % 2 === 0) {
            summas += arr[i];
        }
    }
}
console.log( 'сумма четных элементов болше 3-х равна ' + summas);