function getStudentInfo<I>(data:I):I{
    return data;
    }

    console.log(getStudentInfo<string>("Adi"));
    console.log(getStudentInfo<number>(1));
    