"use strict";
exports.__esModule = true;
var stack_1 = require("./stack");
var Reverser = /** @class */ (function () {
    function Reverser(input) {
        this.input = input;
    }
    Reverser.prototype.doRev = function () {
        var stackSize = this.input.length;
        var theStack = new stack_1.StackX(stackSize);
        this.output = "";
        for (var i = 0; i < this.input.length; i += 1) {
            var ch = this.input[i];
            theStack.push(ch);
        }
        while (!theStack.isEmpty()) {
            var ch = theStack.pop();
            this.output += ch;
        }
        return this.output;
    };
    return Reverser;
}());
console.log("Enter a string: part");
console.log("Reversed:", new Reverser("part").doRev());
