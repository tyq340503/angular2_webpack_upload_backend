import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {CustomFormsModule} from "ng2-validation";
import { HttpModule } from '@angular/http';

import { RouterModule, Router } from '@angular/router';

import { AppRoutes } from './container.routes';
import { AppComponent } from './container.component';
import { LoginComponent } from '../modules/login/login.component';
import { RegisterComponent } from '../modules/register/register.component';
// import { RegisterService } from 'src/app/service/register.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes, {useHash: true})
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public router: Router) {
  }
}
