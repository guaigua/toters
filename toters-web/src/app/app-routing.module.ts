import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { RegisterStudentsComponent } from './register/register-students/register-students.component';
import { RegisterTeachersComponent } from './register/register-teachers/register-teachers.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register-students', component:RegisterStudentsComponent },
  { path: 'register-teachers', component:RegisterStudentsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
