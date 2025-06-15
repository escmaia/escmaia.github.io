import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PEDRAS } from './pedras-data';

@Component({
  selector: 'app-pedras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pedras.component.html',
  styleUrl: './pedras.component.scss',
})
export class PedrasComponent {
  images = PEDRAS;
  imageLoaded: boolean[] = [];

  // onImageLoad(event: Event) {
  //   const index = this.images.indexOf(
  //     (event.target as HTMLImageElement).src.split('/').pop() || ''
  //   );
  //   this.imageLoaded[index] = true;
  // }
}
