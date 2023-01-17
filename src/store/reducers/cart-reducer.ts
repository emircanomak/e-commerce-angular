
import { CartActions, CartActionTypes } from './../actions/cart-action';
import { IProductModel } from './../../app/models/productModel';

export let initialState : IProductModel[]=[]

export let totalPrice : number=0

export function cartReducer(state=initialState, action:CartActions){

    switch(action.type){
        case CartActionTypes.ADD_PRODUCT:
            return[...state,action.payload]

            case CartActionTypes.REMOVE_PRODUCT:
                return state.filter(p=>p.id!==action.payload.id);

                case CartActionTypes.CLEAR_CART:
                    return state.filter(p=>p.id!==action.payload.id);

                    case CartActionTypes.TOTAL_PRICE:
                        return state.find(p=>p.price+=totalPrice)

            default:
                return state
    }           
}
