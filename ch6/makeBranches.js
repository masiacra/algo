var Tree = /** @class */ (function () {
    function Tree(numberOfLines) {
        this.view = [];
        this.numberOfLines = numberOfLines;
    }
    Tree.prototype.makeBranches = function () {
        this._makeBranches(this.numberOfLines - 1, 0);
    };
    Tree.prototype._makeBranches = function (right, numberOfLine) {
        if (right === 0) {
            if (this.view[numberOfLine]) {
                this.view[numberOfLine] += 'X';
            }
            else {
                this.view[numberOfLine] = 'X';
            }
            return;
        }
        var str = '';
        var middle = Math.ceil(right / 2);
        for (var i = 0; i <= right; i += 1) {
            if (i === middle) {
                str += 'X';
            }
            else {
                str += '-';
            }
        }
        if (this.view[numberOfLine]) {
            this.view[numberOfLine] += str;
        }
        else {
            this.view[numberOfLine] = str;
        }
        var newBranchLen = Math.floor(right / 2);
        this._makeBranches(newBranchLen, numberOfLine + 1);
        this._makeBranches(newBranchLen, numberOfLine + 1);
    };
    Tree.prototype.display = function () {
        console.log(this.view.join('\n'));
    };
    return Tree;
}());
var tree = new Tree(16);
tree.makeBranches();
tree.display();
console.log('=============');
var anotherTree = new Tree(64);
anotherTree.makeBranches();
anotherTree.display();
