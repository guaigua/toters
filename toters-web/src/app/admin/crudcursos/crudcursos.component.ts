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
  
  constructor(private coursesService: ApiService) { 
        // Add default registration data.
      /*   this.registrations.push(new Registration('Johan', 'Peter', '', 'johan@gmail.com', 'johan123', 'UK'));
        this.registrations.push(new Registration('Mohamed', 'Tariq', '', 'tariq@gmail.com', 'tariq123', 'UAE'));
        this.registrations.push(new Registration('Nirmal', 'Kumar','', 'nirmal@gmail.com', 'nirmal123', 'India')); */
      
  }

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
    console.log (this.toti.courses);
  }

  onNew() {
    // Initiate new registration.
    this.regModel = new Registration();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display registration entry section.
    this.showNew = true;
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
      this.registrations[this.selectedRow].hours = this.regModel.hours;
      this.registrations[this.selectedRow].temary = this.regModel.temary;
    }
    // Hide registration entry section.
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new registration.
    this.regModel = new Registration();
    // Retrieve selected registration from list and assign to model.
    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display registration entry section.
    this.showNew = true;
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

/*   // This method associate to Bootstrap dropdown selection change.
  onChangeCountry(country: string) {
    // Assign corresponding selected country to model.
    this.regModel.country = country;
  } */

}
