"use strict";
exports.__esModule = true;
var Link = /** @class */ (function () {
    function Link(id, dd) {
        this.iData = id;
        this.dData = dd;
        this.next = null;
        this.displayLink = this.displayLink.bind(this);
    }
    Link.prototype.displayLink = function () {
        console.log("{" + this.iData + ", " + this.dData + "}");
    };
    return Link;
}());
exports.Link = Link;
