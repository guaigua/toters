import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from  '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getStudents() {
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.get(environment.url.students + 'students/');
  }

  getTeachers() {
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.get(environment.url.teachers + 'teachers/');
  }


}