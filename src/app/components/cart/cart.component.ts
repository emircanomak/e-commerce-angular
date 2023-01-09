import { Store } from '@ngrx/store';
import { IProductModel } from './../../models/productModel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart:IProductModel[]=[]

  constructor(private store:Store<any>){}

  ngOnInit():void {
    this.getCart()
  }
  getCart(){
    this.store.select("cartReducer").subscribe((state)=>(this.cart = state))
  }
}
