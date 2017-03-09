import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { JsonSchemaFormModule } from 'angular2-json-schema-form/src';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    JsonSchemaFormModule.forRoot()
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
