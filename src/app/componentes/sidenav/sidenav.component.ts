import { Component, OnInit } from '@angular/core';
import { MatSidenavContainer } from "@angular/material/sidenav";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers: [MatSidenavContainer]
})
export class SidenavComponent implements OnInit {
  isExpanded = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.authService.logout();
    location.reload();
  }
}
