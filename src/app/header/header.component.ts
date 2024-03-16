import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Category, NavigationItem } from '../models/models';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OpenProductsDirective } from '../directives/open-products.directive';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, OpenProductsDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('modalTitle') modalTitle!: ElementRef;
  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef
  navigationList: NavigationItem[] = [];

  constructor(private navigationService : NavigationService) {}

  ngOnInit(): void {
    this.navigationService.getCategoryList().subscribe((list: Category[]) => {
      for(let item of list){
        let present = false;
        for( let navItem of this.navigationList){
          if(navItem.category === item.category){
            navItem.subcategories.push(item.subcategory);
            present = true;
          }
        }

        if(!present){
          this.navigationList.push({
            category: item.category,
            subcategories: [item.subcategory],
          });
        }
      }
    });
  }




  openModal(name: string){
    this.container.clear();

    if(name === 'login'){
      this.container.createComponent(LoginComponent);
      this.modalTitle.nativeElement.textContent = 'Enter Login Information';
    }
    
  
    if(name === 'register'){
      
      this.container.createComponent(RegisterComponent);
      this.modalTitle.nativeElement.textContent = 'Enter Register Information';
    }
  }
}
