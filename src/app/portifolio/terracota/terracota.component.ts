import { Component } from '@angular/core';
import { TERRACOTAS } from './terracota-data';

@Component({
  selector: 'app-terracota',
  standalone: true,
  imports: [],
  templateUrl: './terracota.component.html',
  styleUrl: './terracota.component.scss',
  host: { class: 'animate-fade' },
})
export class TerracotaComponent {
  images = TERRACOTAS;
}
