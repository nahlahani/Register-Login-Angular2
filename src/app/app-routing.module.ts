import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/index';
import { HomeComponent } from './home/index';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'registration', component: RegistrationComponent},
    { path: '', component: LoginComponent},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
export const routingComponents = [RegistrationComponent, LoginComponent];
