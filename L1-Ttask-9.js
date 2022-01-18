//Отсортировать массив по убыванию.
var arr = [1,2,3,4,5,6];
// нужно получить  [6,5,4,3,2,1]
var b = arr.length;
// экономим ресурсы
for (var i = 0; i < b; i++) {
    for (var j = 0, endJ = b - i; j < endJ; j++) {
        if (arr[b - j] > arr[b - j - 1]) {
            var swap = arr[b - j];
            arr[b - j] = arr[b - j - 1];
            arr[b - j - 1] = swap;
        }
    }
}
console.log(arr);