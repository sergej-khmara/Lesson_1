//Дан массив с элементами `[2, 5, 9, 15, 0, 4]`.
//С помощью цикла `for` и оператора `if` выведите на экран столбец
// тех элементов массива, которые больше 3-х, но меньше 10.
var arr = [2, 5, 9, 15, 0, 4];
const length = arr.length - 1;
for (var j = 0; j <= length; j++) {
    if (arr[j] > 3 && arr[j] < 10) {
        console.log(arr[j]);
    }
}