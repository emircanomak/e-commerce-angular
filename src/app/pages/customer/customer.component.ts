import { AddProduct } from './../../../store/actions/cart-action';
import { Store } from '@ngrx/store';
import { CustomerService } from './../../services/customer.service';
import { Component } from '@angular/core';
import { IProductModel } from 'src/app/models/productModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  filterText;
  product:IProductModel[]=[]
  constructor(private customerService:CustomerService, private activatedRoute:ActivatedRoute, private store:Store<any>){}

  ngOnInit():void{
    this.getProducts();
  }

  getProducts(){
    return this.customerService.getProducts().subscribe(data=>this.product=data)
  }

  addToCart(products:IProductModel){
    this.store.dispatch(new AddProduct(products))
    alert("Sepete Eklendi")
  }

}
