import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss',
})
export class WhatsappButtonComponent {
  openWhatsApp() {
    const msg = encodeURIComponent(
      'Oi! 👋 Encontrei seu trabalho e achei incrível! 🏺✨ Quero saber mais sobre suas esculturas e como funciona para encomendar uma peça. Pode me contar mais? Valeu! 😃'
    );
    const url = 'https://wa.me/554891765454/?text=' + msg;

    window.open(url, '_blank');
  }
}
