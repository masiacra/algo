"use strict";
exports.__esModule = true;
var StackX = /** @class */ (function () {
    function StackX(s) {
        this.maxSize = s;
        this.stackArray = new Array(s);
        this.top = -1;
    }
    StackX.prototype.push = function (j) {
        this.top += 1;
        this.stackArray[this.top] = j;
    };
    StackX.prototype.pop = function () {
        var returnValue = this.stackArray[this.top];
        this.top -= 1;
        return returnValue;
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
    return StackX;
}());
exports.StackX = StackX;
var theStack = new StackX(10);
theStack.push(20);
theStack.push(40);
theStack.push(60);
theStack.push(80);
while (!theStack.isEmpty()) {
    var value = theStack.pop();
    console.log(value);
}
console.log('end of program');
