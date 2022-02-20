import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { ProductSelected } from 'src/app/models/productSelected';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  productId: string;
  product: Product; 
  selectedSize: string; 
  lastSelectedSize: string;

  constructor(
    private readonly productsService: ProductsService, 
    private readonly checkoutService: CheckoutService, 
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.productId = params.id
    });

    this.initiateExpandable(); 

    this.productsService.getProduct(this.productId).subscribe(product => {
      this.product = product
    });
  }

  initiateExpandable(){
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }

  sizeSelected(ev: any){
    var target = ev.target;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;

    if(this.lastSelectedSize){
      document.getElementById(this.lastSelectedSize).classList.remove("is-light");
    }

    target.classList.add("is-light");
    this.lastSelectedSize = value; 
    this.selectedSize = value; 
  }

  addToCart(){
    this.checkoutService.addProduct(new ProductSelected(this.product, this.selectedSize))
  }
}
