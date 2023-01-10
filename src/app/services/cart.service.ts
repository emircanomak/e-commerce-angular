import { IProductModel } from './../models/productModel';
import { totalPrice } from './../../store/reducers/cart-reducer';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  totalPrice:number=0
  constructor() { }

  cartTotalPrice(product:IProductModel){
    this.totalPrice += product.price
  }
}
