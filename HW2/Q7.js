
let stock = 10;

function Cart(amt) {
    if (amt < stock) {
        throw new Error("Amount is less than Stock")
    }
}

function Cart1() {
    Cart(9);
}

function Cart2() {
    Cart1();
}

function Cart3() {
    try {
        Cart2();
    } catch (error) {
        console.log(error.name + " : " + error.message);

    }
}

Cart3();

