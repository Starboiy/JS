
function StockQuantifier(stock) {
    try {
        if (stock < 1000) {
            throw new Error("Stock is less")
        } else {
            console.log("Stock is Present");
        }
    } catch (error) {
        console.log(error.name + " : " + error.message);

    }
}

StockQuantifier(999);
StockQuantifier(1000);
