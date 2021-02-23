var PriorityQueue = /** @class */ (function () {
    function PriorityQueue(s) {
        this.maxSize = s;
        this.queArray = new Array(s);
        this.nElems = 0;
    }
    PriorityQueue.prototype.insert = function (j) {
        this.queArray[this.nElems] = j;
        this.nElems += 1;
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.nElems === 0;
    };
    PriorityQueue.prototype.isFull = function () {
        return this.nElems === this.maxSize;
    };
    PriorityQueue.prototype.remove = function () {
        var minPos = 0;
        var minValue = this.queArray[minPos];
        for (var i = 1; i < this.nElems; i += 1) {
            if (minValue > this.queArray[i]) {
                minValue = this.queArray[i];
                minPos = i;
            }
        }
        for (var i = minPos; i < this.nElems - 1; i += 1) {
            this.queArray[i] = this.queArray[i + 1];
        }
        this.nElems -= 1;
        return minValue;
    };
    PriorityQueue.prototype.peekMin = function () {
        var minValue = this.queArray[0];
        for (var i = 1; i < this.nElems; i += 1) {
            if (minValue > this.queArray[i]) {
                minValue = this.queArray[i];
            }
        }
        return minValue;
    };
    return PriorityQueue;
}());
var thePQ = new PriorityQueue(5);
thePQ.insert(30);
thePQ.insert(50);
thePQ.insert(10);
thePQ.insert(40);
thePQ.insert(20);
while (!thePQ.isEmpty()) {
    var item = thePQ.remove();
    console.log(item);
}
