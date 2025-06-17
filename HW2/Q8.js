
try {
    let username = 123
    throw new Error("Username Must be a String")

} catch (error) {
    console.log(error.name + " : " + error.message);

} finally {
    console.log("Details are updated");

}

