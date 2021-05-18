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
  selector: 'app-crudteachers',
  templateUrl: './crudteachers.component.html',
  styleUrls: ['./crudteachers.component.css']
})
export class CrudteachersComponent implements OnInit {
  toti: any = {};
  teachers: string = "teachers";
  crud: any = {};
  
  crew: any = {};
  data: any = {};
  successfully: boolean = false;
  
  constructor(private teachersService: ApiService,) {}

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
    this.getTeachers();
  }

  public async getTeachers(){
    const promise = await this.teachersService.getTeachers().toPromise();     
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
  onEdit(index: number, teacher: any ) {

    this.submitType = 'Update';
    this.crud.submitType = this.submitType;
    this.crew = teacher; 
    console.log(this.crew)   ;
  }

  // This method associate to Delete Button.
  onDelete(index: number) {
    // Delete the corresponding registration entry from the list.
    this.registrations.splice(index, 1);
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
    this.teachersService.putTeachers(this.crew, this.crew.id)
    .subscribe(   
      (data)=>{
        this.data = data;
        this.successfully = true;         
        console.log("Post con éxito", this.data);
      },
      (error)=>{ 
        console.log(error);
      }); 
  }
  

 

}

