import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

class Registration {
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public dob: string = '',
    public email: string = '',
    public password: string = '',
    public country: string = 'Select country'
  ) {}
}

@Component({
  selector: 'app-crudstudents',
  templateUrl: './crudstudents.component.html',
  styleUrls: ['./crudstudents.component.css']
})
export class CrudstudentsComponent implements OnInit {
  toti: any = {};
  students: string = "students";
  crud: any = {};


  crew: any = {};
  data: any = {};
  successfully: boolean = false;

  constructor(private studentsService: ApiService) {}

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
    this.getStudents();
  }

  public async getStudents(){
    const promise = await this.studentsService.getStudents().toPromise();     
    this.toti = promise;
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
      this.registrations[this.selectedRow].firstName = this.regModel.firstName;
      this.registrations[this.selectedRow].lastName = this.regModel.lastName;
      this.registrations[this.selectedRow].dob = this.regModel.dob;
      this.registrations[this.selectedRow].email = this.regModel.email;
      this.registrations[this.selectedRow].password = this.regModel.password;
      this.registrations[this.selectedRow].country = this.regModel.country;
    }
    // Hide registration entry section.
    this.showNew = false;
  }

// This method associate to Edit Button.
onEdit(index: number, student: any ) {

  this.submitType = 'Update';
  this.crud.submitType = this.submitType;
  this.crew = student; 
  console.log(this.crew)   ;
}

 
  // This method associate to Delete Button.
  onDelete(index: number, student: any) {
    // Delete the corresponding registration entry from the list.
    this.registrations.splice(index, 1);
    this.crew = student;
    this.studentsService.removeStudents(this.crew.id)
    .subscribe(   
      (data)=>{
        this.data = data;
        this.successfully = true;         
        console.log("Eliminado con éxito", this.data);
        this.getStudents();
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

  // This method associate to Bootstrap dropdown selection change.
  onChangeCountry(country: string) {
    // Assign corresponding selected country to model.
    this.regModel.country = country;
  }
  onSubmit(dataObj): void {
    
    this.crew = dataObj.form.value;
    console.log(this.crew);
    this.studentsService.putStudents(this.crew, this.crew.id)
    .subscribe(   
      (data)=>{
        this.data = data;
        this.successfully = true;         
        console.log("Post con éxito", this.data);
      },
      (error)=>{ 
        console.log(error);
      }); 
    
    this.studentsService.postStudents(this.crew)
    .subscribe(   
      (data)=>{
        this.data = data;
        this.successfully = true;
        this.crew = {};         
        console.log("Post con éxito", this.data);
        this.getStudents();
      
      },
      (error)=>{ 
        console.log(error);
      });  
    } 
  }