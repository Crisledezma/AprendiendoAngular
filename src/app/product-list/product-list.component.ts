import { Component, Input } from '@angular/core';

import { products, Product } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(){}

  products = [...products];

  share(name:string) {
    window.alert(`El producto ${name} ha sido compartido.`);
  }

  onNotify(price:number){
    window.alert(`El producto vale ${price}`)
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/