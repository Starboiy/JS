class Course{
    courseName:string;
    courseCode:number;
    instructor:string;

    constructor(   courseName:string,courseCode:number,instructor:string){

        this.courseName=courseName;
        this.courseCode=courseCode;
        this.instructor=instructor;
    }

    displayInfo():void{

        console.log(this.courseName+" "+this.courseCode+" "+this.instructor);
    }
}

const C = new Course("JS",1,"Nishka Shetty");
C.displayInfo();