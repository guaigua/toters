import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { CrudcursosComponent } from './admin/crudcursos/crudcursos.component';
import { CrudstudentsComponent } from './admin/crudstudents/crudstudents.component';
import { CrudteachersComponent } from './admin/crudteachers/crudteachers.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterViewComponent } from './security/register-view/register-view.component';
import { RegisterComponent } from './security/register/register.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component:RegisterComponent },
  { path: 'registro2', component:RegisterViewComponent },
  { path: 'admin', component:AdminComponent},
  { path: 'aluno', component:CrudstudentsComponent},
  { path: 'professor', component:CrudteachersComponent},
  { path: 'cursos', component:CrudcursosComponent},
  { path: 'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
