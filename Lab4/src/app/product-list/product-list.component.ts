import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  constructor(private router: Router) { }

  share(url: string) {
    window.alert('The product has been shared!');
    url += '&text=buy this cool product';
    window.location.href = 'https://t.me/share/url?url='+url;
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/