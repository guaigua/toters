import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterStudentsComponent } from './register-students/register-students.component';
import { RegisterTeachersComponent } from './register-teachers/register-teachers.component';
import { TemplateModule } from '../template/template.module';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    RegisterStudentsComponent,
    RegisterTeachersComponent
  ],
  imports: [
    CommonModule,
    TemplateModule,
    FormsModule, 
  ]
})
export class RegisterModule { }
