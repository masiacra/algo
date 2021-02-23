var DataItem = /** @class */ (function () {
    function DataItem(dd) {
        this.dData = dd;
    }
    DataItem.prototype.displayItem = function () {
        return "\\" + this.dData;
    };
    return DataItem;
}());
var TreeNode = /** @class */ (function () {
    function TreeNode() {
        this.numItems = 0;
        this.childArray = new Array(TreeNode.ORDER);
        this.itemArray = new Array(TreeNode.ORDER - 1);
    }
    TreeNode.prototype.connectChild = function (childNum, child) {
        this.childArray[childNum] = child;
        if (child) {
            child.parent = this;
        }
    };
    TreeNode.prototype.disconnectChild = function (childNum) {
        var tempNode = this.childArray[childNum];
        this.childArray[childNum] = null;
        return tempNode;
    };
    TreeNode.prototype.getChild = function (childNum) {
        return this.childArray[childNum];
    };
    TreeNode.prototype.getParent = function () {
        return this.parent;
    };
    TreeNode.prototype.isLeaf = function () {
        return !Boolean(this.childArray[0]);
    };
    TreeNode.prototype.getNumItems = function () {
        return this.numItems;
    };
    TreeNode.prototype.getItem = function (index) {
        return this.itemArray[index];
    };
    TreeNode.prototype.isFull = function () {
        return this.numItems === TreeNode.ORDER - 1;
    };
    TreeNode.prototype.findItem = function (key) {
        for (var i = 0; i < TreeNode.ORDER - 1; i += 1) {
            if (!this.itemArray[i]) {
                break;
            }
            else if (this.itemArray[i].dData === key) {
                return i;
            }
        }
        return -1;
    };
    TreeNode.prototype.insertItem = function (newItem) {
        this.numItems += 1;
        var newKey = newItem.dData;
        for (var j = TreeNode.ORDER - 2; j >= 0; j -= 1) {
            if (!Boolean(this.itemArray[j])) {
                continue;
            }
            else {
                var itsKey = this.itemArray[j].dData;
                if (newKey < itsKey) {
                    this.itemArray[j + 1] = this.itemArray[j];
                }
                else {
                    this.itemArray[j + 1] = newItem;
                    return j + 1;
                }
            }
        }
        this.itemArray[0] = newItem;
        return 0;
    };
    TreeNode.prototype.removeItem = function () {
        var temp = this.itemArray[this.numItems - 1];
        this.itemArray[this.numItems - 1] = null;
        this.numItems -= 1;
        return temp;
    };
    TreeNode.prototype.displayNode = function () {
        var result = '';
        for (var i = 0; i < this.numItems; i += 1) {
            result += this.itemArray[i].displayItem();
        }
        console.log(result + '/');
    };
    TreeNode.ORDER = 4;
    return TreeNode;
}());
var node = new TreeNode();
var item = new DataItem(1);
node.insertItem(item);
node.displayNode();
var Tree234 = /** @class */ (function () {
    function Tree234() {
        this.root = new TreeNode();
    }
    Tree234.prototype.find = function (key) {
        var curNode = this.root;
        var childNumber;
        while (true) {
            childNumber = curNode.findItem(key);
            if (childNumber !== -1) {
                return childNumber;
            }
            else if (curNode.isLeaf()) {
                return -1;
            }
            else {
                curNode = this.getNextChild(curNode, key);
            }
        }
    };
    Tree234.prototype.insert = function (dValue) {
        var curNode = this.root;
        var tempItem = new DataItem(dValue);
        while (true) {
            if (curNode.isFull()) {
                this.split(curNode);
                curNode = curNode.getParent();
                curNode = this.getNextChild(curNode, dValue);
            }
            else if (curNode.isLeaf()) {
                break;
            }
            else {
                curNode = this.getNextChild(curNode, dValue);
            }
        }
        curNode.insertItem(tempItem);
    };
    Tree234.prototype.split = function (thisNode) {
        var itemB;
        var itemC;
        var parent;
        var child2;
        var child3;
        var itemIndex;
        itemC = thisNode.removeItem();
        itemB = thisNode.removeItem();
        child2 = thisNode.disconnectChild(2);
        child3 = thisNode.disconnectChild(3);
        var newRight = new TreeNode();
        if (thisNode === this.root) {
            this.root = new TreeNode();
            parent = this.root;
            this.root.connectChild(0, thisNode);
        }
        else {
            parent = thisNode.getParent();
        }
        itemIndex = parent.insertItem(itemB);
        var n = parent.getNumItems();
        for (var j = n - 1; j > itemIndex; j -= 1) {
            var temp = parent.disconnectChild(j);
            parent.connectChild(j + 1, temp);
        }
        parent.connectChild(itemIndex + 1, newRight);
        newRight.insertItem(itemC);
        newRight.connectChild(0, child2);
        newRight.connectChild(1, child3);
    };
    Tree234.prototype.getNextChild = function (theNode, theValue) {
        var j;
        var numItems = theNode.getNumItems();
        for (j = 0; j < numItems; j += 1) {
            if (theValue < theNode.getItem(j).dData) {
                return theNode.getChild(j);
            }
        }
        return theNode.getChild(j);
    };
    Tree234.prototype.displayTree = function () {
        this.recDisplayTree(this.root, 0, 0);
    };
    Tree234.prototype.recDisplayTree = function (thisNode, level, childNumber) {
        console.log("level=" + level + " child=" + childNumber);
        thisNode.displayNode();
        var numItems = thisNode.getNumItems();
        for (var j = 0; j < numItems + 1; j += 1) {
            var nextNode = thisNode.getChild(j);
            if (nextNode) {
                this.recDisplayTree(nextNode, level + 1, j);
            }
            else {
                return;
            }
        }
    };
    return Tree234;
}());
var theTree = new Tree234();
theTree.insert(50);
theTree.insert(40);
theTree.insert(60);
theTree.insert(30);
theTree.insert(70);
theTree.displayTree();
