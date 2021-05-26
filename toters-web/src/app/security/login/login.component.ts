import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  login: any = {};
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(dataObj): void {
    this.router.navigate(['admin']);
  }

  onTeachers(){
    this.router.navigate(['admin']);
  }
  onStudents(){
    this.router.navigate(['home']);
  }
}
