import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudteachersComponent } from './crudteachers.component';

describe('CrudteachersComponent', () => {
  let component: CrudteachersComponent;
  let fixture: ComponentFixture<CrudteachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudteachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudteachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
