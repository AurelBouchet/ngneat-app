import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { User1Component } from './user1/user1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { User2Component } from './user2/user2.component';
import { InformationRepository } from './store/information.store';

@NgModule({
  declarations: [AppComponent, User2Component, User1Component],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [InformationRepository],
  bootstrap: [AppComponent],
})
export class AppModule {}
