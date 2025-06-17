const students = [
    {name: "Alice", marks: 85},
    {name: "Bob", marks: 92},
    {name: "Charlie", marks: 78}
];

function filterMarks(students) {
    return students.filter((students) => {
        return students.marks > 80;
    });
}

// const filterMarks = students.filterMarks((students)=>{
// return students.marks>80})
console.log(filterMarks(students)); 