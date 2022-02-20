import { Component, OnInit } from '@angular/core';
import { ProductSelected } from 'src/app/models/productSelected';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private readonly checkoutService: CheckoutService
  ) { }

  expandBasket(){
    if(document.getElementsByClassName("shopping-cart")[0].classList.contains("open"))
    {
      this.closeCart();
    } else {
      this.openCart();
    }
  }

  onDeleteItem(product: ProductSelected){
    this.checkoutService.removeProduct(product);
    this.closeCart(); 
  }

  closeCart(){
    document.getElementsByClassName("shopping-cart")[0].classList.remove("open");
  }

  openCart(){
    document.getElementsByClassName("shopping-cart")[0].classList.add("open");
  }

  get products(): ProductSelected[] {
    return this.checkoutService.products;
  }

}
