var Student = /** @class */ (function () {
    function Student(name, studentID, grade, address) {
        this.name = name;
        this.studentID = studentID;
        this.grade = grade;
        this.address = address;
    }
    Student.prototype.displayInfo = function () {
        console.log(this.name + " " + this.studentID + " " + this.grade + " " + this.address);
    };
    return Student;
}());
var st = new Student("Adi", 1, "A", "Bambai");
st.displayInfo();
