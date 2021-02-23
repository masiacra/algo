var ArrayIns = /** @class */ (function () {
    function ArrayIns(max) {
        this.theArray = new Array(max);
        this.nElems = 0;
    }
    ArrayIns.prototype.insert = function (value) {
        this.theArray[this.nElems] = value;
        this.nElems += 1;
    };
    ArrayIns.prototype.display = function () {
        var result = "A=";
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
        if (right - left <= 0) {
            return;
        }
        var pivot = this.theArray[right];
        var partion = this.partionIt(left, right, pivot);
        this.recQuickSort(left, partion - 1);
        this.recQuickSort(partion + 1, right);
    };
    ArrayIns.prototype.partionIt = function (left, right, pivot) {
        var leftPtr = left - 1;
        var rightPtr = right;
        while (true) {
            while (this.theArray[++leftPtr] < pivot) {
            }
            while (rightPtr > 0 && this.theArray[--rightPtr] > pivot) {
            }
            if (leftPtr >= rightPtr) {
                break;
            }
            else {
                this.swap(leftPtr, rightPtr);
            }
        }
        this.swap(leftPtr, right);
        return leftPtr;
    };
    ArrayIns.prototype.swap = function (dex1, dex2) {
        var _a;
        _a = [this.theArray[dex2], this.theArray[dex1]], this.theArray[dex1] = _a[0], this.theArray[dex2] = _a[1];
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
