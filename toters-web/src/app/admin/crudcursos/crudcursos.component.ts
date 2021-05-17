import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

class Registration {
  constructor(
    public title: string = '',
    public description: string = '',
    public capacity: string = '',
    public hours: string = '',
    public temary: string = '',
  ) {}
}

@Component({
  selector: 'app-crudcursos',
  templateUrl: './crudcursos.component.html',
  styleUrls: ['./crudcursos.component.css']
})
export class CrudcursosComponent implements OnInit {
  crew: any = {};
  courses: string = "courses";
  toti: any = {};


  constructor(private coursesService: ApiService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  public async getCourses(){
    const promise = await this.coursesService.getCourses().toPromise();     
    this.toti = promise;
    console.log (this.crew.courses);
  }

  onSubmit(coursesService) {
    console.log();
  }

}
