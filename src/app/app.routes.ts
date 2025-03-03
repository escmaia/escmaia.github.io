import { Routes } from '@angular/router';
import { BiographyComponent } from './portifolio/biography/biography.component';
import { HomeComponent } from './portifolio/home/home.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { TerracotaComponent } from './portifolio/terracota/terracota.component';
import { TestimonialComponent } from './portifolio/testimonial/testimonial.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '',
    component: PortifolioComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'terracota',
        component: TerracotaComponent,
      },
      {
        path: 'biografia',
        component: BiographyComponent,
      },
      {
        path: 'depoimentos',
        component: TestimonialComponent,
      },
    ],
  },
];
