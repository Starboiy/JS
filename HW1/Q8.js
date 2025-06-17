const students = [
    {name: "Alice", marks: 85},
    {name: "Bob", marks: 92},
    {name: "Charlie", marks: 78}
];

const TotaMarks = students.reduce((sum,students)=>{
return  sum + students.marks
},0)

console.log(TotaMarks);
