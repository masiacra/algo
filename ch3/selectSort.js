var ArrayBub = /** @class */ (function () {
    function ArrayBub(max) {
        this.a = new Array(max);
        this.nElems = 0;
    }
    ArrayBub.prototype.insert = function (value) {
        this.a[this.nElems] = value;
        this.nElems += 1;
    };
    ArrayBub.prototype.display = function () {
        for (var i = 0; i < this.nElems; i += 1) {
            console.log(this.a[i]);
        }
    };
    ArrayBub.prototype.selectSort = function () {
        var min;
        var inner;
        var outer;
        for (outer = 0; outer < this.nElems - 1; outer += 1) {
            min = outer;
            for (inner = outer + 1; inner < this.nElems; inner += 1) {
                if (this.a[inner] < this.a[min]) {
                    min = inner;
                }
            }
            this.swap(outer, min);
        }
    };
    ArrayBub.prototype.swap = function (one, two) {
        var temp = this.a[one];
        this.a[one] = this.a[two];
        this.a[two] = temp;
    };
    return ArrayBub;
}());
var arr = new ArrayBub(100);
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
console.log('---------');
arr.selectSort();
arr.display();
