import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { HomeComponent } from './components/home/home.component';
import { ConnectionsComponent } from './components/connections/connections.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UserCardComponent,
    HomeComponent,
    ConnectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
