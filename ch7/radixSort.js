var arr = [421, 240, 135, 532, 305, 430, 124];
var flatten = function (arr) {
    var res = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var nums = arr_1[_i];
        nums.forEach(function (num) { return res.push(num); });
    }
    return res;
};
var getNum = function (target, pos) {
    if (pos < 0) {
        throw new Error("Can't apply to non-positive pos");
    }
    while (target > 9 && pos > 1) {
        target = Math.floor(target / 10);
        pos -= 1;
    }
    return target % 10;
};
var radixSort = function (arr) {
    var maxDischarge = String(arr[0]).length;
    var newArr = [];
    var res = arr.slice(0);
    var _loop_1 = function (i) {
        var _loop_2 = function (j) {
            newArr.push(res.filter(function (num) { return getNum(num, i) === j; }));
        };
        for (var j = 0; j <= 9; j += 1) {
            _loop_2(j);
        }
        res = flatten(newArr);
        newArr = [];
    };
    for (var i = 1; i <= maxDischarge; i += 1) {
        _loop_1(i);
    }
    return res;
};
console.log(radixSort(arr));
