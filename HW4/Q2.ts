class Student{
    name:string;
    studentID:number;

    constructor(name:string,studentID:number){
        this.name=name;
        this.studentID=studentID;
    }
}

class School{
    static totalStudents:number=0;
    studentList:Student[] =[];

    addStudent(student:Student){
        this.studentList.push(student);
        School.totalStudents++;

        console.log(this.studentList);
        
    }

    getTotalCount():void{
        console.log(School.totalStudents);
        
    }

}

const S1 = new Student("Adi",1);
const S2 = new Student("Anna",2);
const S3 = new Student("Pandu",3);

const S = new School();
S.addStudent(S1);
S.addStudent(S2);
S.addStudent(S3);

S.getTotalCount();