import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { AuthService } from './auth/auth.service';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  declarations: [
    AuthComponent
  ],
  providers: [
    AuthService
  ]
})
export class UserModule {
}
