import { Component, OnInit } from '@angular/core';
import {MatSidenavContainer} from "@angular/material/sidenav";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers: [MatSidenavContainer]
})
export class SidenavComponent implements OnInit {
  isExpanded = false;
  constructor() { }

  ngOnInit(): void {
  }

}
