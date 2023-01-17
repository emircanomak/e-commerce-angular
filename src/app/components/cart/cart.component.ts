import { RemoveProduct, TotalPrice } from './../../../store/actions/cart-action';
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
  deleteProduct(product:IProductModel){
    this.store.dispatch(new RemoveProduct(product))
  }
 totalPrice(product:IProductModel){
    this.store.dispatch(new TotalPrice(product))
 }
 
}
