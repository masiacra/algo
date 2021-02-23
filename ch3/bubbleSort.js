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
    ArrayBub.prototype.bubbleSort = function () {
        //версия без использования обратного хода
        /*let inner: number;
        let outer: number;
        
        for (outer = this.nElems - 1; outer > 1; outer -= 1) {
            for (inner = 0; inner < outer; inner += 1) {
                if (this.a[inner] > this.a[inner+1]) {
                    this.swap(inner, inner+1);
                }
            }
        }*/
        var inner;
        var outer;
        var aux = 0;
        for (outer = this.nElems - 1; outer > Math.floor(this.nElems / 2); outer -= 1) {
            for (inner = aux; inner < outer; inner += 1) {
                if (this.a[inner] > this.a[inner + 1]) {
                    this.swap(inner, inner + 1);
                }
            }
            while (inner > aux) {
                if (this.a[inner] < this.a[inner - 1]) {
                    this.swap(inner, inner - 1);
                }
                inner -= 1;
            }
            aux += 1;
        }
    };
    ArrayBub.prototype.oddEvenSort = function () {
        var flag = true;
        for (var i = 0; i < this.nElems; i += 1) {
            for (var j = i % 2 === 0 ? 0 : 1; j < this.nElems; j += 2) {
                if (this.a[j] > this.a[j + 1]) {
                    this.swap(j, j + 1);
                }
            }
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
arr.oddEvenSort();
arr.display();
