"use strict";
exports.__esModule = true;
var CycleList_1 = require("./CycleList");
var Stack = /** @class */ (function () {
    function Stack() {
        this.list = new CycleList_1.CycleList();
        this.top = null;
    }
    Stack.prototype.push = function (j) {
        this.list.insert(j);
        this.top = j;
    };
    Stack.prototype.pop = function () {
        var link = this.list.remove();
        this.top = this.list.getSize() > 0 ? this.list.getCurrent().next.getData() : null;
        return link.getData();
    };
    Stack.prototype.peek = function () {
        return this.top;
    };
    Stack.prototype.isEmpty = function () {
        return this.list.getSize() === 0;
    };
    return Stack;
}());
var theStack = new Stack();
theStack.push(20);
theStack.push(40);
theStack.push(60);
theStack.push(80);
while (!theStack.isEmpty()) {
    var value = theStack.pop();
    console.log(value);
}
console.log('end of program');
