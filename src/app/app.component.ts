import { Component, OnInit} from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AddProducts } from './store/cart.action';
import {CartState} from './store/cart.state'
import { data } from './data';
import { Observable } from 'rxjs';
import { Product } from './Models';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  @Select(CartState.getProducts)products$!:Observable<Product[]>;
  @Select(CartState.getFilteredProducts)filteredProduct$!:Observable<Product[]>;

  isPremium = false

  constructor(private store:Store){ }

  ngOnInit(): void {
      this.store.dispatch(new AddProducts(data))
  }

  togglePremium(){
    this.isPremium = !this.isPremium
  }
}
