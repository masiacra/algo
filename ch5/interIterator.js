var Link = /** @class */ (function () {
    function Link(dd) {
        this.dData = dd;
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
    LinkList.prototype.getFirst = function () {
        return this.first;
    };
    LinkList.prototype.setFirst = function (f) {
        this.first = f;
    };
    LinkList.prototype.isEmpty = function () {
        return !this.first;
    };
    LinkList.prototype.getIterator = function () {
        return new ListIterator(this);
    };
    LinkList.prototype.displayList = function () {
        var current = this.first;
        while (current) {
            current.displayLink();
            current = current.next;
        }
    };
    return LinkList;
}());
var ListIterator = /** @class */ (function () {
    function ListIterator(list) {
        this.ourList = list;
        this.reset();
    }
    ListIterator.prototype.reset = function () {
        this.current = this.ourList.getFirst();
        this.previous = null;
    };
    ListIterator.prototype.atEnd = function () {
        return !this.current.next;
    };
    ListIterator.prototype.nextLink = function () {
        this.previous = this.current;
        this.current = this.current.next;
    };
    ListIterator.prototype.getCurrent = function () {
        return this.current;
    };
    ListIterator.prototype.insertAfter = function (dd) {
        var newLink = new Link(dd);
        if (this.ourList.isEmpty()) {
            this.ourList.setFirst(newLink);
            this.current = newLink;
        }
        else {
            newLink.next = this.current.next;
            this.current.next = newLink;
            this.nextLink();
        }
    };
    ListIterator.prototype.insertBefore = function (dd) {
        var newLink = new Link(dd);
        if (!this.previous) {
            newLink.next = this.ourList.getFirst();
            this.ourList.setFirst(newLink);
            this.reset();
        }
        else {
            newLink.next = this.previous.next;
            this.previous.next = newLink;
            this.current = newLink;
        }
    };
    ListIterator.prototype.deleteCurrent = function () {
        var value = this.current.dData;
        if (!this.previous) {
            this.ourList.setFirst(this.current.next);
            this.reset();
        }
        else {
            this.previous.next = this.current.next;
            if (this.atEnd()) {
                this.reset();
            }
            else {
                this.current = this.current.next;
            }
        }
        return value;
    };
    return ListIterator;
}());
var theList = new LinkList();
var iter1 = theList.getIterator();
iter1.insertAfter(20);
iter1.insertAfter(40);
iter1.insertAfter(80);
iter1.insertBefore(60);
theList.displayList();
console.log('-------');
iter1.reset();
iter1.nextLink();
console.log('after nextLink', iter1.getCurrent());
iter1.deleteCurrent();
console.log('After removing');
theList.displayList();
