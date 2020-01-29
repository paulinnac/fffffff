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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { FormsModule } from '@angular/forms';

import { DashCarouselComponent } from './dashboard/dash-carousel/dash-carousel.component';
import { DashDateComponent } from './dashboard/dash-date/dash-date.component';
import { DashBirthdaysComponent } from './dashboard/dash-birthdays/dash-birthdays.component';



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
    AdminDashboardComponent,
    DashCarouselComponent,
    DashDateComponent,
    DashBirthdaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    HttpClientModule,
    //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),

    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
