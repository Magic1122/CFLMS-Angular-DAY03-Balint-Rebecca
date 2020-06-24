import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems
  checkoutForm

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      email: ''
    })
   }

   onFormCheckOut() {
     console.log(this.cartItems)

     this.checkoutForm.reset()
     this.cartItems = null
     this.cartService.deleteItems()
   }

  ngOnInit(): void {

    this.cartItems = this.cartService.getItems()
    console.log(this.cartItems)

  }
}
