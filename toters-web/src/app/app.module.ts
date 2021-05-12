import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { TemplateModule } from './shared/template/template.module';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { SecurityModule } from './security/security.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    TemplateModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule,
    SecurityModule

        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
