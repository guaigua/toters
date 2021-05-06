import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { CrudstudentsComponent } from './admin/crudstudents/crudstudents.component';
import { CrudteachersComponent } from './admin/crudteachers/crudteachers.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';



const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component:RegisterComponent },
  { path: 'admin', component:AdminComponent},
  { path: 'students', component:CrudstudentsComponent},
  { path: 'teachers', component:CrudteachersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
