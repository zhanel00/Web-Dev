import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {Category, categories} from '../categories'
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedCategory : Category | undefined;
  products = products;
  categories = categories;
  filteredProducts : Product[] = [];
  constructor(private router: Router) { }

  share(url: string) {
    window.alert('The product has been shared!');
    url += '&text=buy this cool product';
    window.location.href = 'https://t.me/share/url?url='+url;
  }

  setCurrentCategory(category : Category) {
    this.selectedCategory = category;
  }
  filterItems() {
    this.filteredProducts = products.filter(product => {
      return product.category === this.selectedCategory;
    })
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