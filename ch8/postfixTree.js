var TreeNode = /** @class */ (function () {
    function TreeNode(data) {
        this.data = data;
    }
    TreeNode.prototype.displayNode = function () {
        console.log(this.data);
    };
    return TreeNode;
}());
var Tree = /** @class */ (function () {
    function Tree(root) {
        this.root = root;
    }
    Tree.prototype.traverse = function (traverseType) {
        this.expression = [];
        switch (traverseType) {
            case 1: {
                console.log("Preorder traverse");
                this.preOrder(this.root);
                break;
            }
            case 2: {
                console.log("Inorder traverse");
                this.inOrder(this.root);
                break;
            }
            default: {
                console.log("Postorder traverse");
                this.postOrder(this.root);
                break;
            }
        }
        console.log(this.expression.join(''));
        console.log("==================");
    };
    Tree.prototype.preOrder = function (localRoot) {
        if (localRoot) {
            this.expression.push(localRoot.data);
            this.preOrder(localRoot.left);
            this.preOrder(localRoot.right);
        }
    };
    Tree.prototype.inOrder = function (localRoot) {
        if (localRoot) {
            var containsLeftAndRight = localRoot.left && localRoot.right;
            if (containsLeftAndRight) {
                this.expression.push('(');
            }
            this.inOrder(localRoot.left);
            this.expression.push(localRoot.data);
            this.inOrder(localRoot.right);
            if (containsLeftAndRight) {
                this.expression.push(')');
            }
        }
    };
    Tree.prototype.postOrder = function (localRoot) {
        if (localRoot) {
            this.postOrder(localRoot.left);
            this.postOrder(localRoot.right);
            this.expression.push(localRoot.data);
        }
    };
    return Tree;
}());
var StackX = /** @class */ (function () {
    function StackX(size) {
        this.maxSize = size;
        this.stackArray = new Array(size);
        this.top = -1;
    }
    StackX.prototype.push = function (j) {
        this.top += 1;
        this.stackArray[this.top] = j;
    };
    StackX.prototype.pop = function () {
        var value = this.stackArray[this.top];
        this.top -= 1;
        return value;
    };
    StackX.prototype.peek = function () {
        return this.stackArray[this.top];
    };
    StackX.prototype.isEmpty = function () {
        return this.top === -1;
    };
    StackX.prototype.isFull = function () {
        return this.top === this.maxSize - 1;
    };
    StackX.prototype.size = function () {
        return this.top + 1;
    };
    StackX.prototype.peekN = function (n) {
        return this.stackArray[n];
    };
    StackX.prototype.displayStack = function (s) {
        console.log(s, "Stack (bottom --> top):");
        for (var j = 0; j < this.size(); j += 1) {
            console.log(this.peekN(j));
        }
    };
    return StackX;
}());
var ParsePost = /** @class */ (function () {
    function ParsePost(s) {
        this.input = s;
    }
    ParsePost.prototype.doTree = function () {
        this.theStack = new StackX(20);
        for (var j = 0; j < this.input.length; j += 1) {
            var ch = this.input[j];
            if (ch >= "0" && ch <= "9") {
                this.theStack.push(new TreeNode(ch));
            }
            else {
                var leaf1 = this.theStack.pop();
                var leaf2 = this.theStack.pop();
                var root = new TreeNode(ch);
                root.left = leaf1;
                root.right = leaf2;
                this.theStack.push(root);
            }
        }
        var interAns = this.theStack.pop();
        return new Tree(interAns);
    };
    return ParsePost;
}());
// const parsePost = new ParsePost("345+*612+/-");
var theTree = new ParsePost("123+*").doTree();
theTree.traverse(1);
theTree.traverse(2);
theTree.traverse(3);
