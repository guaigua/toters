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
  photoSelected: string | ArrayBuffer;
  file: File;
  formData: FormData;

  constructor(public crewService:ApiService) { }

  ngOnInit(): void {
    
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
    this.crew.urlphoto = this.crew.urlphoto.match(/[^\\/]*$/)[0];    
    console.log(this.crew);
    if ( this.flag  == "teachers") {
      this.crewService.postTeachers(this.crew)
      .subscribe(   
        (data)=>{
          this.data = data;
          this.successfully = true;     
          setTimeout(()=>{
            this.successfully = false;
          }, 5000);         
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
            setTimeout(()=>{
              this.successfully = false;
            }, 5000);                
            console.log("Post Students con éxito", this.data);
          },
          (error)=>{ 
            console.log(error);
          });  
      
        } 
      }
      //Uploading File
      this.formData = new FormData();
      this.formData.append('urlphoto', this.file);
  
      this.crewService.uploadImage(this.formData).subscribe(   
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