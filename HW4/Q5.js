var Student = /** @class */ (function () {
    function Student(name, Id) {
        this.isPresent = false;
        this.name = name;
        this.Id = Id;
    }
    Student.prototype.markAttendance = function () {
        this.isPresent = true;
        console.log(" " + this.name + " ID: " + this.Id + " marked as present.");
    };
    return Student;
}());
var S = new Student("Adi", 1);
S.markAttendance();
