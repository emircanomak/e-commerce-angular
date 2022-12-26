import { HttpClient } from '@angular/common/http';
import { CustomerService } from './../../services/customer.service';
import { Component } from '@angular/core';
import { data } from 'jquery';
import { IProductModel } from 'src/app/models/productModel';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  product:IProductModel[]=[]
  constructor(private customerService:CustomerService, private httpClient:HttpClient ){}

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    return this.customerService.getProducts().subscribe(data=>this.product=data)
  }
}
