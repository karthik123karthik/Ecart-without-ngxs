import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector} from '@ngxs/store';
import { AddProducts, IncreaseQuantity, DecreaseQuantity} from './cart.action';
import { Product } from '../Models';

export interface CartStateModel{
  Products:Product[]
}

@State<CartStateModel>({
  name: 'cart',
  defaults:{
    Products:[]
  }
})
@Injectable()
export class CartState {

  @Action(AddProducts)
  addProducts(ctx:StateContext<CartStateModel>, Products:AddProducts){
      let state = ctx.getState();

      ctx.setState({
        ...state,
        Products: Products.Products
      })
  }

  @Selector()
  static getProducts(state:CartStateModel):Product[]{
    return state.Products;
  }

  @Selector()
  static getFilteredProducts(state:CartStateModel):Product[]{
    return state.Products.filter((product) => product.quantity > 0)
  }

  @Action(IncreaseQuantity)
  IncreaseQuantity(ctx: StateContext<CartStateModel>, {id}:IncreaseQuantity){
     let state = ctx.getState()
     let updatedProducts = state.Products.map((product) => (product.id === id)?{...product, quantity:product.quantity+1}: product)
     ctx.setState({
      ...state,
      Products: updatedProducts
     })
    }

  @Action(DecreaseQuantity)
  DecreaseQuantity(ctx: StateContext<CartStateModel>, {id}:DecreaseQuantity){
      let state = ctx.getState()
      let updatedProducts = state.Products.map((product) => (product.id === id)?{...product, quantity:product.quantity>0? product.quantity-1: 0}: product)
     ctx.setState({
      ...state,
      Products: updatedProducts
     })
     
  }

}