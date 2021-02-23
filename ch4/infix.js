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
    StackX.prototype.peek = function () {
        return this.stackArray[this.top];
    };
    StackX.prototype.pop = function () {
        var value = this.stackArray[this.top];
        this.top -= 1;
        return value;
    };
    StackX.prototype.isEmpty = function () {
        return this.top === -1;
    };
    StackX.prototype.size = function () {
        return this.top + 1;
    };
    StackX.prototype.peekN = function (n) {
        return this.stackArray[n];
    };
    StackX.prototype.displayStack = function (s) {
        console.log(s);
        console.log("Stack (bottom -> top):");
        for (var j = 0; j < this.size(); j += 1) {
            console.log(this.peekN(j));
        }
    };
    return StackX;
}());
var InToPost = /** @class */ (function () {
    function InToPost(input) {
        this.output = "";
        this.input = input;
        this.theStack = new StackX(input.length);
    }
    InToPost.prototype.doTrans = function () {
        for (var j = 0; j < this.input.length; j += 1) {
            var ch = this.input[j];
            this.theStack.displayStack("For " + ch + ":");
            switch (ch) {
                case "+":
                case "-": {
                    this.gotOper(ch, 1);
                    break;
                }
                case "*":
                case "/": {
                    this.gotOper(ch, 2);
                    break;
                }
                case "(": {
                    this.theStack.push(ch);
                    break;
                }
                case ")": {
                    this.gotParen(ch);
                    break;
                }
                default: {
                    this.output += ch;
                    break;
                }
            }
        }
        while (!this.theStack.isEmpty()) {
            this.theStack.displayStack("While ");
            this.output += this.theStack.pop();
        }
        this.theStack.displayStack("End");
        return this.output;
    };
    InToPost.prototype.gotOper = function (opThis, prec1) {
        while (!this.theStack.isEmpty()) {
            var opTop = this.theStack.pop();
            if (opTop === "(") {
                this.theStack.push(opTop);
                break;
            }
            else {
                var prec2 = void 0;
                if (opTop === "+" || opTop === "-") {
                    prec2 = 1;
                }
                else {
                    prec2 = 2;
                }
                if (prec2 < prec1) {
                    this.theStack.push(opTop);
                    break;
                }
                else {
                    this.output += opTop;
                }
            }
        }
        this.theStack.push(opThis);
    };
    InToPost.prototype.gotParen = function (_) {
        while (!this.theStack.isEmpty()) {
            var chx = this.theStack.pop();
            if (chx === "(") {
                break;
            }
            else {
                this.output += chx;
            }
        }
    };
    return InToPost;
}());
console.log("Enter infix:");
var tst = "A*(B+C)-D/(E+F)";
console.log("Got", tst);
var theTrans = new InToPost(tst);
var output = theTrans.doTrans();
console.log("Postfix is", output);
