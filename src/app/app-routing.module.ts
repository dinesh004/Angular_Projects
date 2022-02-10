import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CRUDComponent } from './crud/crud.component';
import { CrudwithjsonComponent } from './crudwithjson/crudwithjson.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';


const routes: Routes = [
  {
    component:TemplateDrivenFormComponent,
    path:'TDF'
  },
  {
    component:CRUDComponent,
    path:'CRUD'
  },
  {
    component:CrudwithjsonComponent,
    path:'Crudwithjson'
  },
  {
    component:HomeComponent,
    path:''
  },
  {
    component:NoPageComponent,
    path:'**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
