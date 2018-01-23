import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {HomeComponent} from './home/home.component';


export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'users', loadChildren: 'app/user/user.module#UserModule'}
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
