import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../ui/navbar/navbar.component';

@Component({
  selector: 'app-portifolio',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './portifolio.component.html',
})
export class PortifolioComponent {}
