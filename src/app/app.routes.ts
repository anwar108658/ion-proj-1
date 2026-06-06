import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'homes',
    loadComponent: () => import('./add-task/add-task.component').then((m) => m.AddTaskComponent),
  },
  {
    path: '',
    redirectTo: 'homes',
    pathMatch: 'full',
  },
];
