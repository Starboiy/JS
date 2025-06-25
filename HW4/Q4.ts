abstract class Person{
    abstract getDetails():void;
    abstract getRoles():string;
}

class Student extends Person{
 id:number;
 name:string;

 constructor( id:number,name:string){
    super();
    this.name=name;
    this.id=id;
 }
    
    getDetails(): void {
        console.log(this.name+" "+this.id);
        
    }

    getRoles(): string{
        return "Student";
    }
}

class Teacher extends Person{
 id:number;
 name:string;

 constructor( id:number,name:string){
    super();
    this.name=name;
    this.id=id;
 }
    
    getDetails(): void {
        console.log(this.name+" "+this.id);
        
    }

    getRoles(): string{
        return "Teacher";
    }
}
const s = new Student(1,"Adi");
const t = new Teacher(1,"Mona");

s.getDetails();
console.log(s.getRoles());

t.getDetails();
console.log(t.getRoles());
 





