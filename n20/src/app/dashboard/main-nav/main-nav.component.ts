import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  sideNavOpen: boolean = false;
  openSearchModal: boolean = false;
  constructor() { }
  ngOnInit() {
  }
  toggleNav(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
  toggleSearchModal(): void {
    this.openSearchModal = !this.openSearchModal;
  }

}
