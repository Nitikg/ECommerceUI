import { Component, Input, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';
import { Category } from '../models/models';

@Component({
  selector: 'app-suggested-products',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './suggested-products.component.html',
  styleUrl: './suggested-products.component.css'
})
export class SuggestedProductsComponent implements OnInit {
  @Input() category: Category = {
    id:0,
    category:'',
    subcategory:'',
  };
  @Input() count: number = 3;

  constructor() {}

  ngOnInit(): void {
    
  }
}
