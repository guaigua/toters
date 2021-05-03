import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterStudentsComponent } from './register/register-students/register-students.component';
import { RegisterTeachersComponent } from './register/register-teachers/register-teachers.component';
import { HeaderComponent } from './template/header/header.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'register-students', component:RegisterStudentsComponent },
  { path: 'register-teachers', component:RegisterTeachersComponent },
  { path: 'header', component:HeaderComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
