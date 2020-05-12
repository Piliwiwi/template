import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@models/product.model';


@Component({
  selector: 'visitor-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  public product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
