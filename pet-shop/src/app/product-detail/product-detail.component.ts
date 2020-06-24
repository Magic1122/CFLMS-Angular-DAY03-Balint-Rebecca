import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { petItems } from '../pet-shop-items'
import { CartService } from '../cart.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product

  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService) { }

  onAddCartClick(product) {
    this.cartService.addItem(product)
  }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.paramMap.get('id'))

    this.product = petItems[+this.activatedRoute.snapshot.paramMap.get('id')]

    console.log(this.product)
  }

}
