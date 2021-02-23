var ArrayIns = /** @class */ (function () {
    function ArrayIns(max) {
        this.theArray = new Array(max);
        this.nElems = 0;
    }
    ArrayIns.prototype.insert = function (n) {
        this.theArray[this.nElems] = n;
        this.nElems += 1;
    };
    ArrayIns.prototype.display = function () {
        var result = '';
        for (var i = 0; i < this.nElems; i += 1) {
            result += String(this.theArray[i]);
            if (i !== this.nElems - 1) {
                result += ' ';
            }
        }
        console.log(result);
    };
    ArrayIns.prototype.quickSort = function () {
        this.recQuickSort(0, this.nElems - 1);
    };
    ArrayIns.prototype.recQuickSort = function (left, right) {
        var size = right - left + 1;
        if (size < 10) {
            this.insertionSort(left, right);
        }
        else {
            var median = this.medianOf3(left, right);
            var partion = this.partionIt(left, right, median);
            this.recQuickSort(left, partion - 1);
            this.recQuickSort(partion + 1, right);
        }
    };
    ArrayIns.prototype.medianOf3 = function (left, right) {
        var center = Math.floor((left + right) / 2);
        if (this.theArray[left] > this.theArray[center]) {
            this.swap(left, center);
        }
        if (this.theArray[left] > this.theArray[right]) {
            this.swap(left, right);
        }
        if (this.theArray[center] > this.theArray[right]) {
            this.swap(center, right);
        }
        this.swap(center, right - 1);
        return this.theArray[right - 1];
    };
    ArrayIns.prototype.swap = function (dex1, dex2) {
        var _a;
        _a = [this.theArray[dex2], this.theArray[dex1]], this.theArray[dex1] = _a[0], this.theArray[dex2] = _a[1];
    };
    ArrayIns.prototype.partionIt = function (left, right, pivot) {
        var leftPtr = left;
        var rightPtr = right - 1;
        while (true) {
            while (this.theArray[++leftPtr] < pivot) {
            }
            while (this.theArray[--rightPtr] > pivot) {
            }
            if (leftPtr >= rightPtr) {
                break;
            }
            else {
                this.swap(leftPtr, rightPtr);
            }
        }
        this.swap(leftPtr, right - 1);
        return leftPtr;
    };
    ArrayIns.prototype.insertionSort = function (left, right) {
        var inner, outer;
        for (outer = left + 1; outer <= right; outer += 1) {
            var temp = this.theArray[outer];
            inner = outer;
            while (inner > left && this.theArray[inner - 1] >= temp) {
                this.theArray[inner] = this.theArray[inner - 1];
                inner -= 1;
            }
            this.theArray[inner] = temp;
        }
    };
    return ArrayIns;
}());
var maxSize = 16;
var arr = new ArrayIns(maxSize);
arr.insert(69);
arr.insert(0);
arr.insert(70);
arr.insert(6);
arr.insert(38);
arr.insert(35);
arr.insert(24);
arr.insert(56);
arr.insert(44);
arr.insert(26);
arr.insert(73);
arr.insert(77);
arr.insert(30);
arr.insert(45);
arr.insert(97);
arr.insert(65);
arr.display();
console.log("after sort");
arr.quickSort();
arr.display();
