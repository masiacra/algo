var DoAnagramApp = /** @class */ (function () {
    function DoAnagramApp() {
    }
    DoAnagramApp.doAnagram = function (newSize) {
        if (newSize === 1) {
            return;
        }
        for (var j = 0; j < newSize; j += 1) {
            DoAnagramApp.doAnagram(newSize - 1);
            if (newSize === 2) {
                DoAnagramApp.displayWord();
            }
            DoAnagramApp.rotate(newSize);
        }
    };
    DoAnagramApp.rotate = function (newSize) {
        var j;
        var position = DoAnagramApp.size - newSize;
        var temp = DoAnagramApp.arrChar[position];
        for (j = position; j < DoAnagramApp.size; j += 1) {
            DoAnagramApp.arrChar[j - 1] = DoAnagramApp.arr[j];
        }
        DoAnagramApp.arrChar[j - 1] = temp;
    };
    DoAnagramApp.displayWord = function () {
        console.log(DoAnagramApp.count);
        for (var j = 0; j < DoAnagramApp.size; j += 1) {
            console.log(DoAnagramApp.arrChar[j]);
        }
    };
    DoAnagramApp.arrChar = new Array(100);
    return DoAnagramApp;
}());
DoAnagramApp.doAnagram("cats");
