import { Injectable } from '@angular/core';
import { ProductSelected } from '../models/productSelected';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

    private _products: ProductSelected[] = [];

    addProduct(product: ProductSelected){
        this.products.push(product)
    }

    removeProduct(product: ProductSelected){
        this.products = this.products.filter(prod => prod.checkoutId != product.checkoutId)
    }

    public get products() : ProductSelected[] {
        return this._products
    }

    public set products(products : ProductSelected[]) {
        this._products = products;
    }   
}