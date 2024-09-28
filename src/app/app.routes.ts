import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('../app/login/login.component').then( m => m.LoginComponent )
    },
    {
        path: 'inicio',
        loadChildren: () => import('../app/home/home.routes').then( m => m.router )
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
