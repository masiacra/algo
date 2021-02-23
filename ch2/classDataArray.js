var Person = /** @class */ (function () {
    function Person(last, first, a) {
        this.lastName = last;
        this.firstName = first;
        this.age = a;
    }
    Person.prototype.displayPerson = function () {
        console.log(" Last name: " + this.lastName);
        console.log(" First name: " + this.firstName);
        console.log(" Age: " + this.age);
    };
    Person.prototype.getLast = function () {
        return this.lastName;
    };
    return Person;
}());
var ClassDataArray = /** @class */ (function () {
    function ClassDataArray(max) {
        this.a = new Array(max);
        this.nElems = 0;
    }
    ClassDataArray.prototype.find = function (searchName) {
        var j;
        for (j = 0; j < this.nElems; j += 1) {
            if (this.a[j].getLast() === searchName) {
                break;
            }
        }
        if (j === this.nElems) {
            return null;
        }
        return this.a[j];
    };
    ClassDataArray.prototype.insert = function (last, first, age) {
        this.a[this.nElems] = new Person(last, first, age);
        this.nElems += 1;
    };
    ClassDataArray.prototype["delete"] = function (searchName) {
        var j;
        for (j = 0; j < this.nElems; j += 1) {
            if (this.a[j].getLast() === searchName) {
                break;
            }
        }
        if (j === this.nElems) {
            return false;
        }
        for (var k = j; k < this.nElems; k += 1) {
            this.a[k] = this.a[k + 1];
        }
        this.nElems -= 1;
        return true;
    };
    ClassDataArray.prototype.displayA = function () {
        for (var j = 0; j < this.nElems; j += 1) {
            this.a[j].displayPerson();
        }
    };
    return ClassDataArray;
}());
var arr = new ClassDataArray(100);
arr.insert("Evans", "Patty", 24);
arr.insert("Smith", "Lorraine", 37);
arr.insert("Yee", "Tom", 43);
arr.insert("Adams", "Henry", 63);
arr.insert("Hashimoto", "Sato", 21);
arr.insert("Stimson", "Henry", 29);
arr.insert("Velasquez", "Jose", 72);
arr.insert("Lamarque", "Henry", 54);
arr.insert("Vang", "Minh", 22);
arr.insert("Creswell", "Lucinda", 18);
arr.displayA();
var searchKey = "Stimson";
var found = arr.find(searchKey);
if (found) {
    console.log("Found: ");
    found.displayPerson();
}
else {
    console.log("Can't find " + searchKey);
}
console.log("Deleting Smith, Yee and Creswell!");
arr["delete"]("Smith");
arr["delete"]("Yee");
arr["delete"]("Creswell");
arr.displayA();
