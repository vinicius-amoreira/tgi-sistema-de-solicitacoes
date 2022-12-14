import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Login } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  login!: Login;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      "email": [null, [Validators.required, Validators.email]],
      "password": [null, Validators.required]
    });
  }

  async makeLogin() {
    try{
      if (this.form.valid) {
        await
          this.authService.authUser(this.form.value)
          location.reload();
      }
    } catch (error) {
      alert('Email ou Senha Incorretos! [Tente Novamente]')
      console.error(error);
    }
  }
}
