import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { MenuButtonComponent } from './ui/menu-button/menu-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuButtonComponent],
  template: `
    <div class="w-full h-scree">
      <!-- <div class="z-5000 fixed top-5 left-5 "> -->
      <app-menu-button class="z-50 fixed right-4 top-4"></app-menu-button>
      <!-- </div> -->

      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
