var Link = /** @class */ (function () {
    function Link(d) {
        this.dData = d;
        this.right = null;
        this.bottom = null;
    }
    Link.prototype.displayLink = function () {
        console.log(this.dData);
    };
    return Link;
}());
var MatrixList = /** @class */ (function () {
    function MatrixList(r, c) {
        this.rows = r;
        this.columns = c;
        this.first = new Link(null);
        var prev = null;
        var current = this.first;
        var currentFirst = null;
        for (var i = 0; i < this.rows; i += 1) {
            for (var j = 0; j < this.columns - 1; j += 1) {
                var next = new Link(null);
                current.right = next;
                if (prev) {
                    prev.bottom = next;
                    prev = prev.right;
                }
                if (j === 0) {
                    currentFirst = current;
                }
                current = next;
            }
            prev = currentFirst.right;
            if (i < this.rows - 1) {
                currentFirst.bottom = new Link(null);
            }
            current = currentFirst.bottom;
        }
    }
    MatrixList.prototype.insert = function (posX, posY, num) {
        if (posX > this.columns - 1 || posY > this.rows - 1) {
            console.error("Can't insert: matrix doesn't contain this position");
        }
        else {
            var current = this.first;
            for (var i = 0; i <= posY - 1; i += 1) {
                current = current.bottom;
            }
            for (var j = 0; j <= posX - 1; j += 1) {
                current = current.right;
            }
            current.dData = num;
        }
    };
    MatrixList.prototype.remove = function (posX, posY) {
        if (posX > this.columns - 1 || posY > this.rows - 1) {
            console.error("Can'r remove: indexes otut of scope");
            return null;
        }
        var current = this.first;
        for (var i = 0; i <= posY - 1; i += 1) {
            current = current.bottom;
        }
        for (var j = 0; j <= posX - 1; j += 1) {
            current = current.right;
        }
        return current.dData;
    };
    MatrixList.prototype.displayMatrix = function () {
        var result = '';
        var current = this.first;
        var currentFirst = null;
        for (var i = 0; i < this.rows; i += 1) {
            currentFirst = current;
            for (var j = 0; j < this.columns; j += 1) {
                result += String(current.dData);
                current = current.right;
            }
            result += '\n';
            current = currentFirst.bottom;
        }
        console.log('matrix:');
        console.log(result);
    };
    return MatrixList;
}());
var matr = new MatrixList(3, 3);
matr.insert(0, 0, 0);
matr.insert(0, 1, 1);
matr.insert(0, 2, 2);
matr.insert(1, 0, 3);
matr.insert(1, 1, 4);
matr.insert(1, 2, 5);
matr.insert(2, 0, 6);
matr.insert(2, 1, 7);
matr.insert(2, 2, 8);
matr.displayMatrix();
console.dir(matr);
