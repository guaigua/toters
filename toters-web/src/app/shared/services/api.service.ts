import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from  '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // TEACHERS
  getTeachers() {
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.get(environment.url.teachers + 'teachers/');
  }

  putTeachers(id:number) {
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.get(environment.url.teachers + 'teachers/' + id);
  }

  postTeachers(data) {
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.post(environment.url.teachers + 'teachers/', data);
  }

  // STUDENTS 
  getStudents() {
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.get(environment.url.students + 'students/');
  } 

  postStudents(data) {
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.post(environment.url.students + 'students/', data);
    
  }

  // COURSES 

  getCourses() {
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.get(environment.url.courses + 'courses/');   
  }

  postCourses(data) {
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.post(environment.url.courses + 'courses/', data);
    
  }


}