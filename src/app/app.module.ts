import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CRUDComponent } from './crud/crud.component';
import { CrudwithjsonComponent } from './crudwithjson/crudwithjson.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoPageComponent } from './no-page/no-page.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http'







@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    CRUDComponent,
    CrudwithjsonComponent,
    NoPageComponent,
    HomeComponent,
    
      

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
