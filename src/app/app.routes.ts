import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contact', component: Contact },
  { path: 'gmao-firstparc', loadComponent: () => import('./components/gmao-firstparc/gmao-firstparc').then(m => m.GmaoFirstparc) },
  { path: 'services/:id', loadComponent: () => import('./components/service-detail/service-detail').then(m => m.ServiceDetail) },
  { path: '**', redirectTo: '' }
];
