import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-students',
  templateUrl: './register-students.component.html',
  styleUrls: ['./register-students.component.css']
})
export class RegisterStudentsComponent implements OnInit {
  teachers: any = {};
  students: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(dataObj): void {
    this.teachers = dataObj.form.value;
    this.students = dataObj.form.value;
    console.log(this.teachers);
    console.log(this.students);
  }

}
