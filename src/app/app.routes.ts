import { Routes } from '@angular/router';
import { MainPage } from './interfaces/main-page/main-page';
import { NotFound } from './interfaces/not-found/not-found';
import { LoginFormComponent } from './components/login-form-component/login-form-component';

export const routes: Routes = [
    {
        path: 'home',
        component: MainPage,
        pathMatch: 'full'
    },
    //TODO: IMPLEMENT RECIPE ROUTES COMPONENTS
    /*{
        path: 'recipes',
        children: [
            {
                path: 'recipe/:id'
            },
            {
                path: '/recipe/new'
            },
            {
                path: '/recipe/edit/:id'
            },
            {
                path: '/recipe/remove/:id'
            }
        ]
    },
    { 
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },*/
    {
        path: 'login',
        component: LoginFormComponent
    },
    { 
        path: '**',
        component: NotFound
    }
];
