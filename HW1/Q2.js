let CalculateGrade = (score) =>{

    if(score >=90) return "A";
    else if(score >=80) return "B";
    else if(score >=60) return "C";
    else return "F";

};

console.log(CalculateGrade(91));