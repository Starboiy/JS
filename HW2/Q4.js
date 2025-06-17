function Payment(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve("Payment Completed");
        } else {
            reject("Payment Incomplete")
        }
    })
}

async function test() {
    
    try {
        const result = await Payment(true);
        console.log(result);
    } catch (error) {
        console.log(error);
        
    }
}

test();