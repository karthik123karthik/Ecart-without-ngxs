import { Component, OnInit} from '@angular/core';
import { data } from './data';
import { Product } from './Models';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  products!:Product[]

  isPremium = false

  constructor(){ }

  ngOnInit(): void {
      this.products = data;
  }

  togglePremium(){
    this.isPremium = !this.isPremium
  }

  filteredProducts(){
    return this.products.filter((pro) => pro.quantity > 0);
  }
}
