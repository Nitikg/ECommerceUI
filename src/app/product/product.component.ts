import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenProductDetailsDirective } from '../directives/open-product-details.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, OpenProductDetailsDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  @Input() view: 'grid' | 'list' |'currcartitem' | 'prevcartitem' = 'grid'

  constructor() {}

  ngOnInit(): void {
    
  }
} 
