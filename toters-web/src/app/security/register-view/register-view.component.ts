import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  @Input() flag: string = '';

  crew: any = {};
  data: any = {};
  successfully: boolean = false;

  constructor(public crewService:ApiService) { }

  ngOnInit(): void {
   
  }


  onSubmit(dataObj): void {
    this.crew = dataObj.form.value;
    
    console.log(this.crew); 

    if ( this.flag  == "teachers") {
      this.crewService.postTeachers(this.crew)
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
    else {
      console.log("Estudiante");
    }

  }
  


}
