function quickSelect(arr, k) {
    if (arr.length === 0) {
        throw new Error("Can't apply to empty list");
    }
    if (arr.length === 1) {
        return arr[0];
    }
    var pivot = arr[0];
    var left = arr.filter(function (num) { return num < pivot; });
    var right = arr.filter(function (num) { return num > pivot; });
    if (k < left.length) {
        return quickSelect(left, k);
    }
    if (k < left.length + 1) {
        return pivot;
    }
    return quickSelect(right, k - left.length - 1);
}
var arr1 = [4, 3, 1, 2, 5];
console.log("For arr: " + arr1 + ", " + quickSelect(arr1, Math.floor(arr1.length / 2)));
var arr2 = [7, 6, 4, 1, 2, 3, 0];
console.log("For arr " + arr2 + " - " + quickSelect(arr2, Math.floor(arr2.length / 2)));
var arr3 = [9, 1, 0, 2, 3, 4, 6, 8, 7, 10, 5];
console.log("For arr " + arr3 + " - " + quickSelect(arr3, Math.floor(arr3.length / 2)));
