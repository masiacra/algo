var getFrequencyTable = function (str) {
    var table = Object.create(null);
    for (var i = 0; i < str.length; i += 1) {
        var symb = str[i];
        if (table[symb]) {
            var val = table[symb];
            table[symb] = val + 1;
        }
        else {
            table[symb] = 1;
        }
    }
    return table;
};
var TreeNode = /** @class */ (function () {
    function TreeNode(data, addData) {
        if (data === void 0) { data = null; }
        if (addData === void 0) { addData = 0; }
        this.data = data;
        this.addData = addData;
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
        this.table = {};
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
    Tree.prototype.getCodeTable = function () {
        var _this = this;
        var getTable = function (root, str) {
            if (!root) {
                return;
            }
            if (root.data !== '') {
                _this.table[root.data] = str;
                return;
            }
            getTable(root.left, str + '0');
            getTable(root.right, str + '1');
        };
        getTable(this.root, '');
        return this.table;
    };
    Tree.prototype.getRoot = function () {
        return this.root;
    };
    return Tree;
}());
var sortFn = function (a, b) { return a.addData - b.addData; };
var createTree = function (str) {
    var table = getFrequencyTable(str);
    var priorityQueue = [];
    for (var key in table) {
        var val = table[key];
        var theNode = new TreeNode(key, val);
        priorityQueue.push(theNode);
    }
    priorityQueue.sort(sortFn);
    while (priorityQueue.length > 1) {
        var left = priorityQueue.shift();
        var right = priorityQueue.shift();
        var theRoot = new TreeNode('', left.addData + right.addData);
        theRoot.left = left;
        theRoot.right = right;
        priorityQueue.push(theRoot);
        priorityQueue.sort(sortFn);
    }
    return new Tree(priorityQueue[0]);
};
var tree;
var createCode = function (str) {
    var theTree = createTree("SUSIE SAYS IT IS EASY\n");
    tree = theTree;
    var theTable = theTree.getCodeTable();
    var output = '';
    for (var i = 0; i < str.length; i += 1) {
        var symb = str[i];
        var codeSymb = theTable[symb];
        output += codeSymb;
    }
    return output;
};
var decode = function (tree, code) {
    var output = '';
    var root = tree.getRoot();
    var current = root;
    for (var i = 0; i < code.length; i += 1) {
        if (!current) {
            throw new Error("Tree with error");
        }
        var currentBit = code[i];
        if (currentBit === '0') {
            current = current.left;
        }
        else {
            current = current.right;
        }
        var data = current.data;
        if (data !== '') {
            output += data;
            current = root;
        }
    }
    return output;
};
var code = createCode("SUSIE SAYS IT IS EASY\n");
console.log(decode(tree, code));
