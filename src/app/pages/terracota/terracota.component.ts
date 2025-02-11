import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-terracota',
  standalone: true,
  imports: [],
  templateUrl: './terracota.component.html',
  styleUrl: './terracota.component.scss',
  host: { class: 'animate-fade' },
})
export class TerracotaComponent {
  images = signal([
    './image/terracota/home_1.jpeg',

    './image/terracota/home_2.jpeg',
    './image/terracota/home_3.jpeg',
    './image/terracota/home_4.jpeg',
  ]);
}
