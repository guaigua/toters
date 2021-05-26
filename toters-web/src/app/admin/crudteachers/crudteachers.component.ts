import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { merge, Observable, OperatorFunction, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// class Registration {
//   constructor(
//     public firstName: string = '',
//     public lastName: string = '',
//     public dob: string = '',
//     public email: string = '',
//     public password: string = '',
//     public country: string = 'Select country'
//   ) {}
// }




@Component({
  selector: 'app-crudteachers',
  templateUrl: './crudteachers.component.html',
  styleUrls: ['./crudteachers.component.css']
})
export class CrudteachersComponent implements OnInit {
  toti: any = {
    action: "",
    teachers: []
  };

  // teachers: string = "teachers";
  teachers: any = [];
  crud: any = {};
  error: any = {};
  selectedFile: File;
 

  crew: any = {
    birth: "",​
    country: "",
    firstname: "",
    lastname: "",​
    mail: "",
    urlPhoto: "",    
  };
  data: any = {};
  successfully: boolean = false;  
  flag: any;
  name: any;
  x: any = {};
  array: any = [];
  searchText: any;

  fag: any = {};
  photoSelected: string | ArrayBuffer;
  file: File;
  formData: FormData;
   
  constructor(private teachersService: ApiService,
              private http: HttpClient) {}

    // // It maintains list of Registrations
    // registrations: Registration[] = [];
    // // It maintains registration Model
    // regModel: Registration;
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
    console.log(this.toti);
    for (let i = 0; i < this.toti.teachers.length; i++) {    
      this.teachers.push(this.toti.teachers[i].firstname); 
    }    
    console.log(this.teachers)   
  }

  // public async getTeachersforName(data){
  //   this.toti = {};
  //   const promise = await this.teachersService.getTeachersName(data).toPromise(); 
  //   this.array = promise;
  //   console.log(this.array);
  //   this.toti.teachers.push(this.array.teachers);
  // }

  // //Search:
  // model: any;

  // @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  // focus$ = new Subject<string>();
  // click$ = new Subject<string>();

  // search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
  //   const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
  //   const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
  //   const inputFocus$ = this.focus$;

  //   return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
  //     map(term => (term === '' ? this.teachers
  //       : this.teachers.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
        
  //   );
  // }

  // Click Search:

  // onSearch(data){
  //   console.log (data);
  //   this.getTeachersforName(data);
  // }

  // Click New:

  onNew() { 
    this.submitType = 'New';
    this.crud.submitType = this.submitType;  
  }
  
  // This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Save') {
      // Push registration model object into registration list.
      // this.registrations.push(this.regModel);
    } else {

      // // Update the existing properties values based on model.
      // this.registrations[this.selectedRow].firstName = this.regModel.firstName;
      // this.registrations[this.selectedRow].lastName = this.regModel.lastName;
      // this.registrations[this.selectedRow].dob = this.regModel.dob;
      // this.registrations[this.selectedRow].email = this.regModel.email;
      // this.registrations[this.selectedRow].password = this.regModel.password;
      // this.registrations[this.selectedRow].country = this.regModel.country;
    }
    // Hide registration entry section.
    this.showNew = false;
  }
  // This method associate to Edit Button.
  onEdit(index: number, teacher: any ) {
    var url = "http://localhost:8081/uploads/";
    this.submitType = 'update';
    this.crud.submitType = this.submitType;
    this.crew = teacher; 
    this.photoSelected = url + teacher.urlphoto 
    console.log(this.crew);
  }

  // This method associate to Delete Button.
  onDelete(index: number, teacher: any) {
    // Delete the corresponding registration entry from the list.
    // this.registrations.splice(index, 1);
    this.crew = teacher;
    this.teachersService.removeTeachers(this.crew.id)
    .subscribe(   
      (data)=>{
        this.data = data;
        if(confirm("Vocẽ tem certeza que deseja apagar? ")) {
        this.successfully = true;
        setTimeout(()=>{
          this.successfully = false;
        }, 5000);       
        console.log("Eliminado con éxito", this.data);
        this.getTeachers();
        }
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
    // this.regModel.country = country;
  }

  onPhotoSelected(event): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

 

  onSubmit(dataObj): void {
    this.validateForms(dataObj.form.value);
    this.crew = dataObj.form.value;
    this.crew.urlphoto = this.crew.urlphoto.match(/[^\\/]*$/)[0];
    // this.crew.urlphoto = this.crew.urlphoto.slice(12);
    console.log(this.crew);  
    if (this.submitType == 'update') {
      //Uploading Edit Body
      this.teachersService.putTeachers(this.crew, this.crew.id)
      .subscribe(   
        (data)=>{
          this.data = data;
          this.successfully = true;
          setTimeout(()=>{
            this.successfully = false;
          }, 5000);         
          console.log("Put con éxito", this.data);
          this.getTeachers();
          this.crew = {};
        },
        (error)=>{ 
          console.log(error);
        }); 
      } else {
        //Uploading Create Body
        this.teachersService.postTeachers(this.crew)
        .subscribe(   
          (data)=>{
            this.data = data;
            this.successfully = true;
            setTimeout(()=>{
              this.successfully = false;
            }, 5000);  
            this.crew = {};         
            console.log("Post con éxito", this.data);
            this.getTeachers();           
          },
          (error)=>{ 
            console.log(error);
          }); 
        }
          
        //Uploading File
        this.formData = new FormData();
        this.formData.append('urlphoto', this.file);
    
        this.teachersService.uploadImage(this.formData).subscribe(   
          (data)=>{
            this.data = data;                 
            console.log("Post con éxito", this.data);  
            this.photoSelected = "";
          },
          (error)=>{ 
            console.log(error);
          });   
       
    }


    
 
    onFileChanged(event) {
      this.selectedFile = event.target.files[0]
    }
    validateForms(data): void {
      this.crew = data;
     
      if (this.crew.firstname == null) {
        this.error.firstname = 'Este campo não pode estar vazio';
        console.log('Llegue2', this.error.firstname );
      }
      if (this.crew.mail == null) {
        this.error.mail = 'Este campo não pode estar vazio';       
      };
  }
}
