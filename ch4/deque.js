var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Deque = /** @class */ (function () {
    function Deque(s) {
        this.maxSize = s;
        this.dequeArr = new Array(s);
        this.left = -1;
        this.right = -1;
        this.nElems = 0;
    }
    Deque.prototype.insertLeft = function (elem) {
        if (this.isFull()) {
            console.log("Sorry, we can't insert in full deque!");
            return;
        }
        if (this.left === -1) {
            this.left = this.maxSize;
        }
        this.left -= 1;
        this.dequeArr[this.left] = elem;
        this.nElems += 1;
    };
    Deque.prototype.insertRight = function (elem) {
        if (this.isFull()) {
            console.log("Sorry, we can't insert in full deque!");
            return;
        }
        if (this.right === this.maxSize - 1) {
            this.right = -1;
        }
        this.right += 1;
        this.dequeArr[this.right] = elem;
        this.nElems += 1;
    };
    Deque.prototype.removeLeft = function () {
        if (this.isEmpty()) {
            console.log("Sorry we can't remove from empty deque");
            return;
        }
        var value = this.dequeArr[this.left];
        this.left += 1;
        if (this.left === this.maxSize) {
            this.left = 0;
        }
        this.nElems -= 1;
        return value;
    };
    Deque.prototype.removeRight = function () {
        if (this.isEmpty()) {
            console.log("Sorry we can't remove from empty deque");
            return;
        }
        this.nElems -= 1;
        var value = this.dequeArr[this.right];
        this.right -= 1;
        if (this.right === -1) {
            this.right = this.maxSize - 1;
        }
        return value;
    };
    Deque.prototype.isEmpty = function () {
        return this.nElems === 0;
    };
    Deque.prototype.isFull = function () {
        return this.maxSize === this.nElems;
    };
    Deque.prototype.size = function () {
        return this.nElems;
    };
    Deque.prototype.display = function () {
        if (this.isEmpty()) {
            console.log("Deque is empty");
            return;
        }
        var i = this.left;
        var output = "Deque from left to right: ";
        while (i != this.right) {
            output += String(this.dequeArr[i]) + " ";
            i += 1;
            if (i === this.maxSize) {
                i = 0;
            }
        }
        output += String(this.dequeArr[i]);
        console.log(output);
    };
    return Deque;
}());
var Stack = /** @class */ (function (_super) {
    __extends(Stack, _super);
    function Stack(s) {
        var _this = _super.call(this, s) || this;
        _this.hasLeft = false;
        return _this;
    }
    Stack.prototype.push = function (elem) {
        if (this.hasLeft) {
            this.insertRight(elem);
            return;
        }
        this.insertLeft(elem);
        this.hasLeft = true;
    };
    Stack.prototype.peek = function () {
        var value = this.removeRight();
        this.insertRight(value);
        return value;
    };
    Stack.prototype.pop = function () {
        return this.removeRight();
    };
    return Stack;
}(Deque));
var deque = new Deque(5);
console.log("Is empty?", deque.isEmpty());
deque.insertLeft(1);
deque.insertLeft(2);
deque.insertLeft(3);
deque.insertRight(4);
deque.insertRight(5);
console.log("Is full?", deque.isFull());
deque.display();
console.log("removing ----");
deque.removeLeft();
deque.display();
deque.removeLeft();
deque.display();
deque.removeRight();
deque.display();
console.log("test of Stack");
var theStack = new Stack(10);
console.dir(theStack);
theStack.push(20);
console.dir(theStack);
theStack.push(40);
theStack.push(60);
theStack.push(80);
console.log("see here");
console.dir(theStack);
console.log("Peek:", theStack.peek());
theStack.display();
console.log("display stack");
console.log("stack value", theStack.pop());
console.log("After pop", theStack);
console.log("stack value", theStack.pop());
console.log("stack value", theStack.pop());
console.log("stack value", theStack.pop());
console.dir(theStack);
