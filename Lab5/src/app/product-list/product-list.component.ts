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
  products = products;
  categories = categories;
  filteredProducts : Product[] = [...products];
  selectedCategory : Category = categories.filter(c => c.name === 'All')[0];
  constructor(private router: Router) { }

  share(url: string) {
    window.alert('The product has been shared!');
    url += '&text=buy this cool product';
    window.location.href = 'https://t.me/share/url?url='+url;
  }

  deleteItem(id : number) {
    this.products = this.products.filter(p => p.id != id)
    this.filteredProducts = this.filteredProducts.filter(p => p.id != id)
    this.filterItems()
  }

  setCurrentCategory(category : Category) {
    this.selectedCategory = category;
  }
  filterItems() {
    if (this.selectedCategory === categories.filter(category => {
      return category.name === 'All'
    })[0]) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => {
        return product.category === this.selectedCategory;
      })
    }
  }

  addLikes(id : number) {
    products.filter(p => p.id === id).map(p => p.likes += 1)
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