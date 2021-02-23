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
    ParsePost.prototype.doParse = function () {
        this.theStack = new StackX(20);
        var ch;
        var j;
        var num1;
        var num2;
        var interAns;
        for (j = 0; j < this.input.length; j += 1) {
            ch = this.input[j];
            this.theStack.displayStack(" " + ch + " ");
            if (ch >= "0" && ch <= "9") {
                this.theStack.push(Number(ch));
            }
            else {
                num2 = this.theStack.pop();
                num1 = this.theStack.pop();
                switch (ch) {
                    case "+": {
                        interAns = num1 + num2;
                        break;
                    }
                    case "-": {
                        interAns = num1 - num2;
                        break;
                    }
                    case "*": {
                        interAns = num1 * num2;
                        break;
                    }
                    case "/": {
                        interAns = num1 / num2;
                        break;
                    }
                    default:
                        interAns = 0;
                }
                this.theStack.push(interAns);
            }
        }
        interAns = this.theStack.pop();
        return interAns;
    };
    return ParsePost;
}());
var parsePost = new ParsePost("345+*612+/-");
console.log("Answer:", parsePost.doParse());
