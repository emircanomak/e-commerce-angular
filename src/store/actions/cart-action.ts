import { IProductModel } from 'src/app/models/productModel';
import { Action } from "@ngrx/store";

export enum CartActionTypes{

    ADD_PRODUCT = "ADD_PRODUCT",
    REMOVE_PRODUCT = "REMOVE_PRODUCT",
    CLEAR_CART = "CLEAR_CART"
}

export class AddProduct implements Action {

    type: string = CartActionTypes.ADD_PRODUCT;

    constructor(public payload:IProductModel){}

}

export class RemoveProduct implements Action {

    type: string = CartActionTypes.REMOVE_PRODUCT;
    
    constructor(public payload:IProductModel){}
}

export class ClearProduct implements Action {

 type: string = CartActionTypes.CLEAR_CART;

 constructor(public payload:IProductModel){}
}

export type CartActions = AddProduct | RemoveProduct | ClearProduct;