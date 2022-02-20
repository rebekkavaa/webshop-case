import { Product } from "./product";

export class ProductSelected {
    id: string; 
    name: string;
    price: string; 
    size: string; 
    checkoutId: string;

    constructor(product: Product, size: string) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.size = size;
        this.checkoutId = `${product.id}-${size}-${new Date().getTime()}`
    }
}