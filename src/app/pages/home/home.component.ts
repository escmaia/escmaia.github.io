import { Component, signal } from '@angular/core';
import { MenuButtonComponent } from '../../ui/menu-button/menu-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: { class: 'animate-fade' },
})
export class HomeComponent {
  bgImage = signal('./image/home/home_1.jpg');
}
