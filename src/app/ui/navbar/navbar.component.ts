import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HamburguerMenuComponent } from '../hamburguer-menu/hamburguer-menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HamburguerMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private router = inject(Router);

  goTo(route: string) {
    this.router.navigate([route]);
  }
}
