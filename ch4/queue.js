var Queue = /** @class */ (function () {
    function Queue(size) {
        this.maxSize = size;
        this.queArray = new Array(size);
        this.front = 0;
        this.rear = -1;
        this.nItems = 0;
    }
    Queue.prototype.insert = function (j) {
        if (this.rear === this.maxSize - 1) {
            this.rear = -1;
        }
        this.rear += 1;
        this.queArray[this.rear] = j;
        this.nItems += 1;
    };
    Queue.prototype.remove = function () {
        var temp = this.queArray[this.front];
        this.front += 1;
        if (this.front === this.maxSize) {
            this.front = 0;
        }
        this.nItems -= 1;
        return temp;
    };
    Queue.prototype.peekFront = function () {
        return this.queArray[this.front];
    };
    Queue.prototype.isEmpty = function () {
        return this.nItems === 0;
    };
    Queue.prototype.isFull = function () {
        return this.nItems === this.maxSize;
    };
    Queue.prototype.size = function () {
        return this.nItems;
    };
    Queue.prototype.display = function () {
        var i = this.front;
        var output = '';
        while (i !== this.rear) {
            output += String(this.queArray[i]) + " ";
            i += 1;
            if (i === this.maxSize) {
                i = 0;
            }
        }
        output += String(this.queArray[this.rear]);
        console.log("The queue is", output);
    };
    return Queue;
}());
var theQueue = new Queue(5);
theQueue.insert(10);
theQueue.insert(20);
theQueue.insert(30);
theQueue.insert(40);
theQueue.display();
theQueue.remove();
theQueue.remove();
theQueue.remove();
console.log("After removing");
theQueue.display();
theQueue.insert(50);
theQueue.insert(60);
theQueue.insert(70);
theQueue.insert(80);
console.log("After insertion");
theQueue.display();
