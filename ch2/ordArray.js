var OrdArray = /** @class */ (function () {
    function OrdArray(max) {
        this.a = new Array(max);
        this.nElems = 0;
    }
    OrdArray.prototype.findIndex = function (searchKey) {
        var lowerBound = 0;
        var upperBound = this.nElems - 1;
        var curIn;
        while (true) {
            curIn = Math.floor((lowerBound + upperBound) / 2);
            if (this.a[curIn] === searchKey) {
                return [curIn, true];
            }
            if (lowerBound > upperBound) {
                return [curIn, false];
            }
            if (this.a[curIn] < searchKey) {
                lowerBound = curIn + 1;
            }
            else {
                upperBound = curIn - 1;
            }
        }
    };
    OrdArray.prototype.size = function () {
        return this.nElems;
    };
    OrdArray.prototype.find = function (searchKey) {
        var _a = this.findIndex(searchKey), curIn = _a[0], ok = _a[1];
        if (!ok) {
            return this.nElems;
        }
        return curIn;
    };
    OrdArray.prototype.insert = function (value) {
        var j = this.findIndex(value)[0];
        var i;
        if (value < this.a[j]) {
            i = j;
        }
        else {
            i = j + 1;
        }
        for (var k = this.nElems; k > i; k -= 1) {
            this.a[k] = this.a[k - 1];
        }
        this.a[i] = value;
        this.nElems += 1;
    };
    OrdArray.prototype["delete"] = function (value) {
        var _a = this.findIndex(value), j = _a[0], ok = _a[1];
        if (!ok) {
            return false;
        }
        for (var k = j; k < this.nElems; k += 1) {
            this.a[k] = this.a[k + 1];
        }
        this.nElems -= 1;
        return true;
    };
    OrdArray.prototype.display = function () {
        for (var i = 0; i < this.nElems; i += 1) {
            console.log(this.a[i]);
        }
    };
    OrdArray.merge = function (arr1, arr2) {
        var result = [];
        while (arr1.length !== 0 && arr2.length !== 0) {
            var value = void 0;
            if (arr1[0] < arr2[0]) {
                value = arr1.shift();
            }
            else {
                value = arr2.shift();
            }
            result.push(value);
        }
        while (arr1.length !== 0) {
            result.push(arr1.shift());
        }
        while (arr2.length !== 0) {
            result.push(arr2.shift());
        }
        return result;
    };
    return OrdArray;
}());
var maxSize = 100;
var arr = new OrdArray(maxSize);
arr.insert(77);
arr.insert(99);
arr.insert(44);
arr.insert(55);
arr.insert(22);
arr.insert(88);
arr.insert(11);
arr.insert(0);
arr.insert(66);
arr.insert(33);
var searchKey = 55;
if (arr.find(searchKey) !== arr.size()) {
    console.log("Found " + searchKey);
}
else {
    console.log("Can't find " + searchKey);
}
arr.display();
console.log('---------');
arr["delete"](00);
console.log('delete', arr["delete"](55));
arr["delete"](99);
arr.display();
console.log(OrdArray.merge([1, 2, 3], [4, 5, 6]));
