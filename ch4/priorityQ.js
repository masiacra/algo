var PriorityQ = /** @class */ (function () {
    function PriorityQ(s) {
        this.maxSize = s;
        this.queArray = new Array(s);
        this.nItems = 0;
    }
    PriorityQ.prototype.insert = function (item) {
        var j;
        if (this.nItems === 0) {
            this.queArray[0] = item;
            this.nItems += 1;
        }
        else {
            for (j = this.nItems - 1; j >= 0; j -= 1) {
                if (item > this.queArray[j]) {
                    this.queArray[j + 1] = this.queArray[j];
                }
                else {
                    break;
                }
            }
            this.queArray[j + 1] = item;
            this.nItems += 1;
        }
    };
    PriorityQ.prototype.remove = function () {
        this.nItems -= 1;
        return this.queArray[this.nItems];
    };
    PriorityQ.prototype.peekMin = function () {
        return this.queArray[this.nItems - 1];
    };
    PriorityQ.prototype.isEmpty = function () {
        return this.nItems === 0;
    };
    PriorityQ.prototype.isFull = function () {
        return this.nItems === this.maxSize;
    };
    return PriorityQ;
}());
var thePQ = new PriorityQ(5);
thePQ.insert(30);
thePQ.insert(50);
thePQ.insert(10);
thePQ.insert(40);
thePQ.insert(20);
while (!thePQ.isEmpty()) {
    var item = thePQ.remove();
    console.log(item);
}
