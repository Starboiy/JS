let marks = [90,50,60,10,20,30];

const total = marks.reduce((sum, mark) => {
    return sum + mark;
  }
)

  console.log(total);
  