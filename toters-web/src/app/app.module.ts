import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { TemplateModule } from './template/template.module';
import { AdminModule } from './admin/admin.module';
import { CrudcursosComponent } from './crudcursos/crudcursos.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CrudcursosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    LoginModule,
    RegisterModule,
    TemplateModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule

        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
