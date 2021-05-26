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

  getTeachersName(data) {    
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.get(environment.url.teachers + 'name/' + data);
  }

  putTeachers(data, id:number) {
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.put(environment.url.teachers + 'teachers/' + id, data);
  }

  removeTeachers(id:number) {
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.delete(environment.url.teachers + 'teachers/' + id);
  }

  postTeachers( data) {
    console.log(data);
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.post(environment.url.teachers + 'teachers/',  data);
  }

  // STUDENTS 
  getStudents() {
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.get(environment.url.students + 'students/');
  } 
  getStudentsName(data) {
    console.log(data);
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.get(environment.url.teachers + 'name/' + data);
  }

  postStudents(data) {
    console.log('POST')
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.post(environment.url.students + 'students/', data);
    
  }

  putStudents(data, id:number) {
    console.log('PUT')
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.put(environment.url.students + 'students/' + id, data);
  }

  removeStudents(id:number) {
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.delete(environment.url.students + 'students/' + id);
  }

  // COURSES 

  getCourses() {
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.get(environment.url.courses + 'courses/');   
  }
  getCoursesName(data) {
    console.log(data);
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.get(environment.url.teachers + 'name/' + data);
  }
  postCourses(data) {
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.post(environment.url.courses + 'courses/', data);
    
  }
  putCourses(data, id:number) {
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.put(environment.url.courses + 'courses/' + id, data);
  }

  removeCourses(id:number) {
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.delete(environment.url.courses + 'courses/' + id);
  }

  uploadImage(data: FormData){
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.post<any>(environment.url.teachers + 'file/',  data);     
  }

}