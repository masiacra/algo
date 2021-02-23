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
    var nodes = [];
    for (var i = 0; i < str.length; i += 1) {
        var symb = str[i];
        var plusNode = new TreeNode('+');
        var plusNode2 = new TreeNode('+');
        var symbNode = new TreeNode(symb);
        plusNode.left = plusNode2;
        plusNode.right = symbNode;
        nodes.push(plusNode);
    }
    while (nodes.length > 1) {
        var newNodes = [];
        for (var i = 0; i < nodes.length; i += 2) {
            if (i === nodes.length - 1) {
                newNodes.push(nodes[i]);
                continue;
            }
            var node1 = nodes[i];
            var node2 = nodes[i + 1];
            var plusNode = new TreeNode('+');
            plusNode.left = node1;
            plusNode.right = node2;
            newNodes.push(plusNode);
        }
        nodes = newNodes;
    }
    return new Tree(nodes[0]);
}
var tree = getSymbTree("ABCDE");
tree.displayTree();
