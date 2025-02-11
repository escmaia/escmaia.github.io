import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TerracotaComponent } from './pages/terracota/terracota.component';
import { BiographyComponent } from './pages/biography/biography.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'terracota',
    component: TerracotaComponent,
  },
  {
    path: 'biography',
    component: BiographyComponent,
  },
];
