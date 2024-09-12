import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  registerPage: boolean = false;

  register!: FormGroup;
  login!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.register = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.login = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  registerSubmit() {
    console.log(this.register.value);
  }

  registerLogin() {
    console.log(this.login.value);
  }


}
