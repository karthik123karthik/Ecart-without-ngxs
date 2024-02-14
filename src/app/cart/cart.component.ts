import { Component, Input} from '@angular/core';
import { Product } from '../Models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
   @Input()products!:Product[]
   @Input()isPremium!:boolean


   getTotal(){
     if(this.isPremium){
       return this.products.reduce((total, product)=>total + (product.price * product.quantity), 0).toFixed(2)
     }
     else{
       return this.products.reduce((total, product)=>total + (product.discountedprice * product.quantity), 0).toFixed(2)
     }
   }

}
