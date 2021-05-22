import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  @Input() flag: string = '';
  @Input() flag2: any = {};

  crew: any = {};
  data: any = {};
  successfully: boolean = false;
  selectedFile: File;
  error: any = {};
  constructor(public crewService:ApiService) { }

  ngOnInit(): void {
    
  }

  onSubmit(dataObj): void {
    console.log("Lo");
    this.validateForms(dataObj.form.value);
  
    
    console.log(this.crew); 

    if ( this.flag  == "teachers") {
      this.crewService.postTeachers(this.crew, this.selectedFile)
      .subscribe(   
        (data)=>{
          this.data = data;
          this.successfully = true;         
          console.log("Post con éxito", this.data);
        },
        (error)=>{ 
          console.log(error);

        });  
      } else {

      //Create Students
      this.crew = dataObj.form.value;
      console.log(this.crew); 
  
      if ( this.flag  == "students") {
        this.crewService.postStudents(this.crew)
        .subscribe(   
          (data)=>{
            this.data = data;
            this.successfully = true;         
            console.log("Post Students con éxito", this.data);
          },
          (error)=>{ 
            console.log(error);
          });  
      
        } 
      }
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