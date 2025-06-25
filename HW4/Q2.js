var Student = /** @class */ (function () {
    function Student(name, studentID) {
        this.name = name;
        this.studentID = studentID;
    }
    return Student;
}());
var School = /** @class */ (function () {
    function School() {
        this.studentList = [];
    }
    School.prototype.addStudent = function (student) {
        this.studentList.push(student);
        School.totalStudents++;
        console.log(this.studentList);
    };
    School.prototype.getTotalCount = function () {
        console.log(School.totalStudents);
    };
    School.totalStudents = 0;
    return School;
}());
var S1 = new Student("Adi", 1);
var S2 = new Student("Anna", 2);
var S3 = new Student("Pandu", 3);
var S = new School();
S.addStudent(S1);
S.addStudent(S2);
S.addStudent(S3);
S.getTotalCount();
