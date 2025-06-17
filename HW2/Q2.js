
class Product{
    name;
    static productID = 1;
    price;

    constructor(name,price){
        this.name=name;
        this.price=price;
    }

    displayDetails(){
        console.log(this.name +"  " + this.price);
    }

}

const prod = new Product("Samsung",10000 );

prod.displayDetails();
console.log(Product.productID);
