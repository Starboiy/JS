var Course = /** @class */ (function () {
    function Course(courseName, courseCode, instructor) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.instructor = instructor;
    }
    Course.prototype.displayInfo = function () {
        console.log(this.courseName + " " + this.courseCode + " " + this.instructor);
    };
    return Course;
}());
var C = new Course("JS", 1, "Nishka Shetty");
C.displayInfo();
