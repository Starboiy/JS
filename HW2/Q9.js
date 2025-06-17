class InvalidCouponCode extends Error {
    constructor(message) {
        super(message);
        this.name = "Invalid Coupon"
    }
}

let cost = 999;

try {
    if (cost < 1000) {
        throw new InvalidCouponCode("Not Applicable")
    }
} catch (error) {
    console.log(error.name + " : " + error.message);

}

