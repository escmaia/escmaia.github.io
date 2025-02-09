import { Component } from '@angular/core';
import { WhatsappButtonComponent } from './ui/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WhatsappButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'escmaia-portifolio';
}
