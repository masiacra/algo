var OrdArray = /** @class */ (function () {
    function OrdArray(max) {
        this.a = new Array(max);
        this.nElems = 0;
    }
    OrdArray.prototype.size = function () {
        return this.nElems;
    };
    OrdArray.prototype.find = function (searchKey) {
        return this.recFind(searchKey, 0, this.nElems - 1);
    };
    OrdArray.prototype.recFind = function (searchKey, lowerBound, upperBound) {
        var curIn = Math.floor((lowerBound + upperBound) / 2);
        if (this.a[curIn] === searchKey) {
            return curIn;
        }
        else if (lowerBound > upperBound) {
            return this.nElems;
        }
        else {
            if (this.a[curIn] < searchKey) {
                return this.recFind(searchKey, curIn + 1, upperBound);
            }
            else {
                return this.recFind(searchKey, lowerBound, curIn - 1);
            }
        }
    };
    OrdArray.prototype.insert = function (value) {
        var j;
        for (j = 0; j < this.nElems; j += 1) {
            if (this.a[j] > value) {
                break;
            }
        }
        for (var k = this.nElems; k > j; k -= 1) {
            this.a[k] = this.a[k - 1];
        }
        this.a[j] = value;
        this.nElems += 1;
    };
    OrdArray.prototype.display = function () {
        for (var j = 0; j < this.nElems; j += 1) {
            console.log(this.a[j]);
        }
    };
    return OrdArray;
}());
var maxSize = 100;
var arr = new OrdArray(maxSize);
arr.insert(72);
arr.insert(90);
arr.insert(45);
arr.insert(126);
arr.insert(54);
arr.insert(99);
arr.insert(144);
arr.insert(27);
arr.insert(135);
arr.insert(81);
arr.insert(18);
arr.insert(108);
arr.insert(9);
arr.insert(117);
arr.insert(63);
arr.insert(36);
arr.display();
var searchKey = 27;
if (arr.find(searchKey) !== arr.size()) {
    console.log('Found', searchKey);
}
else {
    console.log("Can't find", searchKey);
}
