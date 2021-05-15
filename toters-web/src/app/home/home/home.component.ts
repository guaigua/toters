import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  toti: any = {};
 

  constructor(private coursesService:ApiService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  public async getCourses(){
    const promise = await this.coursesService.getCourses().toPromise();     
    this.toti = promise;
    console.log (this.toti.courses);
  }

}
