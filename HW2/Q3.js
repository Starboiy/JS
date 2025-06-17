function Payment(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve("Payment Completed");
        } else {
            reject("Payment Incomplete")
        }
    })
}

Payment(true).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

Payment(false).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})