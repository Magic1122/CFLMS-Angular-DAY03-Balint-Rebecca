import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = []

  constructor() { }

  addItem(item) {
    this.cartItems.push(item)
    console.log('ITEMS', this.cartItems)
  }

  deleteItems() {
    this.cartItems = []
  }

  getItems() {
    return this.cartItems
  }

}
