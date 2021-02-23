var MyNode = /** @class */ (function () {
    function MyNode() {
    }
    MyNode.prototype.displayNode = function () {
        console.log("{" + this.iData + ", " + this.dData + "}");
    };
    return MyNode;
}());
var Tree = /** @class */ (function () {
    function Tree() {
        this.root = null;
    }
    Tree.prototype.find = function (key) {
        var current = this.root;
        while (current.iData !== key) {
            if (key < current.iData) {
                current = current.leftChild;
            }
            else {
                current = current.rightChild;
            }
            if (!current) {
                return null;
            }
        }
    };
    Tree.prototype.insert = function (id, dd) {
        var newNode = new MyNode();
        newNode.iData = id;
        newNode.dData = dd;
        if (!this.root) {
            this.root = newNode;
        }
        else {
            var current = this.root;
            var parent_1 = null;
            while (true) {
                parent_1 = current;
                if (id < current.iData) {
                    current = current.leftChild;
                    if (!current) {
                        parent_1.leftChild = newNode;
                        return;
                    }
                }
                else {
                    current = current.rightChild;
                    if (!current) {
                        parent_1.rightChild = newNode;
                        return;
                    }
                }
            }
        }
    };
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
            console.log(localRoot.iData);
            this.preOrder(localRoot.leftChild);
            this.preOrder(localRoot.rightChild);
        }
    };
    Tree.prototype.inOrder = function (localRoot) {
        if (localRoot) {
            this.inOrder(localRoot.leftChild);
            console.log(localRoot.iData);
        }
    };
    Tree.prototype.postOrder = function (localRoot) {
        if (localRoot) {
            this.postOrder(localRoot.leftChild);
            this.postOrder(localRoot.rightChild);
            console.log(localRoot.iData);
        }
    };
    Tree.prototype["delete"] = function (key) {
        var current = this.root;
        var parent = this.root;
        var isLeftChild = true;
        while (current.iData !== key) {
            parent = current;
            if (key < current.iData) {
                isLeftChild = true;
                current = current.leftChild;
            }
            else {
                isLeftChild = false;
                current = current.rightChild;
            }
            if (!current) {
                return false;
            }
        }
        if (!current.leftChild && !current.rightChild) {
            if (current === this.root) {
                this.root = null;
            }
            else if (isLeftChild) {
                parent.leftChild = null;
            }
            else {
                parent.rightChild = null;
            }
        }
        else if (!current.rightChild) {
            if (current === this.root) {
                this.root = current.leftChild;
            }
            else if (isLeftChild) {
                parent.leftChild = current.leftChild;
            }
            else {
                parent.rightChild = current.rightChild;
            }
        }
        else if (!current.leftChild) {
            if (current === this.root) {
                this.root = current.rightChild;
            }
            else if (isLeftChild) {
                parent.leftChild = current.rightChild;
            }
            else {
                parent.rightChild = current.rightChild;
            }
        }
        else {
            var successor = this.getSuccessor(current);
            if (current === this.root) {
                this.root = successor;
            }
            else if (isLeftChild) {
                parent.leftChild = successor;
            }
            else {
                parent.rightChild = successor;
            }
            successor.leftChild = current.leftChild;
        }
        return true;
    };
    Tree.prototype.getSuccessor = function (delNode) {
        var successorParent = delNode;
        var successor = delNode;
        var current = delNode.rightChild;
        while (current) {
            successorParent = successor;
            successor = current;
            current = current.leftChild;
        }
        if (successor !== delNode.rightChild) {
            successorParent.leftChild = successor.rightChild;
            successor.rightChild = delNode.rightChild;
        }
        return successor;
    };
    return Tree;
}());
var theTree = new Tree();
theTree.insert(50, 1.5);
theTree.insert(25, 1.2);
theTree.insert(75, 1.7);
theTree.insert(12, 1.5);
theTree.insert(37, 1.2);
theTree.insert(43, 1.7);
theTree.insert(30, 1.5);
theTree.insert(33, 1.2);
theTree.insert(87, 1.7);
theTree.insert(93, 1.5);
theTree.insert(97, 1.5);
theTree.traverse(1);
console.log("After deleted 75");
theTree["delete"](75);
theTree.traverse(1);
