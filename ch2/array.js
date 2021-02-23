var HighArray = /** @class */ (function () {
    function HighArray(max) {
        this.a = new Array(max);
        this.nElems = 0;
    }
    HighArray.prototype.find = function (searchKey) {
        for (var j = 0; j < this.nElems; j += 1) {
            if (this.a[j] === searchKey) {
                return true;
            }
        }
        return false;
    };
    HighArray.prototype.insert = function (value) {
        this.a[this.nElems] = value;
        this.nElems += 1;
    };
    HighArray.prototype["delete"] = function (value) {
        var j;
        for (j = 0; j < this.nElems; j += 1) {
            if (value === this.a[j]) {
                break;
            }
        }
        if (j === this.nElems) {
            return false;
        }
        else {
            for (var k = j; k < this.nElems; k += 1) {
                this.a[k] = this.a[k + 1];
            }
            this.nElems -= 1;
            return true;
        }
    };
    HighArray.prototype.display = function () {
        for (var j = 0; j < this.nElems; j += 1) {
            console.log(this.a[j]);
        }
    };
    HighArray.prototype.getMax = function () {
        var max = -1;
        for (var i = 0; i < this.nElems; i += 1) {
            if (this.a[i] > max) {
                max = this.a[i];
            }
        }
        return max;
    };
    HighArray.prototype.removeMax = function () {
        var max = this.getMax();
        if (max === -1) {
            return max;
        }
        this["delete"](max);
        return max;
    };
    HighArray.prototype.noDups = function () {
        var map = [];
        for (var i = 0; i < this.nElems; i += 1) {
            if (map.indexOf(this.a[i]) > -1) {
                this.a[i] = null;
            }
            else {
                map.push(this.a[i]);
            }
        }
        while (true) {
            if (!this["delete"](null)) {
                break;
            }
        }
    };
    return HighArray;
}());
var maxSize = 100;
var arr = new HighArray(maxSize);
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
arr.display();
var searchKey = 35;
if (arr.find(searchKey)) {
    console.log("Found " + searchKey);
}
else {
    console.log("Can't find " + searchKey);
}
arr["delete"](0);
arr["delete"](55);
arr["delete"](99);
arr.display();
console.log('maximum value: ', arr.getMax());
arr.removeMax();
arr.display();
console.log('сортируем массив');
var copyOfArray = [];
while (arr.getMax() !== -1) {
    copyOfArray.push(arr.removeMax());
}
console.log(copyOfArray);
console.log('-----------------');
var arr2 = new HighArray(10);
arr2.insert(1);
arr2.insert(1);
arr2.insert(3);
arr2.insert(2);
arr2.insert(1);
arr2.insert(3);
arr2.noDups();
arr2.display();
