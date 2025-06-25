class Student{
    name:string;
    studentID:number;
    grade:string;
    address:string;

    constructor(name:string,studentID:number,grade:string,address:string){

        this.name=name;
        this.studentID=studentID;
        this.grade=grade;
        this.address=address;

    }

    displayInfo():void{

        console.log(this.name+" "+this.studentID+" "+this.grade+" "+this.address);
        
    }
}

const st = new Student("Adi",1,"A","Bambai");

st.displayInfo();