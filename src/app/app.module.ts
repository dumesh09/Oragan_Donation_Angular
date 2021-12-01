import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateDonorComponent } from './create-donor/create-donor.component';
import { DonorDetailsComponent } from './donor-details/donor-details.component';
import { DonorListComponent } from './donor-list/donor-list.component';
import { UpdateDonorComponent } from './update-donor/update-donor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { CreateRecepientComponent } from './create-recepient/create-recepient.component';
import { RecepientDetailsComponent } from './recepient-details/recepient-details.component';
import { RecepientListComponent } from './recepient-list/recepient-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CreateDonorComponent,
    DonorDetailsComponent,
    DonorListComponent,
    UpdateDonorComponent,
    ChatComponent,
    CreateRecepientComponent,
    RecepientDetailsComponent,
    RecepientListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
