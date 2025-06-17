function calculateCost(discount=0.5,...prices){

    const Total = prices.reduce((sum,price)=>{
         return sum + price;
    },0);

    const DiscountTotal = Total - Total *discount;
    return DiscountTotal;
}

console.log(calculateCost(undefined,100,200,300));
