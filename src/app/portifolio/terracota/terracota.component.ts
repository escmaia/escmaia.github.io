import { Component } from '@angular/core';
import { ImageLoaderDirective } from '../../core/directives/image-loader.directive';
import { TERRACOTAS } from './terracota-data';

@Component({
  selector: 'app-terracota',
  standalone: true,
  imports: [ImageLoaderDirective],
  templateUrl: './terracota.component.html',
  styleUrl: './terracota.component.scss',
  host: { class: 'animate-fade' },
})
export class TerracotaComponent {
  images = TERRACOTAS;
}
