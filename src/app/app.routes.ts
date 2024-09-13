import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('../app/login/login.component').then( m => m.LoginComponent )
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
