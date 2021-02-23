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
        var totalSymbs = getTotalSymbs(data.length - 1);
        var displayedTree = data.map(function (arr, index) {
            var totlSymbs = symbOnLvl(index);
            if (totlSymbs > arr.length) {
                while (totlSymbs > arr.length) {
                    arr.push('-');
                }
            }
            return arr.join(' ');
        });
        console.log(displayedTree.join('\n'));
    };
    return Tree;
}());
function getTotalSymbs(lvls) {
    if (lvls === 0) {
        return 1;
    }
    return 2 * getTotalSymbs(lvls - 1) + 1;
}
function symbOnLvl(lvl) {
    if (lvl === 0)
        return 1;
    return 2 * symbOnLvl(lvl - 1);
}
function getSymbTree(str) {
    var nodes = [];
    var symb1 = str[0];
    var symb2 = str[1];
    var node = new TreeNode('+');
    node.left = new TreeNode(symb1);
    node.right = new TreeNode(symb2);
    for (var i = 2; i < str.length; i += 1) {
        var symb = str[i];
        var newNode = new TreeNode(symb);
        var plusNode = new TreeNode('+');
        var rootNode = new TreeNode('+');
        rootNode.left = plusNode;
        rootNode.right = newNode;
        nodes.push(rootNode);
    }
    var prevNode = node;
    var currentNode;
    for (var i = 0; i < nodes.length; i += 1) {
        currentNode = nodes[i];
        currentNode.left = prevNode;
        prevNode = currentNode;
    }
    return new Tree(currentNode || prevNode);
}
var tree = getSymbTree("ABCDE");
tree.displayTree();
console.log(getTotalSymbs(2));
