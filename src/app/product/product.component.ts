import { Component, Input} from '@angular/core';
import { Product } from '../Models';
import { Store } from '@ngxs/store';
import { IncreaseQuantity, DecreaseQuantity } from '../store/cart.action';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
   @Input() product!:Product

   @Input()isPremium!:boolean

   constructor(private store:Store){}

   
   increaseQuantity(){  
    this.store.dispatch(new IncreaseQuantity(this.product.id));
   }

   decreaseQuantity(){
    this.store.dispatch(new DecreaseQuantity(this.product.id))
   }



}
