import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
