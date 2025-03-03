import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hamburguer-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hamburguer-menu.component.html',
  styleUrl: './hamburguer-menu.component.scss',
})
export class HamburguerMenuComponent {
  private router = inject(Router);

  isOpen = signal(false);

  toggleMenu() {
    this.isOpen.set(!this.isOpen());
  }

  goTo(route: string) {
    this.toggleMenu();
    this.router.navigate([route]);
  }
}
