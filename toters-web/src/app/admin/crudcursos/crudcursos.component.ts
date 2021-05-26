import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { merge, Observable, OperatorFunction, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';

// class Registration {
//   constructor(
//     public firstName: string = '',
//     public lastName: string = '',
//     public dob: string = '',
//     public email: string = '',
//     public password: string = '',
//   ) {}
// }


@Component({
  selector: 'app-crudcursos',
  templateUrl: './crudcursos.component.html',
  styleUrls: ['./crudcursos.component.css']
})
export class CrudcursosComponent implements OnInit {
  toti: any = {};
  // courses: string = "courses";
  courses: any = [];
  crud: any = {};
  error: any = {};
  crew: any = {}
   
  data: any = {};
  successfully: boolean = false;  
  flag: any;
  name: any;
  x: any = {};
  searchText: any;

  constructor(private coursesService: ApiService) {}

  // It maintains list of Registrations
/*   registrations: Registration[] = [];
 */  // It maintains registration Model
/*   regModel: Registration;
 */  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';
  // It maintains table row index based on selection.
  selectedRow: number;

  ngOnInit(): void {
    this.getCourses();
  }

  public async getCourses(){
    const promise = await this.coursesService.getCourses().toPromise();     
    this.toti = promise;
    for (let i = 0; i < this.toti.courses.length; i++) {    
      this.courses.push(this.toti.courses[i].title); 
    }    
    console.log(this.courses)   
  }
  public async getCoursesforName(data){
    this.toti = {};
    const promise = await this.coursesService.getCoursesName(data).toPromise();     
    this.toti = promise;
    console.log(this.toti);
  }
  //Search:
  model: any;

  @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.courses
        : this.courses.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))

    );
  }

  // Click Search:

  onSearch(data){
    console.log (data);
    this.getCoursesforName(data);

  }
 

  // Click New:
  onNew() { 
    this.submitType = 'New';
    this.crud.submitType = this.submitType;  
  }
 // This method associate to Save Button.
 onSave() {
  if (this.submitType === 'Save') {
    // Push registration model object into registration list.
/*     this.registrations.push(this.regModel);
 */  } else {

    //// Update the existing properties values based on model.
    /* this.registrations[this.selectedRow].title = this.regModel.title;
    this.registrations[this.selectedRow].description = this.regModel.description;
    this.registrations[this.selectedRow].capacity = this.regModel.capacity;
    this.registrations[this.selectedRow].hours = this.regModel.hours */
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
/*     this.registrations.splice(index, 1);
 */    this.crew = course;
    this.coursesService.removeCourses(this.crew.id)
    .subscribe(   
      (data)=>{
        this.data = data;
        if(confirm("Vocẽ tem certeza que deseja apagar? ")) {
        this.successfully = true;         
        console.log("Eliminado con éxito", this.data);
        this.getCourses();
      }
      (error)=>{ 
        console.log(error);
      }
      }); 
  }

  // This method associate toCancel Button.
  onCancel() {
    // Hide registration entry section.
    this.showNew = false;
  }
 
  onSubmit(dataObj): void {
    this.validateForms(dataObj.form.value);
    this.crew = dataObj.form.value;
    console.log(this.crew);


    if (this.submitType == 'update') {
      this.coursesService.putCourses(this.crew, this.crew.id)
      .subscribe(   
        (data)=>{
          this.data = data;
          this.successfully = true;
          setTimeout(()=>{
            this.successfully = false;
          }, 5000);         
          console.log("Put con éxito", this.data);
          this.getCourses;
          this.crew = {};
        },
        (error)=>{ 
          console.log(error);
        }); 
      } else {
      this.coursesService.postCourses(this.crew)
      .subscribe(   
        (data)=>{
          this.data = data;
          this.successfully = true;
          setTimeout(()=>{
            this.successfully = false;
          }, 5000);      
          console.log("Post con éxito", this.data);
          this.getCourses();
          this.crew = {};
        },
        (error)=>{ 
          console.log(error);
        }); 

        
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
      };
  }

}
