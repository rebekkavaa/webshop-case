import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getProduct(id:string): Observable<Product> {
    const subject = new Subject<Product>();

    this._httpClient.get('assets/mockData/products.json').subscribe((res: any) =>{
      subject.next(res.find(prod => prod.id == id));
      subject.complete();
    }, error => {
      subject.error(error);
    })

    return subject;
  }

  getProritizedProducts(): Observable<any> {
    return this._httpClient.get('assets/mockData/prioritized.json')
  }

  getProducts(category: string): Observable<any> {
    return this._httpClient.get('assets/mockData/products.json')
  }
}
