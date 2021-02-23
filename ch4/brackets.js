"use strict";
exports.__esModule = true;
var stack_1 = require("./stack");
var BracketChecker = /** @class */ (function () {
    function BracketChecker(inp) {
        this.input = inp;
    }
    BracketChecker.prototype.check = function () {
        var stackSize = this.input.length;
        var theStack = new stack_1.StackX(stackSize);
        for (var j = 0; j < this.input.length; j += 1) {
            var ch = this.input[j];
            switch (ch) {
                case '{':
                case '[':
                case '(':
                    theStack.push(ch);
                    break;
                case '}':
                case ']':
                case ')':
                    if (!theStack.isEmpty()) {
                        var chx = theStack.pop();
                        if ((ch === '}' && chx !== '{') ||
                            (ch === ']' && chx !== '[') ||
                            (ch === ')' && chx !== '(')) {
                            console.log("Error: " + ch + " at " + j);
                        }
                    }
                    else {
                        console.log("Error: stack is empty but we've got " + ch + " at " + j);
                    }
                    break;
                default:
                    break;
            }
        }
        if (!theStack.isEmpty()) {
            console.log("Error: missing right delimiter");
        }
    };
    return BracketChecker;
}());
var checkValue = "a{b(c]d}e";
console.log("When check " + checkValue + ", we will get:");
var checker = new BracketChecker(checkValue).check();
