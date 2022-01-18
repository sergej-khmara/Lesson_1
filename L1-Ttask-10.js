//Отсортировать массив по возрастанию.
var arr = [6,5,4,3,2,1];
// нужно получить [1,2,3,4,5,6]
var b = arr.length
// b - экономим ресурсы
for (var i = 0, b = b - 1; i < b; i++) {
    for (var j = 0, endJ = b - i; j < endJ; j++) {
        if (arr[j] > arr[j + 1]) {
            var swap = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = swap;
        }
    }
}
console.log(arr);