// 📘 Define the Attendance interface
interface Attendance {
  markAttendance(): void;
}
class Student implements Attendance {
  name: string;
  Id: number;
  isPresent: boolean = false;

  constructor(name: string,Id: number) {
    this.name = name;
    this.Id = Id;
  }

  markAttendance(): void {
    
    this.isPresent = true;
    console.log(" "+this.name+ " ID: " +this.Id+ " marked as present.");
  }
}
const S = new Student("Adi",1);
S.markAttendance();
