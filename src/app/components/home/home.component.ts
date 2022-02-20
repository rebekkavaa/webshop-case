import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../models/product'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  prioritizedProducts: Product[] = []; 

  constructor(
    private readonly productsService: ProductsService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.productsService.getProritizedProducts().subscribe(products =>{
      this.prioritizedProducts = products;
    })
  }

  navigateToDetails(id){
    this.router.navigate(['/details'], { queryParams: { id: id }})
  }
}
