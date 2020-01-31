import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegisteredComponent } from './registered/registered.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { InformationAddComponent } from './information-add/information-add.component';
import { InformationViewComponent } from './information-view/information-view.component';
import {HttpClientModule} from '@angular/common/http';
import { InformationViewDetailsComponent } from './information-view-details/information-view-details.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
 

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path : 'informationViewDetails/:id',
    component : InformationViewDetailsComponent
  },
  {
    path: "addInformation",
    component: InformationAddComponent
  },
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  },
  {
    path : 'pageNotFound',
    component : ErrorComponent
  },
  {
    path: '**',
    redirectTo: '/pageNotFound'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegistrationComponent,
    RegisteredComponent,
    DashboardComponent,
    ErrorComponent,
    InformationAddComponent,
    InformationViewComponent,
    InformationViewDetailsComponent,
    // HttpClient,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MDBBootstrapModule.forRoot()
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
