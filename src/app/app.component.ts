import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userIsLogged: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.isLoggedIn();
  }

  isLoggedIn(): void {
    if (this.authService.getAuthorizationToken() != null) {
      this.router.navigate(["/dashboard"]);
      this.userIsLogged = true;
    } else {
      this.userIsLogged = false;
      this.router.navigate(["/login"]);
    }
  }
}
