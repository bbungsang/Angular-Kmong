import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
// import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import {HttpModule} from '@angular/http';
// import {CollapseModule} from 'ngx-bootstrap';
import {RouterModule} from '@angular/router';
// import {ActionService} from './action.service';
import {LoadingService} from './loading.service';
// import {AuthService} from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    // CollapseModule.forRoot()
  ],
  declarations: [NavComponent],
  exports: [
    NavComponent
  ],
  providers: [
    // ActionService,
    LoadingService,
    // AuthService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
