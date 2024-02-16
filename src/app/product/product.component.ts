import { Component, Input} from '@angular/core';
import { Product } from '../Models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
   @Input() product!:Product
   @Input()isPremium!:boolean

   constructor(){}

   
   increaseQuantity(){  
     this.product.quantity = this.product.quantity + 1;
   }

   decreaseQuantity(){
     if(this.product.quantity === 0)return;
     this.product.quantity = this.product.quantity - 1;
   }



}
