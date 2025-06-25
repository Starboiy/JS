abstract class Institute {
    abstract getInstituteType() :string;
}

interface Management {
    addStudent(student:Student):void;
    removeStudent(student:Student):void;

}

class Student{
    name:string;
    id:number;

    constructor( name:string,id:number){
        this.name=name;
        this.id=id;
    }
}

class College extends Institute implements Management{
    students:Student[] = [];
    nextID:number = 1;
    
    getInstituteType(): string {
        return "College"
    }

    addStudent(student: Student): void {
        
        student.id = this.nextID++;
        this.students.push(student);
        console.log(""+student.name+" is added with id"+student.id +"");
        
    }

    removeStudent(student: Student): void {

        this.students = this.students.filter((currentStudent)=>{
            currentStudent.id !==student.id;
        });
        console.log(`${student.name} with ID ${student.id} removed.`);
    }

}

const S1 = new Student("Aditya",1);
const S2 = new Student("John",2);

const C = new College();

C.addStudent(S1);
C.addStudent(S2);
C.removeStudent(S1);
