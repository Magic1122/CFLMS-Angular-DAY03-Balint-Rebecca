import { Component, OnInit } from '@angular/core';

import { petItems } from '../pet-shop-items'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  items = petItems

  constructor() { }

  ngOnInit(): void {
  }

}
