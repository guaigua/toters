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
  toti: any = {};
  courses: string = "courses";
  crew: any = {};

  crud: any = {};
  data: any = {};
  successfully: boolean = false;

  constructor(private coursesService: ApiService) {}

  // It maintains list of Registrations
  registrations: Registration[] = [];
  // It maintains registration Model
  regModel: Registration;
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';
  // It maintains table row index based on selection.
  selectedRow: number;
  // It maintains Array of countries.
  countries: string[] = ['US', 'UK', 'India', 'UAE'];

  ngOnInit(): void {
    this.getCourses();
  }

  public async getCourses(){
    const promise = await this.coursesService.getCourses().toPromise();     
    this.toti = promise;
    console.log (this.crew.courses);
  }
  onNew() { 
    this.submitType = 'New';
    this.crud.submitType = this.submitType;  
  }
 // This method associate to Save Button.
 onSave() {
  if (this.submitType === 'Save') {
    // Push registration model object into registration list.
    this.registrations.push(this.regModel);
  } else {

    // Update the existing properties values based on model.
    this.registrations[this.selectedRow].title = this.regModel.title;
    this.registrations[this.selectedRow].description = this.regModel.description;
    this.registrations[this.selectedRow].capacity = this.regModel.capacity;
    this.registrations[this.selectedRow].hours = this.regModel.hours
    this.registrations[this.selectedRow].temary = this.regModel.temary;
  }
  // Hide registration entry section.
  this.showNew = false;
}
// This method associate to Edit Button.
  onEdit(index: number, course: any ) {

    this.submitType = 'Update';
    this.crud.submitType = this.submitType;
    this.crew = course; 
    console.log(this.crew)   ;
  }
  // This method associate to Delete Button.
  onDelete(index: number, course: any) {
    // Delete the corresponding registration entry from the list.
    this.registrations.splice(index, 1);
    this.crew = course;
    this.coursesService.removeCourses(this.crew.id)
    .subscribe(   
      (data)=>{
        this.data = data;
        this.successfully = true;         
        console.log("Eliminado con éxito", this.data);
        this.getCourses();
      },
      (error)=>{ 
        console.log(error);
      }); 
  }

  // This method associate toCancel Button.
  onCancel() {
    // Hide registration entry section.
    this.showNew = false;
  }
 
  onSubmit(dataObj): void {
    this.crew = dataObj.form.value;
    console.log(this.crew);
    this.coursesService.putCourses(this.crew, this.crew.id)
    .subscribe(   
      (data)=>{
        this.data = data;
        this.successfully = true;         
        console.log("Post con éxito", this.data);
      },
      (error)=>{ 
        console.log(error);
      }); 
    
    this.coursesService.postCourses(this.crew)
    .subscribe(   
      (data)=>{
        this.data = data;
        this.successfully = true;
        this.crew = {};         
        console.log("Post con éxito", this.data);
        this.getCourses();
      },
      (error)=>{ 
        console.log(error);
      });  
    }
  }
