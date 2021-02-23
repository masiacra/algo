var Params = /** @class */ (function () {
    function Params(nn, ra) {
        this.n = nn;
        this.returnAddress = ra;
    }
    return Params;
}());
var StackX = /** @class */ (function () {
    function StackX(s) {
        this.maxSize = s;
        this.stackArray = new Array(s);
        this.top = -1;
    }
    StackX.prototype.push = function (p) {
        this.top += 1;
        this.stackArray[this.top] = p;
    };
    StackX.prototype.pop = function () {
        var value = this.stackArray[this.top];
        this.top -= 1;
        return value;
    };
    StackX.prototype.peek = function () {
        return this.stackArray[this.top];
    };
    return StackX;
}());
var counter = 1;
var StackTriangleApp = /** @class */ (function () {
    function StackTriangleApp() {
    }
    StackTriangleApp.recTriangle = function () {
        StackTriangleApp.theStack = new StackX(1000);
        StackTriangleApp.codePart = 1;
        while (StackTriangleApp.step() === false) {
        }
    };
    StackTriangleApp.step = function () {
        switch (StackTriangleApp.codePart) {
            case 1: {
                StackTriangleApp.theseParams = new Params(StackTriangleApp.theNumber, 6);
                StackTriangleApp.theStack.push(StackTriangleApp.theseParams);
                StackTriangleApp.codePart = 2;
                return false;
            }
            case 2: {
                StackTriangleApp.theseParams = StackTriangleApp.theStack.peek();
                if (StackTriangleApp.theseParams.n === 1) {
                    StackTriangleApp.theAnswer = 1;
                    StackTriangleApp.codePart = 5;
                }
                else {
                    StackTriangleApp.codePart = 3;
                }
                return false;
            }
            case 3: {
                var newParams = new Params(StackTriangleApp.theseParams.n - 1, 4);
                StackTriangleApp.theStack.push(newParams);
                StackTriangleApp.codePart = 2;
                return false;
            }
            case 4: {
                StackTriangleApp.theseParams = StackTriangleApp.theStack.peek();
                StackTriangleApp.theAnswer = StackTriangleApp.theAnswer + StackTriangleApp.theseParams.n;
                StackTriangleApp.codePart = 5;
                return false;
            }
            case 5: {
                StackTriangleApp.theseParams = StackTriangleApp.theStack.pop();
                StackTriangleApp.codePart = StackTriangleApp.theseParams.returnAddress;
                return false;
            }
            case 6: {
                return true;
            }
        }
    };
    return StackTriangleApp;
}());
var num = 5;
console.log("Entered number", num);
StackTriangleApp.theNumber = num;
StackTriangleApp.recTriangle();
console.log("Triangle", StackTriangleApp.theAnswer);
