import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { TemplateModule } from '../template/template.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    TemplateModule,
    FormsModule, 
  ]
})
export class RegisterModule { }
