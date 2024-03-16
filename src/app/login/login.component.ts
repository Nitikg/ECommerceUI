import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwd: ['',
        [Validators.required, Validators.minLength(6), Validators.maxLength(15)],],
    });
  }

  login() {

  }

  get Email() : FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get PWD() : FormControl {
    return this.loginForm.get('pwd') as FormControl;
  }
}
