import { Injectable } from '@angular/core';
import { Category } from '../models/models';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NavigationService {

  baseUrl = "https://localhost:7256/api/Shopping/"
  constructor(private http : HttpClient){
   }

  getCategoryList() {
    let url = this.baseUrl + 'GetCategoryList';
    return this.http.get<any[]>(url).pipe(
      map((categories: any[]) =>
      categories.map((category: any) => {
        let mappedCategory : Category = {
          id: category.id,
          category: category.category,
          subcategory: category.subcategory,
        };
        return mappedCategory;
      })
      )
    )
  }
}
