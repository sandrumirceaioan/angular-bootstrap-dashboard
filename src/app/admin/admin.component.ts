import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  showSidebar: boolean = true;
  showNavbar: boolean = true;
  showFooter: boolean = true;
  isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
