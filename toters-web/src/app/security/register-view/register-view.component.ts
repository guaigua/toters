import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
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

  constructor(public crewService:ApiService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges) {
    console.log(this.flag2);
    var tabInValue = changes['flag2'];
    console.log('Aqui', this.crew);
    if (tabInValue.currentValue?.submitType == 'Update') {    
       this.getTeacher();
       console.log('Aqui2', this.crew);
    } 
  }



  public getTeacher(){
    if( this.flag2.submitType == "update") {
      this.crewService.putTeachers(this.flag2.id)
      .subscribe(   
        (data)=>{
          this.data = data;
          this.crew = this.data.teachersList;
          this.successfully = true;
          this.crew = {};
          console.log("Post con éxito", this.data);
        },
        (error)=>{ 
          console.log(error);
        });

    }
  }

  onSubmit(dataObj): void {
    console.log(this.flag2.submitType);
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
  }