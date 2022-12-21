import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductModel } from '../models/productModel';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiUrl="http://localhost:3000/products"

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<IProductModel[]>{
    return this.httpClient.get<IProductModel[]>(this.apiUrl);
  }
}
