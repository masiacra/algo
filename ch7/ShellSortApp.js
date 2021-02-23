var ArraySh = /** @class */ (function () {
    function ArraySh(maxSize) {
        this.theArray = new Array(maxSize);
        this.nElems = 0;
    }
    ArraySh.prototype.insert = function (value) {
        this.theArray[this.nElems] = value;
        this.nElems += 1;
    };
    ArraySh.prototype.display = function () {
        for (var i = 0; i < this.nElems; i += 1) {
            console.log(this.theArray[i]);
        }
    };
    ArraySh.prototype.shellSort = function () {
        var inner;
        var outer;
        var temp;
        var h = 1;
        while (h <= Math.floor(this.nElems / 3)) {
            h = h * 3 + 1;
        }
        while (h > 0) {
            for (outer = h; outer < this.nElems; outer += 1) {
                temp = this.theArray[outer];
                inner = outer;
                while (inner > h - 1 && this.theArray[inner - h] >= temp) {
                    this.theArray[inner] = this.theArray[inner - h];
                    inner -= h;
                }
                this.theArray[inner] = temp;
            }
            h = (h - 1) / 3;
        }
    };
    return ArraySh;
}());
var maxSize = 10;
var arr = new ArraySh(maxSize);
for (var i = 0; i < maxSize; i += 1) {
    arr.insert(Math.random() * 99);
}
arr.display();
console.log('=========');
arr.shellSort();
arr.display();
