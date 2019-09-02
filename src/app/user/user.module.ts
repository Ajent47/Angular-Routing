import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ]),
    SharedModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
