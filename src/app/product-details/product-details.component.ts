import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SuggestedProductsComponent } from '../suggested-products/suggested-products.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,SuggestedProductsComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  imageIndex : number = 1;

  constructor() {}

  ngOnInit(): void {
    
  }
}
