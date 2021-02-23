var DArray = /** @class */ (function () {
    function DArray(max) {
        this.theArray = new Array(max);
        this.nElems = 0;
    }
    DArray.prototype.insert = function (value) {
        this.theArray[this.nElems] = value;
        this.nElems += 1;
    };
    DArray.prototype.display = function () {
        for (var j = 0; j < this.nElems; j += 1) {
            console.log(this.theArray[j]);
        }
    };
    DArray.prototype.mergeSort = function () {
        var workSpace = new Array(this.nElems);
        this.recMergeSort(workSpace, 0, this.nElems - 1);
    };
    DArray.prototype.recMergeSort = function (workspace, lowerBound, upperBound) {
        if (lowerBound === upperBound) {
            return;
        }
        var mid = Math.floor((lowerBound + upperBound) / 2);
        this.recMergeSort(workspace, lowerBound, mid);
        this.recMergeSort(workspace, mid + 1, upperBound);
        this.merge(workspace, lowerBound, mid + 1, upperBound);
    };
    DArray.prototype.merge = function (workspace, lowPtr, highPtr, upperBound) {
        var j = 0;
        var lowerBound = lowPtr;
        var mid = highPtr - 1;
        var n = upperBound - lowerBound + 1;
        while (lowPtr <= mid && highPtr <= upperBound) {
            if (this.theArray[lowPtr] < this.theArray[highPtr]) {
                workspace[j] = this.theArray[lowPtr];
                j += 1;
                lowPtr += 1;
            }
            else {
                workspace[j] = this.theArray[highPtr];
                j += 1;
                highPtr += 1;
            }
        }
        while (lowPtr <= mid) {
            workspace[j] = this.theArray[lowPtr];
            j += 1;
            lowPtr += 1;
        }
        while (highPtr <= upperBound) {
            workspace[j] = this.theArray[highPtr];
            j += 1;
            highPtr += 1;
        }
        for (var j_1 = 0; j_1 < n; j_1 += 1) {
            this.theArray[lowerBound + j_1] = workspace[j_1];
        }
    };
    return DArray;
}());
var maxSize = 100;
var arr = new DArray(maxSize);
arr.insert(64);
arr.insert(21);
arr.insert(33);
arr.insert(70);
arr.insert(12);
arr.insert(85);
arr.insert(44);
arr.insert(3);
arr.insert(99);
arr.insert(0);
arr.insert(108);
arr.insert(36);
arr.display();
console.log('===========');
arr.mergeSort();
arr.display();
