import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    UserModule,
    HttpClientModule,

    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
