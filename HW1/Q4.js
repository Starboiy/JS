marks = [90,50,60,10,20,30];

function filterPassedStudents(marks){
    return marks.filter((mark) => { 
        return mark > 35;
    })
}
console.log(filterPassedStudents(marks));
