"use strict";
exports.__esModule = true;
var LinkList_1 = require("./LinkList");
var LinkStack = /** @class */ (function () {
    function LinkStack() {
        this.theList = new LinkList_1.LinkList();
    }
    LinkStack.prototype.push = function (j) {
        this.theList.insertFirst(j, null);
    };
    LinkStack.prototype.pop = function () {
        return this.theList.deleteFirst();
    };
    LinkStack.prototype.isEmpty = function () {
        return this.theList.isEmpty();
    };
    LinkStack.prototype.displayStack = function () {
        console.log("Stack (top --> bottom)");
        this.theList.displayList();
    };
    return LinkStack;
}());
exports.LinkStack = LinkStack;
var theStack = new LinkStack();
theStack.push(20);
theStack.push(40);
theStack.displayStack();
theStack.push(60);
theStack.push(80);
theStack.displayStack();
theStack.pop();
theStack.pop();
theStack.displayStack();
