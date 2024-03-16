import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  view : 'grid' | 'list' = 'grid';
  sortby: 'default' | 'htl' | 'lth' = 'default';
  constructor() {}

  ngOnInit(): void {
    
  }
}
