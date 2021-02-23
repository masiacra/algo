var Link = /** @class */ (function () {
    function Link(dd) {
        this.dData = dd;
        this.next = null;
    }
    Link.prototype.displayLink = function () {
        console.log(this.dData);
    };
    return Link;
}());
var LinkList = /** @class */ (function () {
    function LinkList() {
        this.first = null;
    }
    LinkList.prototype.isEmpty = function () {
        return !this.first;
    };
    LinkList.prototype.insertFirst = function (link) {
        if (this.isEmpty()) {
            this.first = link;
        }
        else {
            var current = this.first;
            while (current.next) {
                current = current.next;
            }
            current.next = link;
        }
    };
    LinkList.prototype.deleteFirst = function () {
        var link = this.first;
        this.first = this.first.next;
        return link;
    };
    LinkList.prototype.displayList = function () {
        var current = this.first;
        while (current) {
            current.displayLink();
            current = current.next;
        }
    };
    LinkList.prototype.find = function (key) {
        var current = this.first;
        while (current) {
            if (current.dData = key) {
                break;
            }
            current = current.next;
        }
        return current;
    };
    LinkList.prototype.deleteLink = function (key) {
        var current = this.first;
        var previous = null;
        while (current) {
            if (current.dData === key) {
                break;
            }
            previous = current;
            current = current.next;
        }
        if (!current) {
            return null;
        }
        if (current === this.first) {
            this.first = current.next;
        }
        else {
            previous.next = current.next;
        }
        return current;
    };
    return LinkList;
}());
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.list = new LinkList();
    }
    PriorityQueue.prototype.insert = function (j) {
        this.list.insertFirst(new Link(j));
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.list.isEmpty();
    };
    PriorityQueue.prototype.remove = function () {
        var current = this.list.first;
        var min = current.dData;
        while (current) {
            if (current.dData < min) {
                min = current.dData;
            }
            current = current.next;
        }
        return this.list.deleteLink(min).dData;
    };
    PriorityQueue.prototype.peekMin = function () {
        var current = this.list.first;
        var min = current.dData;
        while (current) {
            if (current.dData < min) {
                min = current.dData;
            }
            current = current.next;
        }
        return min;
    };
    return PriorityQueue;
}());
var thePQ = new PriorityQueue();
thePQ.insert(30);
thePQ.insert(50);
thePQ.insert(10);
thePQ.insert(40);
thePQ.insert(20);
while (!thePQ.isEmpty()) {
    var item = thePQ.remove();
    console.log(item);
}
