
function processPayment(){
    throw new Error("Payment Not Successful");
}

try {
    processPayment();
} catch (error) {
    console.log("Error :",error.message);
    
}

