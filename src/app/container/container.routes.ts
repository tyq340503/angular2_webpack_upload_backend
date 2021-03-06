import { Routes } from '@angular/router';
import { AppComponent } from './container.component';
import { LoginComponent } from '../modules/login/login.component';
import { RegisterComponent } from '../modules/register/register.component';
import { HomeModule } from '../modules/home/home.module';

export const AppRoutes: Routes = [
    {
        path: '', component: AppComponent, children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            // { path: 'home', loadChildren: '../modules/home/home.module#HomeModule' },
            { path: 'home', loadChildren: () => HomeModule },
            { path: '**', redirectTo: 'login'}
        ]
    }
];
