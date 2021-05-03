import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTeachersComponent } from './register-teachers.component';

describe('RegisterTeachersComponent', () => {
  let component: RegisterTeachersComponent;
  let fixture: ComponentFixture<RegisterTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
