let marks = [90,50,60,10,20,30];

const grades = marks.map((marks) => {
    if (marks >= 90) return 'A';
    else if (marks >= 75) return 'B';
    else if (marks >= 60) return 'C';
    else return 'F';
  });

  console.log(grades);
  