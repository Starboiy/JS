const marks = [90,50,60,10,20,70];

//... is array unpack karna
function findTopper(marks){
return Math.max(...marks)
}

console.log(findTopper(marks));
