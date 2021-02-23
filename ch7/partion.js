var ArrayPar = /** @class */ (function () {
    function ArrayPar(maxSize) {
        this.theArray = new Array(maxSize);
        this.nElems = 0;
    }
    ArrayPar.prototype.insert = function (n) {
        this.theArray[this.nElems] = n;
        this.nElems += 1;
    };
    ArrayPar.prototype.size = function () {
        return this.nElems;
    };
    ArrayPar.prototype.display = function () {
        console.log("A=");
        var result = '';
        for (var i = 0; i < this.nElems; i += 1) {
            result += "" + this.theArray[i];
            if (i !== this.nElems - 1) {
                result += ' ';
            }
        }
        console.log(result);
    };
    ArrayPar.prototype.partionIt = function (left, right) {
        var pivot = this.theArray[right];
        var leftPtr = left - 1;
        var rightPtr = right;
        while (true) {
            while (leftPtr < right - 1 && this.theArray[++leftPtr] < pivot) {
            }
            while (rightPtr > left && this.theArray[--rightPtr] > pivot) {
            }
            if (leftPtr >= rightPtr) {
                break;
            }
            else {
                this.swap(leftPtr, rightPtr);
            }
        }
        return leftPtr;
    };
    ArrayPar.prototype.swap = function (dex1, dex2) {
        var temp = this.theArray[dex1];
        this.theArray[dex1] = this.theArray[dex2];
        this.theArray[dex2] = temp;
    };
    return ArrayPar;
}());
var maxSize = 16;
var arr = new ArrayPar(maxSize);
arr.insert(149);
arr.insert(192);
arr.insert(47);
/*
arr.insert(152);
arr.insert(159);
arr.insert(195);
arr.insert(61);
arr.insert(66);
arr.insert(17);
arr.insert(167);
arr.insert(118);
arr.insert(64);
arr.insert(27);
arr.insert(80);
arr.insert(30);
arr.insert(105);
*/
arr.display();
var pivot = 99;
console.log("Pivot is " + pivot);
var size = arr.size();
var partDex = arr.partionIt(0, size - 1);
console.log("Partion index at " + partDex);
arr.display();
