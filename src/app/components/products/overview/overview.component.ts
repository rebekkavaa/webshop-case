import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  products: Product[] = []; 

  constructor(
    private readonly productsService: ProductsService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(res=> {
      this.productsService.getProducts(res.category).subscribe(products =>{
        this.products = products;
      })
    })
  }

  navigateToDetails(id){
    this.router.navigate(['/details'], { queryParams: { id: id }})
  }
}
