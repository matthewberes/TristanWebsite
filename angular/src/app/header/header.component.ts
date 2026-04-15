import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) { }

  menuOpened: boolean = false;

  openMenu() {
    this.menuOpened = true
  }

  closeMenu() {
    this.menuOpened = false
  }

  cta() {
    this.menuOpened = false
    this.router.navigate(['form']);
  }
}
