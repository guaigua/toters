import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudstudentsComponent } from './crudstudents/crudstudents.component';
import { CrudteachersComponent } from './crudteachers/crudteachers.component';
import { AdminComponent } from './admin/admin.component';
import { TemplateModule } from '../template/template.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [   
    CrudstudentsComponent,
    CrudteachersComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    TemplateModule,
    FormsModule,
  ]
})
export class AdminModule { }
