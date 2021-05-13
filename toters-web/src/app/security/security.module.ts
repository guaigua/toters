import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TemplateModule } from '../shared/template/template.module';
import { RegisterViewComponent } from './register-view/register-view.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateModule,
  ],
  exports: [
    RegisterViewComponent
  ]
})
export class SecurityModule { }
