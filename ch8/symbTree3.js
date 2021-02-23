var TreeNode = /** @class */ (function () {
    function TreeNode(data) {
        if (data === void 0) { data = null; }
        this.data = data;
        this.left = null;
        this.right = null;
    }
    TreeNode.prototype.display = function () {
        console.log("TreeNode: " + this.data);
    };
    return TreeNode;
}());
var Tree = /** @class */ (function () {
    function Tree(node) {
        this.root = node;
    }
    Tree.prototype.traverse = function (traverseType) {
        switch (traverseType) {
            case 1: {
                console.log("Preorder traverse");
                this.preOrder(this.root);
                break;
            }
            case 2:
                {
                    console.log("Inorder traverse");
                    this.inOrder(this.root);
                    break;
                }
                defaul: {
                    console.log("Postorder traverse");
                    this.postOrder(this.root);
                    break;
                }
        }
        console.log("==================");
    };
    Tree.prototype.preOrder = function (localRoot) {
        if (localRoot) {
            console.log(localRoot.data);
            this.preOrder(localRoot.left);
            this.preOrder(localRoot.right);
        }
    };
    Tree.prototype.inOrder = function (localRoot) {
        if (localRoot) {
            this.inOrder(localRoot.left);
            console.log(localRoot.data);
            this.inOrder(localRoot.right);
        }
    };
    Tree.prototype.postOrder = function (localRoot) {
        if (localRoot) {
            this.postOrder(localRoot.left);
            this.postOrder(localRoot.right);
            console.log(localRoot.data);
        }
    };
    Tree.prototype.displayTree = function () {
        var data = [];
        var aux = function (root, lvl) {
            if (!root) {
                return;
            }
            var info = root.data;
            if (data[lvl]) {
                var level = data[lvl];
                level.push(info);
            }
            else {
                var level = [info];
                data[lvl] = level;
            }
            aux(root.left, lvl + 1);
            aux(root.right, lvl + 1);
        };
        aux(this.root, 0);
        var displayedTree = data.map(function (arr) { return arr.join(' '); }).join('\n');
        console.log(displayedTree);
    };
    return Tree;
}());
function getSymbTree(str) {
    var arr = str.split('');
    var root = new TreeNode(arr[0]);
    var aux = function (root, index) {
        if (!root || index >= arr.length) {
            return;
        }
        var leftIndex = 2 * index + 1;
        var rightIndex = 2 * index + 2;
        var left = new TreeNode(arr[leftIndex] || null);
        var right = new TreeNode(arr[rightIndex] || null);
        root.left = left;
        root.right = right;
        aux(left, leftIndex);
        aux(right, rightIndex);
    };
    aux(root, 0);
    return new Tree(root);
}
var tree = getSymbTree("ABCDEFGHIJ");
tree.displayTree();
