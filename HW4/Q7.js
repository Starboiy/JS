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
var Institute = /** @class */ (function () {
    function Institute() {
    }
    return Institute;
}());
var Student = /** @class */ (function () {
    function Student(name, id) {
        this.name = name;
        this.id = id;
    }
    return Student;
}());
var College = /** @class */ (function (_super) {
    __extends(College, _super);
    function College() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.students = [];
        _this.nextID = 1;
        return _this;
    }
    College.prototype.getInstituteType = function () {
        return "College";
    };
    College.prototype.addStudent = function (student) {
        student.id = this.nextID++;
        this.students.push(student);
        console.log("" + student.name + " is added with id" + student.id + "");
    };
    College.prototype.removeStudent = function (student) {
        this.students = this.students.filter(function (currentStudent) {
            currentStudent.id !== student.id;
        });
        console.log("".concat(student.name, " with ID ").concat(student.id, " removed."));
    };
    return College;
}(Institute));
var S1 = new Student("Aditya", 1);
var S2 = new Student("John", 2);
var C = new College();
C.addStudent(S1);
C.addStudent(S2);
C.removeStudent(S1);
