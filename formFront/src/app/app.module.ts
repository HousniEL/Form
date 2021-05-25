import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputUserComponent } from './Components/input-user/input-user.component';
import { HttpClientModule } from '@angular/common/http';
import { DataUserComponent } from './Components/data-user/data-user.component';

@NgModule({
  declarations: [
    AppComponent,
    InputUserComponent,
    DataUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
