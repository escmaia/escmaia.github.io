import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss',
})
export class MenuButtonComponent {
  private router = inject(Router);
  isOpen = signal(false);

  open() {
    this.isOpen.set(!this.isOpen());
  }

  goToHome() {
    this.goTo('home');
  }

  goToTerracota() {
    this.goTo('terracota');
  }

  goToBiografia() {
    this.goTo('biography');
  }

  openContact() {
    const msg = encodeURIComponent(
      'Oi! 👋 Encontrei seu trabalho e achei incrível! 🏺✨ Quero saber mais sobre suas esculturas e como funciona para encomendar uma peça. Pode me contar mais? Valeu! 😃'
    );
    const url = 'https://wa.me/554891765454/?text=' + msg;

    window.open(url, '_blank');
  }

  private goTo(route: string) {
    this.router.navigate([route]);
    this.isOpen.set(false);
  }
}
