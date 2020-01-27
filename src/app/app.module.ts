import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminImagesComponent } from './admin-images/admin-images.component';
import { AdminBirthdaysComponent } from './admin-birthdays/admin-birthdays.component';
import { AdminEducationComponent } from './admin-education/admin-education.component';
import { AdminTopicsComponent } from './admin-topics/admin-topics.component';
import { AdminSlackComponent } from './admin-slack/admin-slack.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminImagesComponent,
    AdminBirthdaysComponent,
    AdminEducationComponent,
    AdminTopicsComponent,
    AdminSlackComponent,
    DashboardComponent,
    AdminMenuComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
