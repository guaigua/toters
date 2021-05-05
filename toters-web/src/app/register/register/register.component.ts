import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
