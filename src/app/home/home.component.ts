import { Component, OnInit } from '@angular/core';
import { SuggestedProduct } from '../models/models';
import { CommonModule } from '@angular/common';
import { SuggestedProductsComponent } from '../suggested-products/suggested-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SuggestedProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  suggestedProducts: SuggestedProduct[] = [
    {
      bannerimage:'Banner/banner_jewel.jpg',
      category:{
        id:1,
        category:'Resin',
        subcategory:'Jewellery'
      }
    },
    {
      bannerimage:'Banner/banner_frame.png',
      category:{
        id:2,
        category:'Resin',
        subcategory:'Frames'
      }
    },
    {
      bannerimage:'Banner/banner_jewel.jpg',
      category:{
        id:3,
        category:'Crochet',
        subcategory:'Flowers'
      }
    },
  ];

  constructor() {}
  ngOnInit(): void {
    
  }
}
