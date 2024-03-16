import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  selectPaymentMethodName=''
  selectedPaymentMethod = new FormControl('0')
  constructor() {}

  ngOnInit() : void {
    this.selectedPaymentMethod.valueChanges.subscribe((res:any) => {
      if(res=='0') this.selectPaymentMethodName = '';
      else this.selectPaymentMethodName = res.toString();
    })
  }
}
