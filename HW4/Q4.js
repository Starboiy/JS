var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.id = id;
        return _this;
    }
    Student.prototype.getDetails = function () {
        console.log(this.name + " " + this.id);
    };
    Student.prototype.getRoles = function () {
        return "Student";
    };
    return Student;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(id, name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.id = id;
        return _this;
    }
    Teacher.prototype.getDetails = function () {
        console.log(this.name + " " + this.id);
    };
    Teacher.prototype.getRoles = function () {
        return "Teacher";
    };
    return Teacher;
}(Person));
var s = new Student(1, "Adi");
var t = new Teacher(1, "Mona");
s.getDetails();
console.log(s.getRoles());
t.getDetails();
console.log(t.getRoles());
