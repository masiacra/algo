var BackpackCalculator = /** @class */ (function () {
    function BackpackCalculator(subjects, mass) {
        this.subjects = subjects;
        this.mass = mass;
        this.backpack = [];
    }
    BackpackCalculator.prototype.snack = function (m, index) {
        if (m === 0) {
            return true;
        }
        for (var i = index; i < this.subjects.length; i += 1) {
            var subject = this.subjects[i];
            if (this.snack(m - subject, i + 1)) {
                this.backpack.push(subject);
                return true;
            }
        }
        return false;
    };
    BackpackCalculator.prototype.calculate = function () {
        this.snack(this.mass, 0);
    };
    BackpackCalculator.prototype.displayBackpack = function () {
        console.log("backpack:", this.backpack);
    };
    return BackpackCalculator;
}());
var items = [11, 8, 7, 6, 5];
var backpackCalculator = new BackpackCalculator(items, 20);
backpackCalculator.calculate();
backpackCalculator.displayBackpack();
