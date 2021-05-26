import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { merge, Observable, OperatorFunction, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-crudstudents',
  templateUrl: './crudstudents.component.html',
  styleUrls: ['./crudstudents.component.css']
})
export class CrudstudentsComponent implements OnInit {
  toti: any = {
    action: "",
    students: []
  };
  students: any = [];
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

  searchText: any;
  photoSelected: string | ArrayBuffer;
  file: File;
  formData: FormData;
  submitType: string;

  constructor(private studentsService: ApiService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  public async getStudents(){
    const promise = await this.studentsService.getStudents().toPromise();     
    this.toti = promise;
    for (let i = 0; i < this.toti.students.length; i++) {    
      this.students.push(this.toti.students[i].firstname); 
    }    
    console.log(this.students)   
  }

  // This method associate to New Button.
  onNew() { 
    this.submitType = 'new';  
  }

  // This method associate to Edit Button.
  onEdit(index: number, student: any ) {
    var url = "http://localhost:8081/uploads/";
    this.submitType = 'update';
    this.crew = student;
    this.photoSelected = url + student.urlphoto;
    console.log(this.crew)   ;
  }
 
  // This method associate to Delete Button.
  onDelete(index: number, student: any) {
    this.crew = student;
    this.studentsService.removeStudents(this.crew.id)
    .subscribe(   
      (data)=>{
        this.data = data;
        if(confirm("Vocẽ tem certeza que deseja apagar? ")) {
        this.successfully = true;
        setTimeout(()=>{
          this.successfully = false;
        }, 5000);           
        console.log("Eliminado con éxito", this.data);
        this.getStudents();
      }
      (error)=>{ 
        console.log(error);
      }
      }); 
  }

  onClose() {
    this.crew = {};
    this.submitType = "";
    this.photoSelected = "";
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
    console.log(' ', this.submitType);  
    if (this.submitType == 'update') {
      //Uploading Edit Body
      this.studentsService.putStudents(this.crew, this.crew.id)
      .subscribe(   
        (data)=>{
          this.data = data;
          this.successfully = true;
          setTimeout(()=>{
            this.successfully = false;
          }, 5000);         
          console.log("Put con éxito", this.data);
          this.getStudents();
          this.crew = {};
          this.submitType = "";
        },
        (error)=>{ 
          console.log(error);
        }); 
      } else {
        //Uploading Create Body
        this.studentsService.postStudents(this.crew)
        .subscribe(   
          (data)=>{
            this.data = data;
            this.successfully = true;
            setTimeout(()=>{
              this.successfully = false;
            }, 5000);                     
            console.log("Post con éxito", this.data);
            this.getStudents();  
            this.crew = {};
            this.submitType = "";         
          },
          (error)=>{ 
            console.log(error);
          }); 
      }
          
      //Uploading File
      this.formData = new FormData();
      this.formData.append('urlphoto', this.file);
  
      this.studentsService.uploadImage(this.formData).subscribe(   
        (data)=>{
          this.data = data;                 
          console.log("Post con éxito", this.data);  
          this.photoSelected = "";
        },
        (error)=>{ 
          console.log(error);
        });
    }
    validateForms(data): void {
      this.crew = data;
     
      if (this.crew.firstname == null) {
        this.error.firstname = 'Este campo não pode estar vazio';
        console.log('Llegue2', this.error.firstname );
      }
      if (this.crew.mail == null) {
        this.error.mail = 'Este campo não pode estar vazio';       
      }
    }
  }